/**
 * app.js
 * Startup From Zero — Master Founder Operating Platform
 * Interactive Decision Tree Canvas, Diagnostic Engine, Tracker & Milestones.
 */

import { GUIDE_SECTIONS, STAGES_LIST, MASTER_CHECKLIST, FINAL_COMPANY_CHECKLIST } from './guide-data.js';
import { DECISION_TREE_NODES, DECISION_TREE_EDGES } from './tree-data.js';

// ============================================================
// STATE MANAGEMENT & LOCAL STORAGE
// ============================================================

const STORAGE_KEY = 'startup_guide_state_v2';

const DEFAULT_STATE = {
  theme: 'dark',
  activeTab: 'navigator',
  currentFocusStageId: 0,
  completedStageIds: [],
  milestones: [
    { id: 'm1', title: 'Complete 15 problem discovery interviews', targetDate: '', stageId: 3, completed: false },
    { id: 'm2', title: 'Ship concierge / no-code validation experiment', targetDate: '', stageId: 7, completed: false },
    { id: 'm3', title: 'Acquire first 5 paying pilot customers', targetDate: '', stageId: 10, completed: false }
  ],
  checklistState: {},
  finalChecklistState: {},
  weeklyReviews: [],
  decisionLogs: [
    {
      id: 'd1',
      date: new Date().toISOString().split('T')[0],
      decision: 'Focus initial ICP strictly on supply chain logistics managers with >$10M inventory',
      owner: 'Founder',
      evidence: '15 discovery calls showed mid-market lacks budget, enterprise has hair-on-fire pain',
      assumptions: 'Mid-market deals have shorter sales cycles but unacceptable churn',
      expected: '3 paid pilots within 60 days',
      reviewDate: '',
      status: 'Active'
    }
  ]
};

let appState = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATE, ...parsed };
  } catch (e) {
    console.warn('Failed to load state from localStorage:', e);
    return { ...DEFAULT_STATE };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    updateGlobalProgress();
  } catch (e) {
    console.error('Failed to save state to localStorage:', e);
  }
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2400);
}

// ============================================================
// GLOBAL PROGRESS & THEME
// ============================================================

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  appState.theme = theme;
  saveState();

  const iconDark = document.getElementById('theme-icon-dark');
  const iconLight = document.getElementById('theme-icon-light');
  if (theme === 'light') {
    if (iconDark) iconDark.style.display = 'none';
    if (iconLight) iconLight.style.display = 'block';
  } else {
    if (iconDark) iconDark.style.display = 'block';
    if (iconLight) iconLight.style.display = 'none';
  }
}

function updateGlobalProgress() {
  const totalStages = STAGES_LIST.length;
  const completedCount = appState.completedStageIds.length;
  const pct = Math.round((completedCount / totalStages) * 100);

  const progressBar = document.getElementById('global-progress-bar');
  const progressText = document.getElementById('global-progress-text');
  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${completedCount}/${totalStages} (${pct}%)`;

  const trackerPct = document.getElementById('tracker-completion-pct');
  const trackerFill = document.getElementById('tracker-progress-fill');
  if (trackerPct) trackerPct.textContent = `${pct}%`;
  if (trackerFill) trackerFill.style.width = `${pct}%`;
}

// ============================================================
// TAB NAVIGATION
// ============================================================

function switchTab(tabId) {
  appState.activeTab = tabId;
  saveState();

  document.querySelectorAll('.tab-btn').forEach(btn => {
    const isTarget = btn.getAttribute('data-tab') === tabId;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `view-${tabId}`);
  });

  if (tabId === 'tree') {
    // If opening tree, trigger redraw and fit view if first time
    requestAnimationFrame(() => {
      renderCanvasEdges();
      updateMinimap();
    });
  }
}

// ============================================================
// VIEW 1: NEXT ACTION DIAGNOSTIC ENGINE (WHAT TO DO NOW?)
// ============================================================

const DIAGNOSTIC_TREE = {
  id: 'root',
  question: 'What is your current reality right now?',
  options: [
    {
      title: 'I have only an idea or hypothesis',
      desc: 'No code written, haven’t systematically interviewed target customers yet.',
      nextStep: 'q_problem_clarity'
    },
    {
      title: 'I have identified a problem, but no solution',
      desc: 'I know who experiences pain, but haven’t validated how they solve it.',
      nextStep: 'q_problem_importance'
    },
    {
      title: 'I built an MVP or prototype, but have no/few paying customers',
      desc: 'The product works, but getting active usage and sales is struggling.',
      nextStep: 'q_mvp_value'
    },
    {
      title: 'I have users, but nobody is willing to pay',
      desc: 'People praise the product or use free tier, but won’t convert to revenue.',
      nextStep: 'q_pricing_buyer'
    },
    {
      title: 'I have paying customers, but churn is high',
      desc: 'Users sign up or pay initially, but stop using it after a month or two.',
      nextStep: 'q_retention_reason'
    },
    {
      title: 'I have repeatable revenue, wondering about fundraising & scaling',
      desc: 'Unit economics look solid, considering bootstrapping vs angels vs VC.',
      nextStep: 'q_funding_need'
    },
    {
      title: 'I feel stuck, lost, or investors keep saying no',
      desc: 'Unsure which path to choose or why progress has plateaued.',
      nextStep: 'q_stuck_reason'
    }
  ]
};

const DIAGNOSTIC_SUB_STEPS = {
  q_problem_clarity: {
    question: 'Have you conducted at least 15 customer discovery interviews focusing strictly on past behavior?',
    options: [
      {
        title: 'No, I have not spoken directly to 15+ potential users',
        desc: 'I have been planning, building, or writing pitch decks.',
        result: {
          command: 'ITERATE',
          headline: 'Do Not Build Software — Start Customer Discovery',
          explanation: 'Building code or pitch decks before talking to users is the most common founder trap. You must understand how they solve the problem today and what that costs in time and money.',
          experiment: 'Schedule and conduct 15 Mom-Test style customer discovery interviews. Ask about past behavior: "Tell me about the last time this occurred."',
          stageId: 3,
          nodeId: 'n_cust_discovery'
        }
      },
      {
        title: 'Yes, I interviewed 15+ users and verified acute pain',
        desc: 'They currently spend time or budget on painful workarounds.',
        result: {
          command: 'PROCEED',
          headline: 'Formulate Value Proposition & Design Validation Test',
          explanation: 'You have genuine problem signal. Next, craft a quantifiable value proposition and test willingness to commit without building heavy software.',
          experiment: 'Create a 1-page landing page, interactive Figma mockup, or offer a manual concierge service to obtain 3 Letters of Intent (LOIs) or deposits.',
          stageId: 6,
          nodeId: 'n_solution_valprop'
        }
      }
    ]
  },
  q_problem_importance: {
    question: 'Do customers already spend money or significant manual hours trying to solve this?',
    options: [
      {
        title: 'No, they just tolerate it or don’t care enough to pay',
        desc: 'It is a minor inconvenience rather than an urgent bottleneck.',
        result: {
          command: 'PIVOT',
          headline: 'Pivot to an Urgent, High-Consequence Problem',
          explanation: 'If customers do not already spend time or money fixing this, you are building a "vitamin" rather than a "painkiller". Founders cannot convince people to care about trivial problems.',
          experiment: 'Revisit your customer discovery. Ask: "What is your #1 most expensive or stressful operational problem this quarter?"',
          stageId: 2,
          nodeId: 'n_stop_change_prob'
        }
      },
      {
        title: 'Yes, they spend substantial time, payroll, or software costs on it',
        desc: 'It is on the executive radar with assigned budget.',
        result: {
          command: 'PROCEED',
          headline: 'Define 10x Outcome & Map Competitors',
          explanation: 'The pain is economically meaningful. Map why existing alternatives fail and specify your measurable 10x differentiator.',
          experiment: 'Benchmark the top 3 alternatives. Formulate your value proposition: "For [customer], we help them [outcome] by [solution], unlike [alternative]."',
          stageId: 4,
          nodeId: 'n_market_comp'
        }
      }
    ]
  },
  q_mvp_value: {
    question: 'Are pilot users able to complete the single core workflow without you assisting?',
    options: [
      {
        title: 'No, onboarding is confusing or the core workflow breaks',
        desc: 'Users drop off during setup or cannot figure out the value.',
        result: {
          command: 'ITERATE',
          headline: 'Fix Core Workflow UX Before Adding Features',
          explanation: 'Never add new features to fix a product whose primary workflow fails. Strip down the product to one single task and make it effortless.',
          experiment: 'Conduct 5 live usability observation sessions over Zoom. Watch users navigate without offering any help; note every friction point.',
          stageId: 8,
          nodeId: 'n_iterate_mvp'
        }
      },
      {
        title: 'Yes, the workflow works and delivers the outcome',
        desc: 'Users complete it, but we need more pipeline to drive sales.',
        result: {
          command: 'PROCEED',
          headline: 'Launch Targeted Founder-Led Cold & Warm Outreach',
          explanation: 'Your MVP works. Now run a disciplined outbound campaign targeting 50-100 high-probability prospects to secure your first 5-10 paying customers.',
          experiment: 'Build a curated list of 50 verified ICP leads and launch a 4-touch personalized outreach sequence offering a 30-day pilot.',
          stageId: 9,
          nodeId: 'n_first_customers'
        }
      }
    ]
  },
  q_pricing_buyer: {
    question: 'Are you speaking to the user or the economic buyer with purchasing authority?',
    options: [
      {
        title: 'I have mostly been talking to end users who don’t hold budget',
        desc: 'Users love it, but they need executive approval to purchase.',
        result: {
          command: 'ITERATE',
          headline: 'Target the Economic Buyer & Quantify ROI',
          explanation: 'Users love free tools, but economic buyers pay for measurable ROI (cost reduction or revenue growth). Reframe your messaging around business metrics.',
          experiment: 'Ask your champion users: "Who holds the budget for this department, and how do they evaluate software purchases?" Request an intro to the buyer.',
          stageId: 10,
          nodeId: 'n_first_customers'
        }
      },
      {
        title: 'I speak to the buyer, but they claim the price is too high',
        desc: 'They hesitate on pricing or request free trials.',
        result: {
          command: 'ITERATE',
          headline: 'Do Not Lower Price — Re-examine Value & Risk',
          explanation: 'Price resistance is almost always a symptom of low perceived value, lack of trust, or high implementation risk. Lowering price seldom solves poor demand.',
          experiment: 'Offer a paid pilot with a 100% money-back guarantee tied to achieving a specific measurable outcome in 30 days.',
          stageId: 12,
          nodeId: 'n_economics_model'
        }
      }
    ]
  },
  q_retention_reason: {
    question: 'Why are customers leaving or not returning after day 30?',
    options: [
      {
        title: 'We haven’t systematically interviewed churned accounts to find out',
        desc: 'They just stop logging in or cancel silently.',
        result: {
          command: 'STOP',
          headline: 'Halt Marketing Immediately — Call Every Churned User',
          explanation: 'Acquiring more users while the product has leaky retention burns capital, reputation, and founder morale. Retention is the only true proof of product-market fit.',
          experiment: 'Call every churned user personally this week. Ask: "What were you hoping the product would do that it failed to deliver?"',
          stageId: 28,
          nodeId: 'n_fix_retention'
        }
      },
      {
        title: 'They lack a recurring trigger or ongoing workflow need',
        desc: 'The product solved a one-time issue, but has no weekly recurring necessity.',
        result: {
          command: 'PIVOT',
          headline: 'Pivot Business Model or Integrate into Daily Workflow',
          explanation: 'If the problem occurs only once, you cannot charge a recurring SaaS subscription unless you expand the workflow or switch to transaction pricing.',
          experiment: 'Evaluate usage-based or project-based pricing, or build an automated alert/integration that prompts weekly re-engagement.',
          stageId: 12,
          nodeId: 'n_economics_model'
        }
      }
    ]
  },

  q_funding_need: {
    question: 'Can your customer revenue organically fund your required growth rate?',
    options: [
      {
        title: 'Yes, our margins are healthy and revenue can fund hiring',
        desc: 'We do not have massive upfront capex or winner-take-all dynamics.',
        result: {
          command: 'PROCEED',
          headline: 'Bootstrap & Retain 100% Ownership & Control',
          explanation: 'External capital is not a badge of honor. If customer revenue can fund the business, bootstrapping grants complete strategic freedom and zero dilution.',
          experiment: 'Model cash flow breakeven milestones. Reinvest gross profit into your highest-performing acquisition channel.',
          stageId: 13,
          nodeId: 'n_capital_path'
        }
      },
      {
        title: 'No, we face rapid competition or massive market opportunity requiring capital',
        desc: 'Need $500k-$2M to hire engineering and scale sales rapidly.',
        result: {
          command: 'PROCEED',
          headline: 'Define the 18-Month Inflection Milestone for Seed/VC',
          explanation: 'Venture capital is rocket fuel. Anchor your pitch around the exact value inflection point this round unlocks (e.g. crossing $1M ARR with 90% retention).',
          experiment: 'Assemble your 20-slide deck, 20-folder data room, and build a targeted list of 60 aligned seed funds.',
          stageId: 15,
          nodeId: 'n_capital_path'
        }
      }
    ]
  },
  q_stuck_reason: {
    question: 'Where is the primary breakdown occurring?',
    options: [
      {
        title: 'Investors keep passing during pitches',
        desc: 'Lots of meetings, but getting "too early" or passes.',
        result: {
          command: 'ITERATE',
          headline: 'Stop Pitching — Ask the 14 Investor Questions',
          explanation: 'Investors pass when evidence of traction is weak, market size is vague, or founder conviction wavers. Rehearse the 10s -> 30s -> 2m elevator ladder.',
          experiment: 'Ask the last 3 rejecting investors: "What single metric or milestone would you need to see in 6 months to make this an obvious YES?"',
          stageId: 32,
          nodeId: 'n_capital_path'
        }
      },
      {
        title: 'Founders have conflicting visions or missing capabilities',
        desc: 'Disagreements on equity, commitment, or decision rights.',
        result: {
          command: 'STOP',
          headline: 'Formalize Founder Agreement or Part Ways Immediately',
          explanation: 'Founder conflict is the #2 cause of startup death. Co-founder equity and roles must be settled immediately with 4-year vesting and IP assignment.',
          experiment: 'Execute a formal Co-Founder Memorandum covering equity splits, 4-year vesting, 1-year cliff, and departure buyback terms.',
          stageId: 1,
          nodeId: 'n_founder_setup'
        }
      }
    ]
  }
};

let diagnosticState = {
  currentStep: 'root',
  history: [],
  currentResult: null
};

function initDiagnosticEngine() {
  const resetBtn = document.getElementById('btn-reset-diagnostic');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      diagnosticState = { currentStep: 'root', history: [], currentResult: null };
      renderDiagnosticStep();
    });
  }

  const setFocusBtn = document.getElementById('btn-set-as-focus');
  if (setFocusBtn) {
    setFocusBtn.addEventListener('click', () => {
      if (diagnosticState.currentResult && diagnosticState.currentResult.stageId !== undefined) {
        setFocusStage(diagnosticState.currentResult.stageId);
        showToast(`Focus set to Stage ${diagnosticState.currentResult.stageId}!`);
      }
    });
  }

  const addMilestoneBtn = document.getElementById('btn-add-as-milestone');
  if (addMilestoneBtn) {
    addMilestoneBtn.addEventListener('click', () => {
      if (diagnosticState.currentResult) {
        const title = diagnosticState.currentResult.experiment || diagnosticState.currentResult.headline;
        addMilestone(title, '', diagnosticState.currentResult.stageId || 0);
        showToast('Experiment added to your Milestones list!');
      }
    });
  }

  const jumpNodeBtn = document.getElementById('btn-jump-to-node');
  if (jumpNodeBtn) {
    jumpNodeBtn.addEventListener('click', () => {
      if (diagnosticState.currentResult && diagnosticState.currentResult.nodeId) {
        switchTab('tree');
        centerOnNode(diagnosticState.currentResult.nodeId);
        openNodeDrawer(diagnosticState.currentResult.nodeId);
      }
    });
  }

  renderDiagnosticStep();
}

function renderDiagnosticStep() {
  const questionContainer = document.getElementById('question-container');
  const resultCard = document.getElementById('result-card');
  const stepCounter = document.getElementById('step-counter-text');
  const questionText = document.getElementById('question-text');
  const optionsGrid = document.getElementById('options-container');

  if (diagnosticState.currentResult) {
    if (questionContainer) questionContainer.style.display = 'none';
    if (resultCard) resultCard.style.display = 'block';
    if (stepCounter) stepCounter.textContent = 'Diagnostic Complete';

    const res = diagnosticState.currentResult;
    const cmdBadge = document.getElementById('res-command');
    if (cmdBadge) {
      cmdBadge.textContent = res.command;
      if (res.command === 'STOP') {
        cmdBadge.style.background = '#ef4444';
        cmdBadge.style.color = '#ffffff';
      } else if (res.command === 'PIVOT') {
        cmdBadge.style.background = '#f59e0b';
        cmdBadge.style.color = '#000000';
      } else if (res.command === 'PROCEED') {
        cmdBadge.style.background = '#ffffff';
        cmdBadge.style.color = '#000000';
      } else {
        cmdBadge.style.background = '#71717a';
        cmdBadge.style.color = '#ffffff';
      }
    }

    const resHeadline = document.getElementById('res-headline');
    if (resHeadline) resHeadline.textContent = res.headline;

    const resExp = document.getElementById('res-explanation');
    if (resExp) resExp.textContent = res.explanation;

    const resExperiment = document.getElementById('res-experiment');
    if (resExperiment) resExperiment.textContent = res.experiment;

    return;
  }

  if (questionContainer) questionContainer.style.display = 'block';
  if (resultCard) resultCard.style.display = 'none';

  let stepData = diagnosticState.currentStep === 'root'
    ? DIAGNOSTIC_TREE
    : DIAGNOSTIC_SUB_STEPS[diagnosticState.currentStep];

  if (!stepData) {
    diagnosticState.currentStep = 'root';
    stepData = DIAGNOSTIC_TREE;
  }

  if (stepCounter) {
    stepCounter.textContent = diagnosticState.currentStep === 'root' ? 'Question 1 of 2' : 'Question 2 of 2';
  }

  if (questionText) questionText.textContent = stepData.question;
  if (!optionsGrid) return;
  optionsGrid.innerHTML = '';

  stepData.options.forEach(opt => {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.innerHTML = `
      <div class="option-content">
        <h4>${opt.title}</h4>
        <p>${opt.desc}</p>
      </div>
      <div class="option-arrow">&rarr;</div>
    `;
    card.addEventListener('click', () => {
      if (opt.result) {
        diagnosticState.currentResult = opt.result;
        renderDiagnosticStep();
      } else if (opt.nextStep) {
        diagnosticState.history.push(diagnosticState.currentStep);
        diagnosticState.currentStep = opt.nextStep;
        renderDiagnosticStep();
      }
    });
    optionsGrid.appendChild(card);
  });
}

// ============================================================
// VIEW 2: INFINITE DECISION CANVAS ENGINE
// ============================================================

let canvasState = {
  x: 0,
  y: 0,
  scale: 0.85,
  isPanning: false,
  startX: 0,
  startY: 0
};

function initDecisionCanvas() {
  const wrapper = document.getElementById('canvas-wrapper');
  const plane = document.getElementById('canvas-plane');
  if (!wrapper || !plane) return;

  // Render Nodes
  renderCanvasNodes();
  renderCanvasEdges();

  // Mouse drag pan
  wrapper.addEventListener('mousedown', (e) => {
    // If clicking on an input or node, don't pan plane
    if (e.target.closest('.tree-node') || e.target.closest('.canvas-toolbar') || e.target.closest('.canvas-minimap')) {
      return;
    }
    canvasState.isPanning = true;
    canvasState.startX = e.clientX - canvasState.x;
    canvasState.startY = e.clientY - canvasState.y;
    wrapper.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!canvasState.isPanning) return;
    canvasState.x = e.clientX - canvasState.startX;
    canvasState.y = e.clientY - canvasState.startY;
    applyCanvasTransform();
    updateMinimap();
  });

  window.addEventListener('mouseup', () => {
    if (canvasState.isPanning) {
      canvasState.isPanning = false;
      wrapper.style.cursor = 'default';
    }
  });

  // Wheel zoom
  wrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    const newScale = Math.min(Math.max(canvasState.scale * zoomFactor, 0.2), 2.0);

    const rect = wrapper.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Zoom centered on mouse
    canvasState.x = mouseX - (mouseX - canvasState.x) * (newScale / canvasState.scale);
    canvasState.y = mouseY - (mouseY - canvasState.y) * (newScale / canvasState.scale);
    canvasState.scale = newScale;

    applyCanvasTransform();
    updateMinimap();
  }, { passive: false });

  // Toolbar actions
  const zoomIn = document.getElementById('btn-zoom-in');
  if (zoomIn) zoomIn.addEventListener('click', () => changeZoom(1.15));

  const zoomOut = document.getElementById('btn-zoom-out');
  if (zoomOut) zoomOut.addEventListener('click', () => changeZoom(0.85));

  const zoomReset = document.getElementById('btn-zoom-reset');
  if (zoomReset) zoomReset.addEventListener('click', () => {
    canvasState.scale = 1.0;
    applyCanvasTransform();
    updateMinimap();
  });

  const fitView = document.getElementById('btn-fit-view');
  if (fitView) fitView.addEventListener('click', fitCanvasView);

  const centerFocus = document.getElementById('btn-center-focus');
  if (centerFocus) centerFocus.addEventListener('click', centerOnCurrentFocus);

  // Initial fit view
  setTimeout(fitCanvasView, 100);
}

function changeZoom(factor) {
  canvasState.scale = Math.min(Math.max(canvasState.scale * factor, 0.2), 2.0);
  applyCanvasTransform();
  updateMinimap();
}

function applyCanvasTransform() {
  const plane = document.getElementById('canvas-plane');
  const label = document.getElementById('zoom-level-text');
  if (plane) {
    plane.style.transform = `translate(${canvasState.x}px, ${canvasState.y}px) scale(${canvasState.scale})`;
  }
  if (label) {
    label.textContent = `${Math.round(canvasState.scale * 100)}%`;
  }
}

function fitCanvasView() {
  const wrapper = document.getElementById('canvas-wrapper');
  if (!wrapper) return;
  const width = wrapper.clientWidth;
  const height = wrapper.clientHeight;

  // Center horizontally around x: 500, y: 1500
  canvasState.scale = 0.65;
  canvasState.x = width / 2 - 580 * canvasState.scale;
  canvasState.y = 80;
  applyCanvasTransform();
  updateMinimap();
}

function centerOnCurrentFocus() {
  const targetNode = DECISION_TREE_NODES.find(n => n.stageId === appState.currentFocusStageId) || DECISION_TREE_NODES[0];
  centerOnNode(targetNode.id);
}

function centerOnNode(nodeId) {
  const node = DECISION_TREE_NODES.find(n => n.id === nodeId);
  const wrapper = document.getElementById('canvas-wrapper');
  if (!node || !wrapper) return;

  const wWidth = wrapper.clientWidth;
  const wHeight = wrapper.clientHeight;

  canvasState.scale = 0.95;
  canvasState.x = wWidth / 2 - (node.x + node.width / 2) * canvasState.scale;
  canvasState.y = wHeight / 2 - (node.y + 60) * canvasState.scale;

  applyCanvasTransform();
  updateMinimap();
}

function renderCanvasNodes() {
  const container = document.getElementById('canvas-nodes-container');
  if (!container) return;
  container.innerHTML = '';

  DECISION_TREE_NODES.forEach(node => {
    const isCompleted = appState.completedStageIds.includes(node.stageId);
    const isActiveFocus = appState.currentFocusStageId === node.stageId;

    const el = document.createElement('div');
    el.id = `node-${node.id}`;
    el.className = `tree-node type-${node.type} ${isCompleted ? 'is-completed' : ''} ${isActiveFocus ? 'is-active-focus' : ''}`;
    el.style.left = `${node.x}px`;
    el.style.top = `${node.y}px`;
    el.style.width = `${node.width}px`;

    let statusPill = '';
    if (isCompleted) {
      statusPill = `<span class="node-status-pill status-done">&#10003; DONE</span>`;
    } else if (isActiveFocus) {
      statusPill = `<span class="node-status-pill status-active">&bull; IN FOCUS</span>`;
    } else {
      statusPill = `<span class="node-status-pill">STAGE ${node.stageId}</span>`;
    }

    el.innerHTML = `
      <div class="node-header">
        <span class="node-subtitle">${node.subtitle || ''}</span>
        ${statusPill}
      </div>
      <div class="node-title">${node.title}</div>
      <div class="node-description">${node.description}</div>
    `;

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openNodeDrawer(node.id);
    });

    container.appendChild(el);
  });
}

function renderCanvasEdges() {
  const group = document.getElementById('svg-edges-group');
  if (!group) return;
  group.innerHTML = '';

  DECISION_TREE_EDGES.forEach(edge => {
    const fromNode = DECISION_TREE_NODES.find(n => n.id === edge.from);
    const toNode = DECISION_TREE_NODES.find(n => n.id === edge.to);
    if (!fromNode || !toNode) return;

    // Start point: bottom-center of fromNode (or right-center for branching)
    let startX = fromNode.x + fromNode.width / 2;
    let startY = fromNode.y + 90;

    let endX = toNode.x + toNode.width / 2;
    let endY = toNode.y;

    // If toNode is to the right
    if (toNode.x > fromNode.x + fromNode.width) {
      startX = fromNode.x + fromNode.width;
      startY = fromNode.y + 45;
      endX = toNode.x;
      endY = toNode.y + 45;
    } else if (toNode.x + toNode.width < fromNode.x) {
      // toNode is to the left
      startX = fromNode.x;
      startY = fromNode.y + 45;
      endX = toNode.x + toNode.width;
      endY = toNode.y + 45;
    }

    const midY = (startY + endY) / 2;
    const midX = (startX + endX) / 2;

    const pathData = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;

    const isFromDone = appState.completedStageIds.includes(fromNode.stageId);
    const isToActive = appState.currentFocusStageId === toNode.stageId;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('class', `tree-edge ${isFromDone && isToActive ? 'active' : ''}`);
    path.setAttribute('marker-end', isFromDone && isToActive ? 'url(#arrowhead-active)' : 'url(#arrowhead)');
    group.appendChild(path);

    if (edge.label) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', midX);
      text.setAttribute('y', midY - 6);
      text.setAttribute('class', 'edge-label');
      text.setAttribute('text-anchor', 'middle');
      text.textContent = edge.label;
      group.appendChild(text);
    }
  });
}

function updateMinimap() {
  const minimap = document.getElementById('canvas-minimap');
  const viewport = document.getElementById('minimap-viewport');
  const wrapper = document.getElementById('canvas-wrapper');
  if (!minimap || !viewport || !wrapper) return;

  const totalTreeWidth = 1400;
  const totalTreeHeight = 3500;
  const miniW = minimap.clientWidth;
  const miniH = minimap.clientHeight;

  const scaleX = miniW / totalTreeWidth;
  const scaleY = miniH / totalTreeHeight;

  const viewW = (wrapper.clientWidth / canvasState.scale) * scaleX;
  const viewH = (wrapper.clientHeight / canvasState.scale) * scaleY;
  const viewX = (-canvasState.x / canvasState.scale) * scaleX;
  const viewY = (-canvasState.y / canvasState.scale) * scaleY;

  viewport.style.width = `${Math.max(viewW, 16)}px`;
  viewport.style.height = `${Math.max(viewH, 12)}px`;
  viewport.style.left = `${Math.max(Math.min(viewX, miniW - 20), 0)}px`;
  viewport.style.top = `${Math.max(Math.min(viewY, miniH - 16), 0)}px`;
}

// ============================================================
// NODE DRAWER (SLIDE-OVER DETAILS)
// ============================================================

let activeDrawerNodeId = null;

function openNodeDrawer(nodeId) {
  const node = DECISION_TREE_NODES.find(n => n.id === nodeId);
  if (!node) return;
  activeDrawerNodeId = nodeId;

  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerPanel = document.getElementById('drawer-panel');
  if (!drawerBackdrop || !drawerPanel) return;

  const badge = document.getElementById('drawer-stage-badge');
  if (badge) badge.textContent = `Stage ${node.stageId}`;

  const title = document.getElementById('drawer-node-title');
  if (title) title.textContent = node.title;

  const subtitle = document.getElementById('drawer-node-subtitle');
  if (subtitle) subtitle.textContent = node.subtitle || '';

  const desc = document.getElementById('drawer-node-desc');
  if (desc) desc.textContent = node.description;

  const rule = document.getElementById('drawer-node-rule');
  if (rule) rule.textContent = node.rule || 'Do the next thing that removes the biggest uncertainty.';

  const action = document.getElementById('drawer-node-action');
  if (action) action.textContent = node.action || 'Execute the smallest useful experiment.';

  // Gate evaluation if decision
  const gateBox = document.getElementById('drawer-gate-container');
  const gateText = document.getElementById('drawer-gate-text');
  if (gateBox && gateText) {
    if (node.type === 'decision') {
      gateBox.style.display = 'block';
      gateText.textContent = `Gate Question: ${node.title} — ${node.description}`;
    } else {
      gateBox.style.display = 'none';
    }
  }

  // Completed toggle button state
  const isCompleted = appState.completedStageIds.includes(node.stageId);
  const completeBtn = document.getElementById('btn-drawer-toggle-complete');
  if (completeBtn) {
    completeBtn.textContent = isCompleted ? 'Mark Incomplete' : 'Mark Stage Completed';
  }

  // Current focus button state
  const isFocus = appState.currentFocusStageId === node.stageId;
  const focusBtn = document.getElementById('btn-drawer-set-focus');
  if (focusBtn) {
    focusBtn.textContent = isFocus ? 'Currently Active Focus' : 'Make Current Focus';
    focusBtn.disabled = isFocus;
  }

  drawerBackdrop.classList.add('open');
  drawerPanel.classList.add('open');
}

function closeNodeDrawer() {
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerPanel = document.getElementById('drawer-panel');
  if (drawerBackdrop) drawerBackdrop.classList.remove('open');
  if (drawerPanel) drawerPanel.classList.remove('open');
  activeDrawerNodeId = null;
}

function initNodeDrawer() {
  const closeBtn = document.getElementById('btn-close-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (closeBtn) closeBtn.addEventListener('click', closeNodeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeNodeDrawer);

  const toggleCompleteBtn = document.getElementById('btn-drawer-toggle-complete');
  if (toggleCompleteBtn) {
    toggleCompleteBtn.addEventListener('click', () => {
      if (!activeDrawerNodeId) return;
      const node = DECISION_TREE_NODES.find(n => n.id === activeDrawerNodeId);
      if (!node) return;

      const idx = appState.completedStageIds.indexOf(node.stageId);
      if (idx > -1) {
        appState.completedStageIds.splice(idx, 1);
        showToast(`Stage ${node.stageId} marked incomplete.`);
      } else {
        appState.completedStageIds.push(node.stageId);
        showToast(`Stage ${node.stageId} completed!`);
      }
      saveState();
      renderCanvasNodes();
      renderCanvasEdges();
      renderTracker();
      openNodeDrawer(node.id);
    });
  }

  const setFocusBtn = document.getElementById('btn-drawer-set-focus');
  if (setFocusBtn) {
    setFocusBtn.addEventListener('click', () => {
      if (!activeDrawerNodeId) return;
      const node = DECISION_TREE_NODES.find(n => n.id === activeDrawerNodeId);
      if (!node) return;

      setFocusStage(node.stageId);
      showToast(`Stage ${node.stageId} set as active focus.`);
      openNodeDrawer(node.id);
    });
  }

  const gatePassBtn = document.getElementById('btn-gate-pass');
  if (gatePassBtn) {
    gatePassBtn.addEventListener('click', () => {
      if (!activeDrawerNodeId) return;
      const node = DECISION_TREE_NODES.find(n => n.id === activeDrawerNodeId);
      if (node && node.yesTarget) {
        showToast('Decision Gate Passed: PROCEED');
        if (!appState.completedStageIds.includes(node.stageId)) {
          appState.completedStageIds.push(node.stageId);
          saveState();
        }
        centerOnNode(node.yesTarget);
        openNodeDrawer(node.yesTarget);
      }
    });
  }

  const gateFailBtn = document.getElementById('btn-gate-fail');
  if (gateFailBtn) {
    gateFailBtn.addEventListener('click', () => {
      if (!activeDrawerNodeId) return;
      const node = DECISION_TREE_NODES.find(n => n.id === activeDrawerNodeId);
      if (node && node.noTarget) {
        showToast('Assumption Failed: PIVOT / STOP');
        centerOnNode(node.noTarget);
        openNodeDrawer(node.noTarget);
      }
    });
  }

  const readGuideBtn = document.getElementById('btn-drawer-read-guide');
  if (readGuideBtn) {
    readGuideBtn.addEventListener('click', () => {
      if (!activeDrawerNodeId) return;
      const node = DECISION_TREE_NODES.find(n => n.id === activeDrawerNodeId);
      if (node) {
        closeNodeDrawer();
        switchTab('guide');
        openGuideStage(node.stageId);
      }
    });
  }
}

// ============================================================
// VIEW 3: FOUNDER TRACKER & MILESTONES
// ============================================================

function setFocusStage(stageId) {
  appState.currentFocusStageId = stageId;
  saveState();
  renderTracker();
  renderCanvasNodes();
  renderCanvasEdges();
}

function initTrackerView() {
  renderTracker();

  const toggleFormBtn = document.getElementById('btn-toggle-milestone-form');
  const form = document.getElementById('milestone-form');
  if (toggleFormBtn && form) {
    toggleFormBtn.addEventListener('click', () => {
      const isHidden = form.style.display === 'none';
      form.style.display = isHidden ? 'flex' : 'none';
      toggleFormBtn.textContent = isHidden ? 'Cancel' : '+ New Milestone';
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.getElementById('ms-title-input');
      const dateInput = document.getElementById('ms-date-input');
      const stageSelect = document.getElementById('ms-stage-select');

      const title = titleInput ? titleInput.value.trim() : '';
      const date = dateInput ? dateInput.value : '';
      const stageId = stageSelect ? parseInt(stageSelect.value) : 0;

      if (!title) return;
      addMilestone(title, date, stageId);

      titleInput.value = '';
      dateInput.value = '';
      form.style.display = 'none';
      if (toggleFormBtn) toggleFormBtn.textContent = '+ New Milestone';
      showToast('New milestone created!');
    });
  }

  const markFocusDoneBtn = document.getElementById('btn-tracker-mark-done');
  if (markFocusDoneBtn) {
    markFocusDoneBtn.addEventListener('click', () => {
      const cur = appState.currentFocusStageId;
      if (!appState.completedStageIds.includes(cur)) {
        appState.completedStageIds.push(cur);
      }
      // Advance to next stage if available
      const nextStage = STAGES_LIST.find(s => s.id === cur + 1);
      if (nextStage) {
        appState.currentFocusStageId = nextStage.id;
        showToast(`Stage ${cur} completed! Moved to Stage ${nextStage.id}.`);
      } else {
        showToast(`Stage ${cur} marked completed!`);
      }
      saveState();
      renderTracker();
      renderCanvasNodes();
      renderCanvasEdges();
    });
  }

  // Populate stage select dropdown in milestone form
  const stageSelect = document.getElementById('ms-stage-select');
  if (stageSelect) {
    stageSelect.innerHTML = STAGES_LIST.map(s => `
      <option value="${s.id}">Stage ${s.code}: ${s.title}</option>
    `).join('');
  }
}

function addMilestone(title, targetDate, stageId) {
  const newMs = {
    id: 'ms_' + Date.now(),
    title,
    targetDate: targetDate || '',
    stageId: stageId || 0,
    completed: false
  };
  appState.milestones.unshift(newMs);
  saveState();
  renderMilestonesList();
}

function renderTracker() {
  const currentStage = STAGES_LIST.find(s => s.id === appState.currentFocusStageId) || STAGES_LIST[0];

  const focusBadge = document.getElementById('tracker-focus-badge');
  const focusTitle = document.getElementById('tracker-focus-title');
  const focusQuestion = document.getElementById('tracker-focus-question');
  const focusAction = document.getElementById('tracker-focus-action');

  if (focusBadge) focusBadge.textContent = `Stage ${currentStage.code}`;
  if (focusTitle) focusTitle.textContent = currentStage.title;
  if (focusQuestion) focusQuestion.textContent = `"${currentStage.question}"`;
  if (focusAction) focusAction.innerHTML = `<strong>Next Action:</strong> ${currentStage.nextAction}`;

  renderStagesQuickList();
  renderMilestonesList();
  renderChecklists();
  renderFinalChecklist();
  updateGlobalProgress();
}

function renderStagesQuickList() {
  const container = document.getElementById('stages-quick-list');
  if (!container) return;
  container.innerHTML = '';

  STAGES_LIST.forEach(stage => {
    const isDone = appState.completedStageIds.includes(stage.id);
    const isFocus = appState.currentFocusStageId === stage.id;

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.justifyContent = 'space-between';
    row.style.padding = '6px 10px';
    row.style.borderRadius = 'var(--radius-sm)';
    row.style.cursor = 'pointer';
    row.style.background = isFocus ? 'var(--bg-subtle)' : 'transparent';
    row.style.border = isFocus ? '1px solid var(--text-primary)' : '1px solid transparent';
    row.style.fontSize = '0.82rem';

    row.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-family:var(--font-mono); color:${isDone ? 'var(--text-muted)' : 'var(--text-primary)'}; width:20px;">
          ${isDone ? '&#10003;' : stage.code}
        </span>
        <span style="${isDone ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${stage.title}</span>
      </div>
      ${isFocus ? '<span style="font-size:0.65rem; font-family:var(--font-mono); font-weight:700;">FOCUS</span>' : ''}
    `;

    row.addEventListener('click', () => {
      setFocusStage(stage.id);
      showToast(`Switched active focus to Stage ${stage.code}`);
    });

    container.appendChild(row);
  });
}

function renderMilestonesList() {
  const container = document.getElementById('milestones-container');
  if (!container) return;
  container.innerHTML = '';

  if (appState.milestones.length === 0) {
    container.innerHTML = `<p class="text-muted" style="font-size:0.85rem; padding:1rem 0;">No milestones yet. Create one above to anchor your immediate sprint.</p>`;
    return;
  }

  appState.milestones.forEach(ms => {
    const item = document.createElement('div');
    item.className = `milestone-item ${ms.completed ? 'done' : ''}`;

    const stageObj = STAGES_LIST.find(s => s.id === ms.stageId);
    const stageLabel = stageObj ? `Stage ${stageObj.code}` : '';

    item.innerHTML = `
      <div class="milestone-left">
        <div class="checkbox-custom ${ms.completed ? 'checked' : ''}" id="chk-${ms.id}">
          ${ms.completed ? '&#10003;' : ''}
        </div>
        <div>
          <div class="milestone-text" style="font-weight:600; font-size:0.92rem;">${ms.title}</div>
          <div class="milestone-meta">
            ${stageLabel ? `<span>${stageLabel}</span> &bull;` : ''}
            <span>${ms.targetDate ? `Due ${ms.targetDate}` : 'No deadline'}</span>
          </div>
        </div>
      </div>
      <button class="btn-ghost" style="padding:4px 8px; font-size:0.8rem; color:var(--text-muted);" title="Delete Milestone">&times;</button>
    `;

    const chk = item.querySelector(`#chk-${ms.id}`);
    if (chk) {
      chk.addEventListener('click', () => {
        ms.completed = !ms.completed;
        saveState();
        renderMilestonesList();
      });
    }

    const delBtn = item.querySelector('button');
    if (delBtn) {
      delBtn.addEventListener('click', () => {
        appState.milestones = appState.milestones.filter(m => m.id !== ms.id);
        saveState();
        renderMilestonesList();
        showToast('Milestone deleted.');
      });
    }

    container.appendChild(item);
  });
}

function renderChecklists() {
  const container = document.getElementById('checklists-accordions-container');
  const progressText = document.getElementById('checklist-progress-text');
  if (!container) return;
  container.innerHTML = '';

  let totalItems = 0;
  let checkedItems = 0;

  MASTER_CHECKLIST.forEach((cat, idx) => {
    const catCard = document.createElement('div');
    catCard.className = 'checklist-category-card';

    let catChecked = 0;
    cat.items.forEach(item => {
      totalItems++;
      if (appState.checklistState[item.id]) {
        checkedItems++;
        catChecked++;
      }
    });

    const isExpanded = idx === 0;

    catCard.innerHTML = `
      <div class="checklist-cat-header">
        <span class="checklist-cat-title">${cat.category}</span>
        <span class="text-mono text-muted" style="font-size:0.75rem;">${catChecked}/${cat.items.length}</span>
      </div>
      <div class="checklist-items-container" style="${isExpanded ? 'display:flex;' : 'display:none;'}">
        ${cat.items.map(item => `
          <div class="check-item-row ${appState.checklistState[item.id] ? 'checked' : ''}" data-item-id="${item.id}">
            <div class="checkbox-custom ${appState.checklistState[item.id] ? 'checked' : ''}">
              ${appState.checklistState[item.id] ? '&#10003;' : ''}
            </div>
            <span>${item.text}</span>
          </div>
        `).join('')}
      </div>
    `;

    const header = catCard.querySelector('.checklist-cat-header');
    const itemsContainer = catCard.querySelector('.checklist-items-container');
    if (header && itemsContainer) {
      header.addEventListener('click', () => {
        const isHidden = itemsContainer.style.display === 'none';
        itemsContainer.style.display = isHidden ? 'flex' : 'none';
      });
    }

    catCard.querySelectorAll('.check-item-row').forEach(row => {
      row.addEventListener('click', () => {
        const itemId = row.getAttribute('data-item-id');
        appState.checklistState[itemId] = !appState.checklistState[itemId];
        saveState();
        renderChecklists();
      });
    });

    container.appendChild(catCard);
  });

  if (progressText) {
    progressText.textContent = `${checkedItems} / ${totalItems} (${Math.round((checkedItems / (totalItems || 1)) * 100)}%)`;
  }
}

function renderFinalChecklist() {
  const container = document.getElementById('final-checklist-container');
  const countText = document.getElementById('final-checklist-progress');
  if (!container) return;
  container.innerHTML = '';

  let checkedCount = 0;
  FINAL_COMPANY_CHECKLIST.forEach((text, i) => {
    const isChecked = !!appState.finalChecklistState[i];
    if (isChecked) checkedCount++;

    const row = document.createElement('div');
    row.className = `check-item-row ${isChecked ? 'checked' : ''}`;
    row.style.background = 'var(--bg-subtle)';
    row.style.padding = '8px 12px';
    row.style.borderRadius = 'var(--radius-sm)';

    row.innerHTML = `
      <div class="checkbox-custom ${isChecked ? 'checked' : ''}">
        ${isChecked ? '&#10003;' : ''}
      </div>
      <span>${text}</span>
    `;

    row.addEventListener('click', () => {
      appState.finalChecklistState[i] = !appState.finalChecklistState[i];
      saveState();
      renderFinalChecklist();
    });

    container.appendChild(row);
  });

  if (countText) {
    countText.textContent = `${checkedCount} / ${FINAL_COMPANY_CHECKLIST.length}`;
  }
}

// ============================================================
// VIEW 4: GUIDE & ALGORITHM EXPLORER
// ============================================================

let currentGuideSectionId = 'intro';

function initGuideView() {
  renderGuideTOC();
  renderGuideArticle(currentGuideSectionId);

  const searchInput = document.getElementById('guide-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      renderGuideTOC(q);
    });
  }
}

function renderGuideTOC(filterQuery = '') {
  const tocList = document.getElementById('guide-toc-list');
  if (!tocList) return;
  tocList.innerHTML = '';

  const filtered = GUIDE_SECTIONS.filter(sec => {
    if (!filterQuery) return true;
    return sec.title.toLowerCase().includes(filterQuery) ||
           sec.summary.toLowerCase().includes(filterQuery) ||
           sec.category.toLowerCase().includes(filterQuery) ||
           sec.content.toLowerCase().includes(filterQuery);
  });

  if (filtered.length === 0) {
    tocList.innerHTML = `<li class="text-muted" style="font-size:0.8rem; padding:8px;">No sections found.</li>`;
    return;
  }

  filtered.forEach(sec => {
    const li = document.createElement('li');
    li.className = `toc-item ${sec.id === currentGuideSectionId ? 'active' : ''}`;
    li.textContent = `${sec.number}. ${sec.title.replace(/^Stage \d+ — /, '')}`;
    li.title = sec.title;

    li.addEventListener('click', () => {
      currentGuideSectionId = sec.id;
      renderGuideTOC(filterQuery);
      renderGuideArticle(sec.id);
    });

    tocList.appendChild(li);
  });
}

function openGuideStage(stageId) {
  const sec = GUIDE_SECTIONS.find(s => s.stageNumber === stageId);
  if (sec) {
    currentGuideSectionId = sec.id;
    renderGuideTOC();
    renderGuideArticle(sec.id);
  }
}

function renderGuideArticle(sectionId) {
  const sec = GUIDE_SECTIONS.find(s => s.id === sectionId) || GUIDE_SECTIONS[0];
  if (!sec) return;

  const categoryTag = document.getElementById('article-category');
  const titleEl = document.getElementById('article-title');
  const bodyEl = document.getElementById('article-body');

  if (categoryTag) categoryTag.textContent = sec.category;
  if (titleEl) titleEl.textContent = sec.title;
  if (bodyEl) {
    bodyEl.innerHTML = parseMarkdownSimple(sec.content);
  }
}

function parseMarkdownSimple(md) {
  // Simple clean parser for headings, code blocks, lists, bold, blockquotes, tables
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
    .replace(/`([^`]+)`/gim, '<code style="font-family:var(--font-mono); background:var(--bg-subtle); padding:2px 5px; border-radius:3px;">$1</code>');

  // Handle tables
  if (html.includes('|')) {
    const lines = html.split('\n');
    let inTable = false;
    let tableHtml = '';
    const newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableHtml = '<table>';
        }
        if (line.includes('---')) {
          continue; // separator
        }
        const cols = line.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
        const tag = tableHtml.includes('<tbody>') ? 'td' : 'th';
        const rowContent = cols.map(c => `<${tag}>${c.trim()}</${tag}>`).join('');

        if (tag === 'th') {
          tableHtml += `<thead><tr>${rowContent}</tr></thead><tbody>`;
        } else {
          tableHtml += `<tr>${rowContent}</tr>`;
        }
      } else {
        if (inTable) {
          inTable = false;
          tableHtml += '</tbody></table>';
          newLines.push(tableHtml);
          tableHtml = '';
        }
        newLines.push(line);
      }
    }
    if (inTable) {
      tableHtml += '</tbody></table>';
      newLines.push(tableHtml);
    }
    html = newLines.join('\n');
  }

  // Handle lists and paragraphs
  const paragraphs = html.split('\n\n');
  return paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h1>') || p.startsWith('<h2>') || p.startsWith('<h3>') ||
        p.startsWith('<pre>') || p.startsWith('<blockquote>') || p.startsWith('<table>')) {
      return p;
    }
    if (p.startsWith('- ') || p.startsWith('1. ')) {
      const items = p.split('\n');
      const listTag = p.startsWith('1. ') ? 'ol' : 'ul';
      const liHtml = items.map(li => `<li>${li.replace(/^[-*] |\d+\. /, '')}</li>`).join('');
      return `<${listTag}>${liHtml}</${listTag}>`;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('');
}

// ============================================================
// VIEW 5: OPERATING TOOLS (DECISION LOG & WEEKLY ROUTINES)
// ============================================================

function initToolsView() {
  renderDecisionLogs();
  renderWeeklyReviews();

  const decisionForm = document.getElementById('decision-log-form');
  if (decisionForm) {
    decisionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const decInput = document.getElementById('d-decision');
      const ownerInput = document.getElementById('d-owner');
      const dateInput = document.getElementById('d-review-date');
      const evInput = document.getElementById('d-evidence');
      const assInput = document.getElementById('d-assumptions');
      const expInput = document.getElementById('d-expected');

      const entry = {
        id: 'd_' + Date.now(),
        date: new Date().toISOString().split('T')[0],
        decision: decInput.value.trim(),
        owner: ownerInput.value.trim() || 'Founder',
        evidence: evInput.value.trim() || 'Discovery signals',
        assumptions: assInput.value.trim() || '',
        expected: expInput.value.trim() || '',
        reviewDate: dateInput.value || '',
        status: 'Active'
      };

      appState.decisionLogs.unshift(entry);
      saveState();
      renderDecisionLogs();

      decisionForm.reset();
      showToast('Decision successfully logged into institutional memory.');
    });
  }

  const weeklyForm = document.getElementById('weekly-review-form');
  if (weeklyForm) {
    weeklyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const custInput = document.getElementById('w-customers');
      const prodInput = document.getElementById('w-product');
      const finInput = document.getElementById('w-finance');
      const teamInput = document.getElementById('w-team');
      const uncInput = document.getElementById('w-uncertainty');
      const expInput = document.getElementById('w-experiment');

      const review = {
        id: 'w_' + Date.now(),
        date: new Date().toISOString().split('T')[0],
        customers: custInput.value.trim(),
        product: prodInput.value.trim(),
        finance: finInput.value.trim(),
        team: teamInput.value.trim(),
        uncertainty: uncInput.value.trim(),
        experiment: expInput.value.trim()
      };

      appState.weeklyReviews.unshift(review);
      saveState();
      renderWeeklyReviews();

      weeklyForm.reset();
      showToast('Weekly review logged! Top uncertainty prioritized.');
    });
  }
}

function renderDecisionLogs() {
  const tbody = document.getElementById('decision-log-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (appState.decisionLogs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-muted" style="text-align:center; padding:1.5rem;">No decisions logged yet.</td></tr>`;
    return;
  }

  appState.decisionLogs.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="text-mono" style="white-space:nowrap;">${entry.date}</td>
      <td style="font-weight:600;">${entry.decision}</td>
      <td>${entry.owner}</td>
      <td style="color:var(--text-secondary); max-width:280px;">${entry.evidence}</td>
      <td style="color:var(--text-secondary);">${entry.expected || '&mdash;'}</td>
      <td class="text-mono">${entry.reviewDate || '&mdash;'}</td>
      <td>
        <span class="node-status-pill ${entry.status === 'Active' ? 'status-active' : 'status-done'}">
          ${entry.status}
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function renderWeeklyReviews() {
  const container = document.getElementById('weekly-reviews-history');
  if (!container) return;
  container.innerHTML = '';

  if (appState.weeklyReviews.length === 0) {
    container.innerHTML = `<p class="text-muted" style="font-size:0.85rem;">No past weekly reviews yet. Complete your first review above.</p>`;
    return;
  }

  container.innerHTML = `<h4 style="font-size:0.95rem; margin-bottom:0.75rem;">Past Weekly Reviews (${appState.weeklyReviews.length})</h4>`;

  appState.weeklyReviews.slice(0, 5).forEach(rev => {
    const card = document.createElement('div');
    card.style.background = 'var(--bg-subtle)';
    card.style.padding = '1rem 1.25rem';
    card.style.borderRadius = 'var(--radius-md)';
    card.style.marginBottom = '0.75rem';
    card.style.border = '1px solid var(--border-light)';

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <span class="text-mono text-muted" style="font-size:0.75rem;">WEEK OF ${rev.date}</span>
      </div>
      <div style="font-size:0.92rem; font-weight:700; margin-bottom:0.35rem;">
        Top Uncertainty: "${rev.uncertainty}"
      </div>
      <div style="font-size:0.85rem; color:var(--text-secondary);">
        <strong>Cheapest Experiment:</strong> ${rev.experiment}
      </div>
    `;

    container.appendChild(card);
  });
}

// ============================================================
// DATA PORTABILITY (EXPORT & IMPORT JSON)
// ============================================================

function initDataPortability() {
  const openModalBtn = document.getElementById('btn-export-import');
  const closeModalBtn = document.getElementById('btn-close-backup');
  const backdrop = document.getElementById('backup-modal-backdrop');
  const panel = document.getElementById('backup-modal-panel');

  function openModal() {
    if (backdrop && panel) {
      backdrop.classList.add('open');
      panel.style.opacity = '1';
      panel.style.pointerEvents = 'auto';
      panel.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }

  function closeModal() {
    if (backdrop && panel) {
      backdrop.classList.remove('open');
      panel.style.opacity = '0';
      panel.style.pointerEvents = 'none';
      panel.style.transform = 'translate(-50%, -50%) scale(0.95)';
    }
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Download JSON
  const downloadBtn = document.getElementById('btn-download-json');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appState, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `startup-guide-backup-${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Backup JSON downloaded!');
    });
  }

  // Import JSON
  const fileInput = document.getElementById('file-import-json');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported && typeof imported === 'object') {
            appState = { ...DEFAULT_STATE, ...imported };
            saveState();
            closeModal();
            location.reload();
          } else {
            alert('Invalid backup JSON format.');
          }
        } catch (err) {
          alert('Failed to parse backup JSON file.');
        }
      };
      reader.readAsText(file);
    });
  }

  // Reset Everything
  const resetBtn = document.getElementById('btn-reset-all-data');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all startup progress, milestones, and logs? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
      }
    });
  }
}

// ============================================================
// APP INITIALIZATION
// ============================================================

window.addEventListener('DOMContentLoaded', () => {
  // Theme setup
  applyTheme(appState.theme || 'dark');
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = appState.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Brand home click
  const brandBtn = document.getElementById('brand-home-btn');
  if (brandBtn) {
    brandBtn.addEventListener('click', () => switchTab('navigator'));
  }

  // Navigation tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Init Modules
  initDiagnosticEngine();
  initDecisionCanvas();
  initNodeDrawer();
  initTrackerView();
  initGuideView();
  initToolsView();
  initDataPortability();

  // Set initial active tab
  switchTab(appState.activeTab || 'navigator');
  updateGlobalProgress();
});
