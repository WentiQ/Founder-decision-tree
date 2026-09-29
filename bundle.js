/**
 * guide-data.js
 * Comprehensive structured knowledge base derived from:
 * "STARTUP FROM ZERO -> SUCCESSFUL COMPANY: THE COMPLETE FOUNDER DECISION TREE"
 */

const GUIDE_SECTIONS = [
  {
    id: 'intro',
    number: '01',
    title: 'How to Use This Guide',
    category: 'Foundations',
    summary: 'The startup operating loop and the four commands.',
    content: `A startup does not progress as a simple linear sequence (1 -> 2 -> 3 -> 4) and never revisited.
A startup behaves as an empirical scientific loop:

**Hypothesis -> Experiment -> Evidence -> Decision -> Action -> New Evidence**

The founder repeatedly asks:
1. What do we believe?
2. Why do we believe it?
3. What is uncertain?
4. What is the most dangerous assumption?
5. What is the cheapest useful test?
6. What result means "continue"?
7. What result means "change"?
8. What result means "stop"?

### The Four Commands
Every stage of testing and discovery must produce one of four definitive commands:

- **PROCEED**: Evidence is sufficient to move to the next stage.
- **ITERATE**: Evidence is incomplete; improve the hypothesis/test and run again.
- **PIVOT**: A meaningful assumption failed; change the model, customer, or value proposition.
- **STOP**: Evidence does not justify further investment of time or capital.`
  },
  {
    id: 'stage-0',
    number: '02',
    stageNumber: 0,
    title: 'Stage 0 — Identify What You Actually Have',
    category: 'Foundations',
    summary: 'Diagnose your current starting state before pursuing accelerators, VC, or code.',
    content: `Before choosing an accelerator, VC, incubator, or writing lines of code, accurately identify your startup's present reality:

1. **If you have only an idea** -> Start with problem discovery.
2. **If you have an idea and strong domain knowledge** -> Still validate the customer problem.
3. **If you have identified a problem but no solution** -> Conduct discovery before building.
4. **If you have a prototype** -> Test the prototype with target users.
5. **If you have an MVP** -> Measure activation and usage.
6. **If you have users but no revenue** -> Investigate willingness to pay and business model.
7. **If you have paying customers** -> Measure retention and unit economics.
8. **If you have repeatable revenue** -> Investigate scalable acquisition and operations.
9. **If you have repeatable growth** -> Evaluate scaling and financing.`,
    checklist: [
      'Current stage honestly classified without wishful thinking',
      'Primary bottleneck identified',
      'No premature acceleration or scaling started'
    ]
  },
  {
    id: 'stage-1',
    number: '03',
    stageNumber: 1,
    title: 'Stage 1 — Founder and Co-Founder Setup',
    category: 'Foundations',
    summary: 'Roles, equity, vesting, IP assignment, and capability gap analysis.',
    content: `### Founder Decision Tree
1. **If you are building alone** -> Identify which capabilities are missing: technical, sales, domain, operations, finance, regulatory.
2. **If the missing capability is temporary** -> Consider advisors, contractors, specialists, or service providers.
3. **If the missing capability is central and permanent** -> Evaluate whether a co-founder is actually needed.
4. **If considering a co-founder** -> Test the working relationship before making irreversible equity commitments.
5. **If co-founders agree to work together** -> Document:
   - Roles and responsibilities
   - Time commitment expectations
   - Ownership expectations and cap table
   - 4-year vesting with 1-year cliff
   - Decision rights and tie-breaking
   - Intellectual Property assignment to company
   - Founder departure and buyback terms
   - Conflict resolution mechanisms
6. **If expectations cannot be reconciled** -> Do not force a co-founder relationship.

> **CORE PRINCIPLE**: Do not give away substantial ownership merely because somebody has a useful skill that could be obtained another way. At the same time, do not avoid a genuinely necessary co-founder relationship merely because equity feels uncomfortable. Evaluate the actual long-term contribution and risk.`,
    checklist: [
      'Founder roles and commitments clearly outlined',
      'Capability gaps identified (temporary vs permanent)',
      'Working relationship trial completed before equity lock',
      '4-year vesting schedule with 1-year cliff agreed',
      'IP assignment agreements drafted',
      'Departure and conflict resolution terms documented'
    ]
  },
  {
    id: 'stage-2',
    number: '04',
    stageNumber: 2,
    title: 'Stage 2 — Problem Discovery',
    category: 'Discovery',
    summary: 'Define customer, situation, problem, and measurable consequence.',
    content: `Write the core problem statement formula:

\`\`\`
Customer + Situation + Problem + Consequence
\`\`\`

**Template:**
*"For [specific customer], when [situation occurs], [problem] causes [consequence]."*

### Problem Decision Tree
1. **If customer is vague** -> Narrow the customer down to a specific persona/role.
2. **If problem is vague** -> Interview users directly about actual past workflows.
3. **If problem occurs rarely** -> Investigate whether it is economically meaningful or merely an annoyance.
4. **If customers already spend money/time solving it** -> Study the existing alternative in depth.
5. **If customers do not care enough to change behavior** -> Change segment or problem.
6. **If the problem is urgent, costly, frequent, risky, or strategically important** -> Proceed to customer discovery.`,
    checklist: [
      'Problem formulated using the 4-part formula',
      'Target customer narrowed to a specific ICP',
      'Verified that the problem occurs frequently or causes severe pain',
      'Identified existing budget or manual time currently spent on it'
    ]
  },
  {
    id: 'stage-3',
    number: '05',
    stageNumber: 3,
    title: 'Stage 3 — Customer Discovery',
    category: 'Discovery',
    summary: 'The Mom Test interview principles and the Customer Evidence Ladder.',
    content: `Interview people before assuming you understand them. Ask about actual past behavior, never future hypothetical opinions.

### Interview Questions to Ask:
- "Tell me about the last time this happened."
- "How did you solve it?"
- "What did that cost in time, stress, or money?"
- "How often does it happen?"
- "Who else is involved in the process?"
- "What happens if nothing changes?"
- "What alternatives have you tried?"
- "Why did you stop using them?"
- "Who pays for the current solution?"
- "Who decides whether to buy?"

### Questions to Avoid:
Avoid: *"Would you use my product?"* or *"Would you pay $50 for this?"*
Prefer: *"What did you do the last time you encountered this problem?"*

### Customer Evidence Ladder
Distinguish the weight of customer signal:

\`\`\`
Opinion < Interest < Conversation < Trial < Commitment < Payment < Repeat Purchase < Retention
\`\`\`
Opinions and compliments are worthless. Commitment of time, data, reputation, or money is valid signal.`,
    checklist: [
      'Conducted at least 15-20 customer discovery interviews',
      'Focused strictly on past behavior rather than speculative opinions',
      'Understood who experiences the pain vs who controls the budget',
      'Ranked customer responses along the Customer Evidence Ladder'
    ]
  },
  {
    id: 'stage-4',
    number: '06',
    stageNumber: 4,
    title: 'Stage 4 — Market and Competition',
    category: 'Discovery',
    summary: 'Mapping alternatives, switching barriers, and realistic TAM/SAM/SOM.',
    content: `Map all alternatives:
- Direct competitors
- Indirect competitors
- Substitutes
- Internal / manual processes (Excel, paper, email)
- The "Do Nothing" option (your most common competitor)

For every meaningful alternative, record:
- Customer segment targeted
- Price and pricing structure
- Distribution channels
- Strengths and weaknesses
- Positioning and reviews
- Customer complaints
- Switching barriers and switching costs

### Market Sizing Formulas
- **TAM (Total Addressable Market)**: Total potential market if you had 100% share.
- **SAM (Serviceable Available Market)**: The segment of TAM targeted by your product within your geographic/reach boundaries.
- **SOM (Serviceable Obtainable Market)**: The realistic share of SAM you can capture in the next 1-3 years.

> **RULE**: Do not treat a huge TAM slide as evidence that customers want the product. SOM and unit economics matter far more.`,
    checklist: [
      'Mapped direct, indirect, manual, and "do nothing" alternatives',
      'Analyzed customer reviews and complaints of existing tools',
      'Evaluated switching barriers and costs for buyers',
      'Calculated bottom-up TAM, SAM, and realistic SOM'
    ]
  },
  {
    id: 'stage-5',
    number: '07',
    stageNumber: 5,
    title: 'Stage 5 — Support Programs Decision',
    category: 'Support & Funding',
    summary: 'Pre-incubators, incubators, accelerators, grants, and university cells.',
    content: `You do **not** automatically need an incubator or accelerator. Choose support strictly according to your current bottleneck.

### Support Decision Tree
1. **If you do not understand the problem/customer** -> Prioritize customer discovery rather than applying to every accelerator.
2. **If you need structured mentoring, workspace, domain expertise, university resources, or labs** -> Investigate **pre-incubation or incubation**.
3. **If you are a student/researcher** -> Investigate university entrepreneurship programs, technology transfer offices, startup cells, and research grants.
4. **If you have a validated problem but need help developing the business/product** -> Investigate incubators and structured programs.
5. **If you already have an MVP, early customers, or traction and need rapid growth/fundraising** -> Investigate **accelerators**.
6. **If you need laboratory equipment, regulated guidance, or research infrastructure** -> Investigate domain-specific incubators and grants.
7. **If the program requires significant equity or restrictive terms** -> Understand those terms fully before accepting.
8. **If a program provides mostly prestige but does not solve your bottleneck** -> Do not join. Participation does not create traction.`,
    checklist: [
      'Current bottleneck explicitly defined',
      'Evaluated pre-incubation vs incubator vs accelerator fit',
      'Calculated dilution and terms for any equity-taking program',
      'Ensured program does not distract from core customer discovery'
    ]
  },
  {
    id: 'stage-6',
    number: '08',
    stageNumber: 6,
    title: 'Stage 6 — Solution and Value Proposition',
    category: 'Validation & Product',
    summary: 'The positioning formula and defining measurable customer outcomes.',
    content: `Define your core positioning formula:

\`\`\`
For [customer], we help them [outcome]
by [solution], unlike [alternative],
because [meaningful differentiation].
\`\`\`

### Define the Core Measurable Outcome:
- Revenue increase
- Cost reduction
- Time saved
- Risk reduced
- Convenience / speed
- Performance / reliability
- Access / compliance
- New capability previously impossible

Ensure the outcome is quantifiable (e.g., "reduces billing cycle from 14 days to 2 hours", not "makes billing easier").`,
    checklist: [
      'Value proposition written in the standard formula',
      'Core measurable outcome quantified',
      'Clear differentiation against existing alternatives documented'
    ]
  },
  {
    id: 'stage-7',
    number: '09',
    stageNumber: 7,
    title: 'Stage 7 — Validation Experiments',
    category: 'Validation & Product',
    summary: 'Testing assumptions before writing software.',
    content: `Validation sequence:

\`\`\`
Interview -> Prototype -> Landing Page -> Manual Service -> Pre-Sale -> Paid Pilot -> MVP
\`\`\`

Do not automatically build software to test a business hypothesis.

### Validation IF-THEN Rules:
- **IF** the assumption is low risk -> Document it.
- **IF** the assumption is high risk -> Test it immediately.
- **IF** the test can be done without building software -> Test without software (concierge, Wizard of Oz, manual spreadsheets).
- **IF** users only say "interesting" -> Continue validation; this is not commitment.
- **IF** users commit time, data, or reputation -> Confidence increases.
- **IF** users pay upfront or sign letters of intent -> Confidence increases substantially.
- **IF** users repeatedly use the manual solution -> Investigate retention.
- **IF** repeated tests contradict the hypothesis -> Change the hypothesis (PIVOT).
- **IF** no plausible customer segment emerges -> STOP or choose another problem.`,
    checklist: [
      'Identified the top 3 riskiest assumptions',
      'Designed cheapest experiment that requires no/minimal code',
      'Set clear quantitative criteria for pass/fail before testing',
      'Collected behavioral commitment (deposits, LOIs, or time)'
    ]
  },
  {
    id: 'stage-8',
    number: '10',
    stageNumber: 8,
    title: 'Stage 8 — Minimum Viable Product (MVP)',
    category: 'Validation & Product',
    summary: 'The smallest useful build to test the critical workflow.',
    content: `The MVP must test a meaningful assumption, not showcase technical prowess.

Define:
- Target user
- Core problem
- Core single workflow (the happy path)
- Minimum feature set (cut everything else)
- Success metric
- Experiment period (e.g., 30 days)
- Budget limit
- Decision criteria

### MVP Architecture Decision Tree:
1. **If manual work can test the value** -> Start manually (Concierge MVP).
2. **If clickable prototype can test the value** -> Prototype in Figma / no-code.
3. **If software is necessary** -> Build only the critical single workflow.
4. **If a feature does not test a critical assumption** -> Defer it to future backlog.
5. **If MVP is used but does not create value** -> Fix the product core or revisit problem discovery.`,
    checklist: [
      'Defined single core workflow to test',
      'Cut all secondary features, nice-to-haves, and decorative settings',
      'Instrumented basic event logging / analytics',
      'Set measurable success threshold for user activation'
    ]
  },
  {
    id: 'stage-9',
    number: '11',
    stageNumber: 9,
    title: 'Stage 9 — Cold Outreach System',
    category: 'Sales & GTM',
    summary: 'Targeted ICP lists, personalization, and conversion funnel.',
    content: `Cold outreach is appropriate when you have a specific customer hypothesis and need discovery conversations, pilots, sales, or market intel.

### Cold Outreach Workflow:
\`\`\`
Define ICP -> Build List -> Research -> Personalize -> Contact -> Follow Up -> Conversation -> Pilot/Sale -> Measure
\`\`\`

### Outreach Decision Tree:
1. **If you know exactly who to contact** -> Build a tight, targeted list of 50-100 high-fit prospects.
2. **If you cannot identify your target customer** -> Stop outreach; return to Stage 2 & 3 segmentation.
3. **If message is generic** -> Personalize around their specific trigger event or pain.
4. **If you have no evidence problem exists** -> Use outreach for customer discovery ("seeking feedback on research").
5. **If you have evidence and an MVP** -> Use outreach for pilots or sales.
6. **If recipients do not respond** -> Test: targeting, subject line, opening hook, relevance, credibility, offer, or channel.
7. **If people respond but do not book meetings** -> Re-examine offer and reduce friction.
8. **If meetings happen but nobody advances** -> Investigate product/value/pricing/trust.
9. **If customers buy** -> Document exact reasons why they bought and clone the profile.`,
    checklist: [
      'Ideal Customer Profile (ICP) criteria documented',
      'Curated list of 50-100 verified leads built',
      'Personalized message focusing on problem and peer context created',
      'Multi-touch follow-up cadence scheduled (day 1, 4, 8, 14)',
      'Complies with applicable anti-spam and privacy regulations'
    ]
  },
  {
    id: 'stage-10',
    number: '12',
    stageNumber: 10,
    title: 'Stage 10 — Acquiring First Customers',
    category: 'Sales & GTM',
    summary: 'Direct founder-led sales, pilots, and closing the initial cohort.',
    content: `First customer channels:
- Founder network & alumni
- Warm introductions
- Targeted cold outreach
- Communities & industry forums
- Partnerships & integrations
- Industry events & conferences
- University / research networks
- Direct founder sales

### First Customer Decision Tree:
1. **If you have warm contacts** -> Ask for specific, relevant introductions.
2. **If you do not have warm contacts** -> Build a targeted cold outreach list.
3. **If product is complex / enterprise** -> Use direct sales and paid pilots.
4. **If product is simple / self-service** -> Test product-led onboarding.
5. **If distribution requires high trust** -> Partner with credible domain authorities.
6. **If customers cannot understand the product** -> Improve positioning, demo script, and copy.
7. **If customers understand but do not buy** -> Investigate value, pricing, trust, timing, and alternatives.`,
    checklist: [
      'Founder-led sales deck and 5-minute interactive demo prepared',
      'Pilot criteria defined (duration, success metric, commercial terms)',
      'Direct communication channel established with each pilot user',
      'Target set for first 5-10 paying customers'
    ]
  },
  {
    id: 'stage-11',
    number: '13',
    stageNumber: 11,
    title: 'Stage 11 — Strategic Partnerships',
    category: 'Sales & GTM',
    summary: 'Distribution, technology, enterprise access, and exclusivity warnings.',
    content: `Partnerships can unlock:
- Distribution to customer bases you cannot reach
- Credibility and co-branding
- Technology / API integrations
- Supply chain / manufacturing access
- Implementation and reseller support

### Partnership Decision Tree:
1. **If partner gives access to customers you cannot efficiently reach** -> Investigate and pitch mutual value.
2. **If partner relationship has unclear value** -> Define measurable KPIs before signing.
3. **If partnership requires major custom engineering** -> Test with a small manual pilot first.
4. **If partner demands exclusivity** -> Carefully analyze the strategic cost; avoid exclusivity unless guaranteed revenue is substantial.
5. **If partnership produces measurable value** -> Document standard operating procedure and expand.`,
    checklist: [
      'Mutual incentive clearly defined (what is in it for them)',
      'Pilot integration scope constrained to < 2 weeks work',
      'Exclusivity clauses resisted or capped by strict revenue minimums',
      'Clear success milestones established'
    ]
  },
  {
    id: 'stage-12',
    number: '14',
    stageNumber: 12,
    title: 'Stage 12 — Business Model & Unit Economics',
    category: 'Finance & Model',
    summary: 'The 10 business model questions, CAC, Gross Margin, and LTV formulas.',
    content: `Answer the 10 Fundamental Business Model Questions:
1. Who pays?
2. Why do they pay?
3. How much do they pay?
4. How often (one-time, subscription, usage)?
5. What does delivery cost (COGS, hosting, support)?
6. How do customers find you?
7. What does acquisition cost (CAC)?
8. How long do they remain (retention / churn)?
9. Why do they leave?
10. What limits growth?

### Core Financial Formulas:
- **CAC (Customer Acquisition Cost)**:
  \`CAC = (Sales + Marketing Expenses) / (Number of New Customers Acquired)\`
- **Gross Margin**:
  \`Gross Margin = (Revenue - Direct Delivery Costs) / Revenue\`
- **LTV (Customer Lifetime Value)**:
  \`LTV ≈ Average Gross Profit per Period × Expected Customer Lifetime\`

Target healthy economics: LTV / CAC > 3x, CAC Payback < 12 months.`,
    checklist: [
      'All 10 business model questions answered with data',
      'Direct costs (COGS, server, payment processing, support) itemized',
      'Gross margin calculated and > 65% for software (> 30% for physical)',
      'CAC payback period tracked'
    ]
  },
  {
    id: 'stage-13',
    number: '15',
    stageNumber: 13,
    title: 'Stage 13 — Bootstrapping Decision',
    category: 'Support & Funding',
    summary: 'Financing through revenue vs external capital; evaluating risks.',
    content: `Bootstrapping means financing primarily through founders, customer revenue, or non-equity resources.

### Consider Bootstrapping IF:
- Capital requirements are relatively modest
- Revenue can begin early in the development cycle
- Growth does not require massive upfront capex / hardware
- Founders can financially sustain personal living costs
- Maintaining 100% ownership and decision control is vital
- Customer revenue can organically fund hiring and expansion

### Bootstrapping Risks to Monitor:
- Founder burnout and severe financial stress
- Underinvestment in critical technology or talent
- Inability to exploit time-sensitive winner-take-all markets
- Vulnerability to well-funded competitors

> **DECISION GATE**: Bootstrapping is a financing strategy, not a moral badge. The appropriate choice depends on the business model, capital intensity, competitive velocity, and founder objectives.`,
    checklist: [
      'Personal financial runway calculated (minimum 12-18 months)',
      'Cash flow breakeven milestones modeled',
      'Tradeoffs between speed to market and ownership evaluated'
    ]
  },
  {
    id: 'stage-14',
    number: '16',
    stageNumber: 14,
    title: 'Stage 14 — Angel Investors',
    category: 'Support & Funding',
    summary: 'Early capital, industry operators, checks, and angel prep.',
    content: `Angel investors provide early capital, operator experience, introductions, and credibility.

### Consider Angel Financing IF:
- You have a credible early-stage opportunity with early validation
- Capital would meaningfully accelerate hitting the next value inflection point
- Investor domain expertise can unblock distribution or regulation
- Founders understand dilution and standard SAFE / convertible note terms

### Before Contacting Angels, Prepare:
- 1-sentence description & 30-second elevator pitch
- Validated customer problem & ICP
- Working demo or prototype
- Behavioral evidence / traction numbers
- Unit economics & business model
- Market sizing (bottom-up)
- Founder backgrounds & why you win
- Capital ask, use of funds, and the exact milestone it will unlock`,
    checklist: [
      'Standardized SAFE / convertible note structure prepared',
      'Target angel list of operators with relevant domain experience built',
      'Specific milestone defined for the capital round',
      'Deck and demo polished'
    ]
  },
  {
    id: 'stage-15',
    number: '17',
    stageNumber: 15,
    title: 'Stage 15 — Venture Capital (VC)',
    category: 'Support & Funding',
    summary: 'Venture-scale math, portfolio dynamics, and milestone justification.',
    content: `VC is not simply "better funding" or free validation. VC is high-octane rocket fuel with structural expectations of 100x return potential and high dilution.

### VC Decision Tree:
1. **If company does not require external capital** -> Do not assume VC is necessary.
2. **If business is unlikely to produce $50M-$100M+ ARR venture returns** -> Seek alternative financing (bootstrapping, profit-share, debt, angels).
3. **If external capital will accelerate a validated large opportunity** -> Research aligned funds.
4. **If demand is completely untested** -> Validate cheaply first before burning investor relationships.
5. **If company has traction evidence** -> Anchor the pitch on the next major inflection milestone.
6. **If VC is appropriate** -> Filter funds strictly by: sector thesis, investment stage, check size, portfolio conflicts, partner expertise, and reserve capacity.

> **CRITICAL QUESTION**: Ask not "Can I raise VC?" but: *"What milestone will this capital allow us to achieve, and why does venture equity financing make sense for that milestone?"*`,
    checklist: [
      'Venture-scale market size and unit economics validated',
      'Target fund list filtered by stage, geography, and thesis',
      'Milestone to Series A clearly mapped with 18-24 month runway',
      'Cap table dilution model projected across future rounds'
    ]
  },
  {
    id: 'stage-16',
    number: '18',
    stageNumber: 16,
    title: 'Stage 16 — Seed & Pre-Seed Fundraising',
    category: 'Support & Funding',
    summary: 'Capital requirements, hiring plan, roadmap, and use of funds.',
    content: `Before launching a round, explicitly define:
- Current state and traction proof
- Target milestone the round achieves
- Exact capital required (with 20% contingency buffer)
- Expected runway (target 18 to 24 months)
- Essential hiring plan
- Engineering & product roadmap
- Sales & go-to-market plan
- Top 3 company risks and how the round mitigates them

### Master Funding Algorithm:
\`\`\`
IF no external capital is needed -> Bootstrap.
IF capital is needed for early validation -> Grants, founder capital, angels.
IF product is validated and growth requires capital -> Seed financing.
IF company has repeatable growth and requires scaling capital -> Series A / Institutional.
IF terms create unacceptable liquidation preferences or control loss -> Walk away or negotiate.
IF capital is raised -> Track use of funds rigorously against agreed milestones.
\`\`\``,
    checklist: [
      'Financial model with monthly burn rate and runway projections built',
      'Lead investor terms and target valuation range understood',
      'Due diligence materials consolidated into an organized data room',
      'Fundraising timeline timeboxed to 6-8 weeks to avoid founder paralysis'
    ]
  },
  {
    id: 'stage-17',
    number: '19',
    stageNumber: 17,
    title: 'Stage 17 — Debt & Alternative Financing',
    category: 'Support & Funding',
    summary: 'Venture debt, revenue-based finance, working capital, and covenants.',
    content: `Debt can be appropriate when the business has predictable recurring cash flow or strong collateral, avoiding dilution.

Potential instruments:
- Revenue-based financing (RBF)
- Venture debt (typically alongside institutional equity)
- Working capital / invoice factoring
- Equipment loans / leases

### Debt Decision Tree:
1. **If repayment depends on highly uncertain future revenue** -> Do NOT take debt. Debt default leads to liquidation.
2. **If cash flows are predictable enough for service** -> Evaluate debt cost vs equity dilution.
3. **If debt requires personal founder guarantees** -> Exercise extreme caution; understand personal bankruptcy liability.
4. **If debt creates excessive fixed monthly obligations** -> Compare with equity or grants.`,
    checklist: [
      'Cash flow predictability stress-tested against 30% revenue drops',
      'Covenants and default triggers scrutinized',
      'Personal guarantee clauses identified and evaluated'
    ]
  },
  {
    id: 'stage-18',
    number: '20',
    stageNumber: 18,
    title: 'Stage 18 — The Funding Decision Matrix',
    category: 'Support & Funding',
    summary: 'Comparison of all 12 funding sources, benefits, and critical questions.',
    content: `Compare all funding options against your startup stage and objectives:

| Source | Typical Use | Main Benefit | Critical Question to Ask |
|---|---|---|---|
| **Founder Capital** | Very early discovery | Complete speed and control | Can founders afford complete loss? |
| **Customer Revenue** | Product development & growth | Validation + non-dilutive capital | Can customers fund the needed growth speed? |
| **Grants** | Deep-tech / research / green | Non-dilutive, zero equity | Are reporting rules and delays manageable? |
| **Competitions** | Early validation | Cash prizes, visibility, pitch feedback | Does preparation distract from customers? |
| **Pre-Incubator** | Idea formation & validation | Structured guidance, peer network | Does it solve your immediate bottleneck? |
| **Incubator** | Early company building | Long-term space, labs, mentors | Are resources actually useful or vanity? |
| **Accelerator** | Early traction to seed round | Concentrated network, demo day, capital | Do terms (typically 7-10% equity) justify value? |
| **Angel Investor** | Pre-seed / Seed bridge | Fast checks, operator advice | Aligned expectations? Follow-on capacity? |
| **Seed Fund** | Validated product to growth | Institutional backing, Series A path | What milestone does this round finance? |
| **Venture Capital** | Hyper-scale growth | Deep pockets, category leadership | Is business suited for $100M+ fund return model? |
| **Venture / Bank Debt**| Predictable runway extension | Zero equity dilution | Can company service debt under worst case? |
| **Strategic Investor** | Enterprise distribution | Scale, commercial contracts | Do rights of first refusal block future M&A? |`,
    checklist: [
      'Reviewed all 12 funding options',
      'Selected primary and secondary options matching current stage',
      'Assessed total cost of capital including dilution and control rights'
    ]
  },
  {
    id: 'stage-19',
    number: '21',
    stageNumber: 19,
    title: 'Stage 19 — When to Incorporate',
    category: 'Legal & Company',
    summary: 'Triggers for formal legal entity formation and jurisdiction considerations.',
    content: `Incorporation timing depends on liability, IP creation, contracts, and fundraising.

### Incorporation Decision Tree:
1. **If you are only exploring an idea** -> Research structure; do not spend thousands incorporating prematurely.
2. **If multiple founders are writing code / creating IP** -> Incorporate and assign IP before substantial value accumulates.
3. **If you need an entity to sign commercial contracts or accept payments** -> Incorporate immediately.
4. **If hiring employees or contractors** -> Formalize entity and IP assignment agreements.
5. **If raising outside capital (SAFE, priced round, grants)** -> Investors require a clean legal corporation (e.g., Delaware C-Corp or local equivalent).
6. **If business activity carries liability risks (health, financial, safety)** -> Establish limited liability protection early.
7. **If commercial transactions become material** -> Retain certified legal/accounting counsel and complete formation.`,
    checklist: [
      'Evaluated legal jurisdiction requirements (e.g. Delaware C-Corp)',
      'Determined if commercial liability or IP necessitates an entity now',
      'Researched registered agent and ongoing compliance fees'
    ]
  },
  {
    id: 'stage-20',
    number: '22',
    stageNumber: 20,
    title: 'Stage 20 — Company Formation & Governance',
    category: 'Legal & Company',
    summary: 'Founders agreement, banking, tax, accounting, and compliance.',
    content: `Essential pillars of formal company formation:
- Legal entity registration (Articles of Incorporation)
- Founder stock purchase agreements with vesting
- Intellectual Property Assignment Agreements (all prior and future work)
- Board of Directors and manager designations
- Tax ID registrations (e.g., EIN, state tax accounts, VAT/GST)
- Dedicated business bank account (never commingle personal funds)
- Accounting software setup (e.g., QuickBooks, Xero)
- Local business licenses and permits
- Commercial and cyber liability insurance
- Standard client service agreements / Terms of Service / Privacy Policy
- Employment agreements and contractor NDAs

> **DECISION RULE**: Company registration alone does not satisfy compliance. Taxes, employment, IP, licensing, and securities require ongoing diligence.`,
    checklist: [
      'Articles of Incorporation filed and certified',
      'Founder stock purchase agreements executed with 4-year vesting',
      'IP Assignment signed by all founders and contributors',
      'Dedicated business bank account opened and funded',
      'Accounting system configured'
    ]
  },
  {
    id: 'stage-21',
    number: '23',
    stageNumber: 21,
    title: 'Stage 21 — Intellectual Property (IP)',
    category: 'Legal & Company',
    summary: 'Code, trademarks, trade secrets, patents, and third-party licenses.',
    content: `Create a formal IP inventory:
- Source code repositories and documentation
- Proprietary algorithms and models
- Patentable inventions and physical designs
- Trademarks, brand marks, and slogans
- Domain names and social handles
- Proprietary datasets and schemas
- Trade secrets and operational methodologies

### IP Decision Rules:
1. **If any employee or contractor contributes code/designs** -> Secure written IP assignment before work begins.
2. **If an invention may be patentable** -> Evaluate patentability before any public disclosure (preserve novelty).
3. **If brand identity is core to the business** -> Check trademark registries and register early.
4. **If third-party open-source libraries are used** -> Verify licenses (avoid copyleft GPL contamination in proprietary SaaS).`,
    checklist: [
      'Proprietary IP inventory documented',
      'Signed Invention Assignment agreements on file for all contributors',
      'Open-source license audit conducted on codebase',
      'Trademark availability verified across USPTO/WIPO databases'
    ]
  },
  {
    id: 'stage-22',
    number: '24',
    stageNumber: 22,
    title: 'Stage 22 — Website, Brand & The 20-Slide Pitch Deck',
    category: 'Sales & GTM',
    summary: 'Essential communication assets, website requirements, and deck structure.',
    content: `### Minimum Company Identity:
- Company name and clean domain
- 1-line positioning statement
- Clean typography and monochromatic visual identity
- Professional email accounts (no @gmail.com for business)
- Social profiles and company profile

### 7 Questions Every Startup Website Must Answer:
1. What is it?
2. Who is it for?
3. What problem does it solve?
4. Why does it matter right now?
5. How does it work (3 clear steps)?
6. What proof or evidence exists?
7. What should the visitor do next (single clear CTA)?

### Standard 20-Slide Pitch Deck:
1. Title & One-line elevator pitch
2. Problem statement
3. Target customer persona
4. Why now (market tailwinds)
5. Existing alternatives & their flaws
6. Solution & value proposition
7. Product overview
8. Interactive demo / Screenshots
9. Traction & behavioral evidence
10. Business model & pricing
11. Market sizing (TAM / SAM / SOM)
12. Go-to-market strategy
13. Competitive matrix
14. Technology & IP moats
15. Founding team & unfair advantage
16. Financial projections (3-5 years)
17. Funding requirement & round terms
18. Use of funds breakdown
19. Milestones achieved with this round
20. Contact & next steps`,
    checklist: [
      'Website answers all 7 core questions with zero jargon',
      'Single prominent primary CTA button deployed',
      '20-slide pitch deck assembled following the canonical structure',
      'One-line elevator pitch memorized by all team members'
    ]
  },
  {
    id: 'stage-23',
    number: '25',
    stageNumber: 23,
    title: 'Stage 23 — The Repeatable Sales System',
    category: 'Sales & GTM',
    summary: 'The 9-step sales pipeline and the Sales Troubleshooting Matrix.',
    content: `Build a disciplined pipeline:
\`\`\`
Lead -> Qualification -> Discovery -> Demo -> Proposal -> Negotiation -> Close -> Onboarding -> Retention
\`\`\`

### Sales Troubleshooting Matrix:
| Symptom | Root Cause to Investigate | Immediate Remedial Action |
|---|---|---|
| **No responses to outreach** | Poor targeting, weak subject line, irrelevant channel | Narrow ICP; personalize opening hook with pain trigger |
| **Responses, but no meetings booked** | Vague offer, lack of credibility, no urgency | Simplify CTA to a 15-min peer problem discussion |
| **Meetings happen, but no pilots start** | Product doesn't solve high-priority hair-on-fire pain | Revisit discovery; identify their top 1 critical objective |
| **Pilots complete, but no purchase** | Pricing too high, unclear ROI, procurement friction | Build clear ROI calculator; interview buyer vs user |
| **Purchases made, but poor usage** | Broken onboarding, difficult UX, poor time-to-value | Implement white-glove guided onboarding; remove friction |
| **Active usage, but high churn** | Product doesn't deliver ongoing recurring value | Interview churned users; fix core retention loop |
| **High retention, but poor margins** | Pricing too low or high direct servicing costs | Raise pricing on new cohorts; automate manual delivery |
| **Great margins, but slow customer growth**| Distribution bottleneck or unscalable sales motion | Test new acquisition channels; recruit sales specialist |`,
    checklist: [
      'CRM or lightweight tracking pipeline configured',
      'Qualification criteria (BANT / MEDDIC) documented',
      'Sales objection handling guide compiled',
      'Standardized proposal and order form template prepared'
    ]
  },
  {
    id: 'stage-24',
    number: '26',
    stageNumber: 24,
    title: 'Stage 24 — Product Engineering Foundations',
    category: 'Engineering & Ops',
    summary: '12 engineering foundations and the 10-step delivery pipeline.',
    content: `Build engineering foundations that scale without unmaintainable tech debt:
- Version control (Git) with strict protected branches
- Automated CI/CD deployment pipelines
- Automated unit and integration testing
- Infrastructure as Code (IaC)
- Strict secrets management (never commit API keys or credentials)
- Structured application logging and centralized tracing
- Uptime monitoring and synthetic alerts
- Automated daily database backups with verified restore drills
- Zero-downtime deployments and rapid rollback capability
- Documented Incident Response runbooks

### 10-Step Software Delivery Pipeline:
\`\`\`
Idea -> Issue -> Code -> Review -> Test -> Security Scan -> Build -> Deploy -> Observe -> Improve
\`\`\``,
    checklist: [
      'Main/production branch locked with mandatory PR reviews',
      'Automated CI build and test execution on every commit',
      'No secrets or private keys in Git repository',
      'Automated database backups configured with tested restore protocol'
    ]
  },
  {
    id: 'stage-25',
    number: '27',
    stageNumber: 25,
    title: 'Stage 25 — Security and Privacy Safeguards',
    category: 'Engineering & Ops',
    summary: 'MFA, least privilege, data classification, and incident response.',
    content: `Essential security hygiene rules:
1. **If personal user data is collected** -> Determine applicable regulations (GDPR, CCPA, HIPAA) and document data flows.
2. **If sensitive data is stored** -> Encrypt at rest (AES-256) and in transit (TLS 1.3); strictly restrict access.
3. **If critical accounts lack MFA** -> Mandate hardware/app-based Multi-Factor Authentication on email, GitHub, AWS, and banking immediately.
4. **If production access is broad** -> Apply Principle of Least Privilege; eliminate shared admin credentials.
5. **If secrets are in source code** -> Remove immediately, rotate all keys, and install pre-commit secret scanners.
6. **If customer data is exposed** -> Trigger incident response plan, contain the breach, notify affected parties, and seek counsel.`,
    checklist: [
      'Mandatory MFA enforced across all company accounts',
      'Principle of least privilege applied to production infrastructure',
      'Data encryption enabled at rest and in transit',
      'Privacy policy matches actual data collection and retention practices'
    ]
  },
  {
    id: 'stage-26',
    number: '28',
    stageNumber: 26,
    title: 'Stage 26 — Financial Management & Runway',
    category: 'Finance & Model',
    summary: 'Tracking burn, runway formula, and the 10-step monthly routine.',
    content: `Track the core financial dashboard:
- Monthly Revenue
- Direct Costs & Gross Margin
- Operating Expenses (OpEx)
- Current Cash in Bank
- Net Monthly Cash Burn
- True Runway in Months
- Accounts Receivable (A/R) & Accounts Payable (A/P)
- Tax liabilities reserve

### Runway Formula:
\`\`\`
Runway (Months) = Available Cash / Average Monthly Net Cash Burn
\`\`\`

### 10-Step Monthly Financial Routine:
1. Reconcile bank and credit accounts
2. Record recognized revenue
3. Record itemized operating expenses
4. Calculate net burn and ending cash balance
5. Review overdue receivables and collect
6. Review upcoming payables
7. Update rolling 12-month financial forecast
8. Recalculate runway; flag if < 6 months
9. Compare actual spend vs budgeted variance
10. Update board and team metrics`,
    checklist: [
      'Monthly burn rate and cash runway calculated accurately',
      'Minimum 6 months cash buffer maintained or fundraise triggered',
      'Tax withholdings set aside in a separate reserve account',
      'Monthly financial reconciliation completed on schedule'
    ]
  },
  {
    id: 'stage-27',
    number: '29',
    stageNumber: 27,
    title: 'Stage 27 — Hiring & Organizational Design',
    category: 'Engineering & Ops',
    summary: 'Hiring decision tree, contractors vs employees, and role specification.',
    content: `Hire only when there is a proven capacity or capability bottleneck that code or automation cannot solve.

### Hiring Decision Tree:
1. **If work is temporary or specialized** -> Engage a contractor, consultant, or agency.
2. **If work is strategic and recurring** -> Evaluate a permanent hire.
3. **If founder is the execution bottleneck** -> Define precisely which low-leverage tasks will be delegated.
4. **If the role is unclear or evolving daily** -> Do NOT hire. Execute manually until the role is clearly defined.
5. **If role is clearly defined** -> Specify:
   - Mission statement of the role
   - Top 3 measurable 90-day outcomes
   - Core responsibilities
   - Required skills vs nice-to-haves
   - Compensation (salary + equity vesting)
   - Onboarding roadmap and 30-60-90 day milestones`,
    checklist: [
      'Role defined with measurable 90-day outcomes',
      'Evaluated automation/contractors before making full-time commitment',
      'Standard employment/contractor agreement with IP assignment prepared',
      'Structured onboarding guide written'
    ]
  },
  {
    id: 'stage-28',
    number: '30',
    stageNumber: 28,
    title: 'Stage 28 — Product-Market Evidence',
    category: 'Validation & Product',
    summary: 'Cohort retention, activation rates, and measuring behavioral truth.',
    content: `Track customer behavior rather than polite compliments.

### Core Metrics:
- **Activation Rate**:
  \`Activation = (Users Reaching Value Event) / (Total Signups)\`
- **Cohort Retention**:
  \`Retention = (Users Remaining Active in Period N) / (Starting Cohort Size)\`
- Usage frequency and session depth
- Feature adoption and workflow completion
- Customer churn (logo churn and net revenue churn)
- Net Promoter Score (NPS) and qualitative exit interviews

> **PMF BENCHMARK**: Product-Market Fit is evident when retention curves flatten out horizontally (no more churn after month 2), word-of-mouth brings new users, and users complain intensely when the product goes down.`,
    checklist: [
      'Primary "Aha! value event" clearly defined',
      'Cohort retention curves graphed over 30, 60, and 90 days',
      'Exit interviews conducted with every churned customer',
      'Retention curve flattens asymptotically'
    ]
  },
  {
    id: 'stage-29',
    number: '31',
    stageNumber: 29,
    title: 'Stage 29 — Go-To-Market (GTM) Scale',
    category: 'Sales & GTM',
    summary: 'Evaluating acquisition channels and scaling what works.',
    content: `Build a repeatable distribution engine:
\`\`\`
Target Segment -> Positioning -> Channel -> Message -> Qualified Lead -> Sale -> Onboarding -> Retention
\`\`\`

### 11 Acquisition Channels to Test (One by One):
1. Founder-led direct outreach
2. Warm referral loops & customer incentives
3. Cold outbound email / LinkedIn
4. SEO & technical content marketing
5. Strategic partner distribution
6. Industry community leadership
7. In-person trade shows & conferences
8. App marketplaces & platform ecosystems
9. Targeted paid acquisition (search / social)
10. Product-Led Growth (PLG viral loops)
11. Public relations & thought leadership

> **RULE**: Do not run 10 channels poorly. Master 1 primary scalable channel with positive unit economics before diversifying.`,
    checklist: [
      'Single primary acquisition channel producing consistent leads identified',
      'CAC per channel measured accurately against LTV',
      'Documented conversion rates across each funnel step'
    ]
  },
  {
    id: 'stage-30',
    number: '32',
    stageNumber: 30,
    title: 'Stage 30 — The Fundraising Process',
    category: 'Support & Funding',
    summary: 'The 11-step fundraising pipeline, research table, and cold outreach.',
    content: `Run fundraising like a tight, synchronized enterprise sales campaign:
\`\`\`
Prepare -> Research Investors -> Warm Introductions -> Cold Outreach -> First Meeting -> Follow-ups -> Due Diligence -> Term Sheet Negotiation -> Legal Documentation -> Closing -> Use of Funds
\`\`\`

### Cold Investor Outreach Formula:
1. Who you are and credentials
2. What you are building (in 1 crisp sentence)
3. Who has the hair-on-fire problem
4. Concrete behavioral evidence & metrics (MoM growth, retention)
5. Why this specific investor / firm is relevant
6. Round target and key milestone it finances
7. Low-friction next step ("Are you free for a 15-min intro this Thursday?")`,
    checklist: [
      'Target list of 60-100 aligned investors compiled',
      'Pipeline tracked in a CRM with stage progression',
      'Pitch deck and data room links prepared with viewer tracking'
    ]
  },
  {
    id: 'stage-31',
    number: '33',
    stageNumber: 31,
    title: 'Stage 31 — Warm Introductions',
    category: 'Support & Funding',
    summary: 'How to ask for high-converting introductions.',
    content: `Warm introductions convert at 5x to 10x the rate of cold outreach.

Best Introduction Sources:
- Founders previously backed by the investor
- Portfolio CEOs who respect your work
- Respected angel investors in the fund's ecosystem
- Respected customers or domain experts

### The Double-Opt-In Introduction Rule:
**Bad Request:**
*"Please introduce me to any investors you know."*

**High-Converting Request:**
*"Would you be comfortable introducing me to [Investor Name] at [Fund]? I saw they led the seed round for [Portfolio Company in adjacent space]. We just crossed $15k MRR with 95% retention in industrial IoT, and I think our manufacturing focus matches their thesis. Below is a forwardable blurb you can send directly."*`,
    checklist: [
      'Forwardable email blurb written for connectors',
      'Double-opt-in protocol followed for all introductions',
      'Prompt thank-you and status updates sent to all connectors'
    ]
  },
  {
    id: 'stage-32',
    number: '34',
    stageNumber: 32,
    title: 'Stage 32 — Investor Meeting Preparation',
    category: 'Support & Funding',
    summary: 'The 14 mandatory questions and the elevator ladder.',
    content: `Before any pitch meeting, be prepared to answer:
1. What exact problem are you solving?
2. Why is now the right historical moment (market catalyst)?
3. Who specifically experiences this pain?
4. How do they solve it today?
5. Why is your solution 10x better?
6. What hard evidence of demand exists?
7. How do you make money and what are the unit economics?
8. How do you acquire customers repeatability?
9. What is the realistic market size?
10. What have you learned from failures so far?
11. What remains the single biggest uncertainty?
12. Why are you the specific team to win this category?
13. How much capital are you raising?
14. What exact milestone will this round achieve in 18 months?

### The Elevator Pitch Ladder:
A founder must be able to explain the business seamlessly in:
- 10 seconds (one punchy sentence)
- 30 seconds (problem, solution, traction)
- 2 minutes (the narrative arc)
- 10 minutes (partner pitch)
- 30 minutes (deep operational dive)`,
    checklist: [
      'Answers to all 14 investor questions prepared and rehearsed',
      'Elevator pitches mastered across the 10s -> 30s -> 2m ladder',
      'Product demo recorded and available offline as backup'
    ]
  },
  {
    id: 'stage-33',
    number: '35',
    stageNumber: 33,
    title: 'Stage 33 — The 20-Folder Virtual Data Room',
    category: 'Support & Funding',
    summary: 'Organizing due diligence materials for smooth closing.',
    content: `Maintain an organized, access-controlled virtual data room with the following standard 20 folders:

\`\`\`
01_Company_Overview
02_Founders_and_Team
03_Cap_Table_and_Equity
04_Prior_Financing_Docs
05_Financial_Statements_and_Tax
06_Financial_Model_and_Forecast
07_Legal_Corporate_Records
08_IP_and_Patents
09_Customer_Contracts_and_LOIs
10_Material_Agreements
11_Product_Roadmap_and_Demos
12_Architecture_and_Technology
13_Security_and_Compliance
14_Privacy_and_Data_Protection
15_HR_and_Employment_Agreements
16_Insurance_Policies
17_Fundraising_Pitch_Deck
18_KPIs_and_Cohort_Metrics
19_Market_Research_and_Competitors
20_Cap_Table_Scenarios
\`\`\``,
    checklist: [
      'Data room folder structure populated with audited documents',
      'Permission controls configured with watermarks and NDA where required',
      'Cap table mathematically matches stock certificates and option pool'
    ]
  },
  {
    id: 'stage-34',
    number: '36',
    stageNumber: 34,
    title: 'Stage 34 — Core Operating Metrics',
    category: 'Finance & Model',
    summary: 'The metrics that matter and the single metric decision rule.',
    content: `Focus on a compact set of actionable metrics. Never track vanity numbers that do not influence decisions.

Core Metric Groups:
- **Acquisition**: Qualified leads, CAC, Channel efficiency
- **Activation**: Time-to-value, Onboarding completion rate
- **Engagement**: Daily/Monthly active users (DAU/MAU), Workflow frequency
- **Retention**: Net Revenue Retention (NRR), Logo churn rate
- **Financial**: Monthly Recurring Revenue (MRR), Gross Margin, Burn, Runway
- **Operational**: Bug resolution speed, Server uptime, Support response time

> **FOUNDER METRIC RULE**: A metric is only useful if a change in its value forces somebody on the team to make a specific decision.`,
    checklist: [
      'North Star Metric identified and visible to entire company',
      'Automated weekly metric dashboard configured',
      'Vanity metrics eliminated from team discussions'
    ]
  },
  {
    id: 'stage-35',
    number: '37',
    stageNumber: 35,
    title: 'Stage 35 — Repeatable Operations & SOPs',
    category: 'Engineering & Ops',
    summary: 'Process documentation formula: Owner + Trigger + Steps + Inputs + Outputs + Metric.',
    content: `Once a workflow works manually, systematize it before delegating or automating.

Standard Operating Procedure (SOP) Formula:
\`\`\`
Owner + Trigger + Step-by-Step Actions + Inputs + Outputs + Quality Metric
\`\`\`

Document standard processes for:
- Lead qualification & sales handoff
- Customer onboarding & setup
- Customer support escalation
- Monthly billing & collections
- Production deployment & rollback
- Security incident response
- Employee onboarding & offboarding
- Financial monthly reconciliation`,
    checklist: [
      'Core recurring workflows documented in SOP templates',
      'Single owner assigned to every business process',
      'SOPs reviewed and updated quarterly'
    ]
  },
  {
    id: 'stage-36',
    number: '38',
    stageNumber: 36,
    title: 'Stage 36 — The Scaling Decision Gate',
    category: 'Operations & Scaling',
    summary: '10 scaling questions and the controlled scaling algorithm.',
    content: `Do not scale because growth is exciting or because you just raised capital. Premature scaling is the #1 cause of startup death.

### Answer the 10 Scaling Readiness Questions:
1. Can customers be acquired repeatedly through a known channel?
2. Can customers be onboarded without founder heroics?
3. Can the core value be delivered reliably?
4. Are customers retaining over 6+ months?
5. Are unit economics clearly profitable on a contribution margin basis?
6. Can technical infrastructure handle 10x traffic without failure?
7. Can customer support maintain SLAs at scale?
8. Can finance handle billing, tax, and working capital demands?
9. Does the team culture and management structure support new hires?
10. Are regulatory, privacy, and security obligations documented?

### Controlled Scaling Algorithm:
\`\`\`
IF growth is repeatable AND retention is strong AND unit economics work -> Scale.
IF scaling breaks delivery or quality -> PAUSE growth immediately.
IF a bottleneck is diagnosed -> Fix the root bottleneck.
IF the system stabilizes -> Resume controlled growth.
\`\`\``,
    checklist: [
      'Passed all 10 scaling readiness checks',
      'Unit economics remain positive under increased marketing spend',
      'Monitoring systems in place to detect operational bottlenecks early'
    ]
  },
  {
    id: 'stage-37',
    number: '39',
    stageNumber: 37,
    title: 'Stage 37 — What To Do When You Are Stuck',
    category: 'Operations & Scaling',
    summary: 'The founder troubleshooting tree for the 6 classic startup traps.',
    content: `### Trap 1: "I have an idea but no clarity"
\`Problem -> Customer -> Interview -> Current Solution -> Measurable Pain\`
*Do not start with fundraising or coding. Talk to 15 users.*

### Trap 2: "I have an idea but no technical skills"
1. Validate manually with spreadsheets, concierge services, or no-code tools.
2. Build an interactive Figma prototype.
3. Bring in a technical advisor or mentor.
4. Partner with a technical co-founder only after customer demand is proven.
*Do not spend tens of thousands hiring dev agencies before validating demand.*

### Trap 3: "I have a product but no customers"
\`ICP -> Value Proposition -> Targeted Outreach -> Demo -> Paid Pilot -> Closed Sale\`
*Investigate: Wrong customer persona? Vague positioning? High friction? Lack of trust?*

### Trap 4: "People like it, but nobody pays"
*Diagnose: Is the problem a nice-to-have vitamin or a painful painkiller? Are you speaking to the user instead of the economic buyer with budget? Is your pricing model aligned with value?*

### Trap 5: "I have customers, but I am running out of money"
*Calculate: Exactly how much cash is needed? For what specific milestone? By what date? Evaluate: Customer prepayment discounts, grants, angels, bridge loans, or emergency expense cuts.*

### Trap 6: "Investors keep saying no"
*Diagnose: Stage mismatch? Wrong fund thesis? Weak traction signal? Unclear TAM? Bad pitch delivery? Ask for honest feedback: "What would you need to see in 6 months to change your mind?"*`,
    checklist: [
      'Diagnosed current stagnation against the 6 classic traps',
      'Formulated the cheapest experiment to unstick progress',
      'Set a 14-day deadline to evaluate results'
    ]
  },
  {
    id: 'stage-38',
    number: '40',
    stageNumber: 38,
    title: 'Stage 38 — Founder Communication Assets',
    category: 'Operations & Scaling',
    summary: 'The 12 standard company assets to eliminate daily narrative rewrite.',
    content: `Standardize company messaging so you never reinvent the wheel:
1. One-line punchy pitch
2. 30-second elevator speech
3. 2-minute narrative overview
4. 1-page executive summary PDF
5. Founder professional biographies
6. Customer discovery email templates
7. Sales cold outreach & follow-up cadences
8. Investor cold outreach & update templates
9. Partnership pitch template
10. Standard 15-minute product demo script
11. Customer Objection & FAQ handbook
12. Master company pitch deck (regularly updated)`,
    checklist: [
      'Standardized message library compiled in shared workspace',
      'All co-founders and team aligned on unified narrative',
      'Assets version-controlled and updated quarterly'
    ]
  },
  {
    id: 'stage-39',
    number: '41',
    stageNumber: 39,
    title: 'Stage 39 — Weekly Founder Operating System',
    category: 'Operations & Scaling',
    summary: 'The 5 weekly review pillars and the 2 golden questions.',
    content: `Run this operating check-in every Monday morning or Friday afternoon:

### 1. Customers
- How many new discovery conversations?
- How many active pilots?
- How many new paying accounts?
- How many churned / at-risk accounts?

### 2. Product
- What customer-facing value was shipped?
- What broke in production?
- What was the most common user friction point?

### 3. Finance
- Cash in bank?
- True runway in months?
- Recognized revenue this week?
- Unexpected expenses?

### 4. Team & Operations
- Who is blocked and on what?
- What single capability is missing?

### The 2 Golden Questions:
\`\`\`
1. What is the single biggest uncertainty facing the business right now?
2. What is the cheapest experiment that can reduce or eliminate it this week?
\`\`\``,
    checklist: [
      'Conducted weekly operating review',
      'Identified week’s #1 uncertainty and designed test',
      'Logged metrics into company dashboard'
    ]
  },
  {
    id: 'stage-40',
    number: '42',
    stageNumber: 40,
    title: 'Stage 40 — Monthly Review & Assumption Matrix',
    category: 'Operations & Scaling',
    summary: 'Reviewing assumptions: TRUE, FALSE, or UNKNOWN.',
    content: `Every month, evaluate the macro trajectory:
- Customer growth and cohort retention curves
- Gross margins and CAC trends
- Cash runway and forecast updates
- Team velocity and hiring roadmap
- Competitive landscape changes

### The Assumption Classification Matrix:
Audit every core belief about your company and categorize:
- **TRUE**: Proven with robust behavioral evidence and data.
- **FALSE**: Contradicted by real-world tests; adjust strategy immediately.
- **UNKNOWN**: An unproven assumption that poses risk.

> **RULE**: All **UNKNOWN** assumptions automatically become your prioritized experiments for the next 30 days.`,
    checklist: [
      'Monthly financial and cohort audit completed',
      'All company assumptions categorized as TRUE, FALSE, or UNKNOWN',
      'Top UNKNOWN assumptions converted into next month’s experiments'
    ]
  },
  {
    id: 'stage-41',
    number: '43',
    stageNumber: 41,
    title: 'Stage 41 — Founder Decision Log',
    category: 'Operations & Scaling',
    summary: 'Creating organizational memory to eliminate recurring mistakes.',
    content: `For every consequential strategic, technical, or hiring decision, log:
1. **Date**
2. **Decision Taken**
3. **Decision Owner**
4. **Evidence & Data Used**
5. **Alternatives Considered & Rejected**
6. **Core Assumptions Made**
7. **Expected Measurable Outcome**
8. **Scheduled Review Date (e.g. 60 days out)**
9. **Actual Outcome & Retrospective Learnings**

This creates institutional memory and prevents founders from rewriting history.`,
    checklist: [
      'Decision Log configured in company wiki or internal tools',
      'Major company pivots and architectural commitments logged',
      'Scheduled reviews held to evaluate decision accuracy'
    ]
  },
  {
    id: 'stage-50',
    number: '44',
    title: 'The Master Founder IF-THEN Algorithm',
    category: 'Algorithms',
    summary: 'Executable founder pseudocode loop from zero to scale.',
    content: `\`\`\`
START

IF you have only an idea
    THEN write the idea in one sentence.

IF the customer is unclear
    THEN define a narrow initial customer (ICP).

IF the problem is unclear
    THEN interview potential customers about past behavior.

IF the problem does not appear important
    THEN change the problem or segment (PIVOT).

IF the problem appears important
    THEN research current alternatives and switching costs.

IF you are extremely early
    THEN consider pre-incubation, university programs, mentors, or communities.

IF you need structured long-term lab/infrastructure support
    THEN investigate incubators.

IF you have early traction and need concentrated growth/fundraising
    THEN investigate accelerators.

IF your project matches a non-dilutive grant objective
    THEN investigate grant funding.

IF you can test the idea without software
    THEN test without software (concierge, manual, landing page).

IF customers show behavioral commitment
    THEN increase confidence.

IF evidence contradicts the hypothesis
    THEN PIVOT or STOP.

IF enough evidence exists
    THEN build the smallest useful MVP.

IF MVP does not create value
    THEN improve MVP or revisit the problem.

IF MVP creates value
    THEN find first paying customers.

IF warm introductions exist
    THEN use targeted double-opt-in intros.

IF warm introductions do not exist
    THEN build a targeted cold outreach list.

IF outreach produces no response
    THEN test targeting, message, channel, and offer.

IF meetings happen but sales do not
    THEN investigate value, product, price, trust, timing, and buying process.

IF customers buy
    THEN measure onboarding and cohort retention.

IF customers do not retain
    THEN investigate product value and onboarding friction.

IF customers retain
    THEN measure unit economics (CAC, Gross Margin, LTV).

IF unit economics are unsustainable
    THEN test pricing, direct costs, retention, or acquisition channels.

IF economics can work
    THEN document repeatable operations into SOPs.

IF founders are creating meaningful IP together
    THEN formalize founder agreements, vesting, and IP assignment.

IF contracts or commercial activity require an entity
    THEN incorporate legal company.

IF customer data is collected
    THEN implement MFA, encryption, and privacy compliance.

IF revenue can fund growth
    THEN evaluate bootstrapping.

IF the company has a venture-scale opportunity and needs equity
    THEN evaluate seed / venture capital financing.

IF financing is pursued
    THEN define the exact milestone funded by the round.

IF capital is raised
    THEN track use of funds strictly against milestones.

IF growth is repeatable
    THEN evaluate controlled scaling.

IF scaling breaks operations or quality
    THEN stop increasing volume temporarily and fix the bottleneck.

LOOP FOREVER:
    OBSERVE
    IDENTIFY UNCERTAINTY
    FORM HYPOTHESIS
    PRIORITIZE
    EXPERIMENT
    MEASURE
    LEARN
    DECIDE
    BUILD
    SELL
    DELIVER
    RETAIN
    SYSTEMATIZE
    IMPROVE
END
\`\`\``
  },
  {
    id: 'stage-51',
    number: '45',
    title: 'Master "What Should I Do Now?" Decision Tree',
    category: 'Algorithms',
    summary: 'Instant diagnostic lookup for any founder state.',
    content: `Whenever you feel lost, find your exact present situation below:

- **Only an idea?** -> Talk to 15 potential customers about their existing workflows.
- **Problem but no solution?** -> Study existing alternatives and customer workarounds.
- **Solution idea but no evidence?** -> Run validation experiments (landing page, pre-sales, concierge).
- **Prototype?** -> Test it directly with target users in hands-on observation sessions.
- **MVP built?** -> Acquire your first 10 paying customers through founder-led outreach.
- **Users but no payment?** -> Investigate willingness to pay, economic buyers, and pricing model.
- **Paying customers?** -> Measure 30/60/90-day retention and unit economics.
- **Need guidance?** -> Consider mentors, pre-incubators, or university cells.
- **Need labs/equipment?** -> Apply to specialized incubators or research grant programs.
- **Need rapid growth acceleration?** -> Apply to reputable accelerators with proven mentor networks.
- **Need money?** -> First calculate: How much? Why? When? What milestone? Then evaluate: Revenue -> Grants -> Founder Capital -> Angels -> Seed -> VC -> Debt.
- **Need a legal company?** -> Incorporate when contracts, IP assignment, co-founder equity, or fundraising necessitate it.
- **Growing fast?** -> Systematize and write SOPs before scaling headcount.
- **Scaling?** -> Rigorously monitor retention, unit economics, infrastructure, and cash runway.
- **Lost again?**
  1. Find your biggest uncertainty.
  2. Run the cheapest useful experiment.
  3. Use empirical evidence to dictate the next step.`
  },
  {
    id: 'stage-55',
    number: '46',
    title: 'The "Never Get Lost Again" Rule & Closing Principles',
    category: 'Foundations',
    summary: 'The universal empirical operating loop of the entrepreneur.',
    content: `When confused or overwhelmed, do not ask:
*"What do successful startups usually do?"*

Ask the three foundational questions:
1. **"What is the single most important thing I do not know yet?"**
2. **"What is the cheapest credible way to learn it?"**
3. **"What will I do differently depending on the result?"**

Run the loop:
\`\`\`
UNCERTAINTY -> HYPOTHESIS -> EXPERIMENT -> EVIDENCE -> DECISION -> ACTION -> NEW UNCERTAINTY
\`\`\`

There is no single universal startup sequence. Incorporation, pitch decks, accelerators, VC, and MVPs are not the definition of a startup. They are tools.

**The startup itself is the continuous process of turning uncertainty into evidence, and evidence into better decisions.**`
  }
];

const STAGES_LIST = [
  { id: 0, code: '0', title: 'Identify What You Actually Have', question: 'What is our actual reality?', nextAction: 'Honest audit & discovery' },
  { id: 1, code: '1', title: 'Founder & Co-Founder Setup', question: 'Can we execute together?', nextAction: 'Define roles, vesting & IP' },
  { id: 2, code: '2', title: 'Problem Discovery', question: 'Does a severe problem exist?', nextAction: 'Customer interviews & pain mapping' },
  { id: 3, code: '3', title: 'Customer Discovery', question: 'Who experiences it and how do they cope?', nextAction: 'Mom test interviews' },
  { id: 4, code: '4', title: 'Market & Competition', question: 'What existing alternatives are used?', nextAction: 'Competitive matrix & TAM/SAM' },
  { id: 5, code: '5', title: 'Support Program Decision', question: 'What exact help is required?', nextAction: 'Select pre-incubator/incubator/self' },
  { id: 6, code: '6', title: 'Solution & Value Proposition', question: 'What outcome is 10x better?', nextAction: 'Quantified positioning' },
  { id: 7, code: '7', title: 'Validation Experiments', question: 'Will behavior genuinely change?', nextAction: 'Pre-sales / concierge tests' },
  { id: 8, code: '8', title: 'Minimum Viable Product (MVP)', question: 'Can we deliver core value?', nextAction: 'Build single critical workflow' },
  { id: 9, code: '9', title: 'Cold Outreach System', question: 'Can we reach our ICP directly?', nextAction: 'Targeted outreach campaign' },
  { id: 10, code: '10', title: 'First Customers', question: 'Will someone buy & commit?', nextAction: 'Founder sales & pilots' },
  { id: 11, code: '11', title: 'Strategic Partnerships', question: 'Can partners accelerate distribution?', nextAction: 'Pilot partnership agreements' },
  { id: 12, code: '12', title: 'Business Model & Unit Economics', question: 'Can this be profitable?', nextAction: 'LTV, CAC & gross margins' },
  { id: 13, code: '13', title: 'Bootstrapping Decision', question: 'Can revenue fund expansion?', nextAction: 'Runway & cash flow modeling' },
  { id: 14, code: '14', title: 'Angel Investors', question: 'Is early operator capital useful?', nextAction: 'Targeted angel outreach' },
  { id: 15, code: '15', title: 'Venture Capital (VC)', question: 'Is venture-scale financing appropriate?', nextAction: 'Fundraising roadmap' },
  { id: 16, code: '16', title: 'Seed / Pre-Seed Round', question: 'What milestone does capital unlock?', nextAction: 'Seed round execution' },
  { id: 17, code: '17', title: 'Debt & Working Capital', question: 'Can predictable cash flow service debt?', nextAction: 'Debt covenants review' },
  { id: 18, code: '18', title: 'Funding Decision Matrix', question: 'Which of 12 funding types fits?', nextAction: 'Final capital strategy' },
  { id: 19, code: '19', title: 'When to Incorporate', question: 'Is legal protection triggered?', nextAction: 'Jurisdiction research' },
  { id: 20, code: '20', title: 'Company Formation & Governance', question: 'Is the entity fully compliant?', nextAction: 'Banking, tax & legal setup' },
  { id: 21, code: '21', title: 'Intellectual Property (IP)', question: 'Is company IP protected?', nextAction: 'Assignment & trademarks' },
  { id: 22, code: '22', title: 'Website, Brand & Pitch Deck', question: 'Are communications clear?', nextAction: 'Deploy website & 20-slide deck' },
  { id: 23, code: '23', title: 'Repeatable Sales System', question: 'Can we close consistently?', nextAction: 'Sales pipeline & objection playbook' },
  { id: 24, code: '24', title: 'Product Engineering Foundations', question: 'Can software delivery scale reliably?', nextAction: 'CI/CD, testing & monitoring' },
  { id: 25, code: '25', title: 'Security & Privacy Safeguards', question: 'Is data secure & compliant?', nextAction: 'MFA, encryption & policies' },
  { id: 26, code: '26', title: 'Financial Management & Runway', question: 'How much runway remains?', nextAction: 'Monthly finance routine' },
  { id: 27, code: '27', title: 'Hiring & Org Design', question: 'What is the real capacity bottleneck?', nextAction: 'Contractors or role scorecards' },
  { id: 28, code: '28', title: 'Product-Market Evidence', question: 'Are customer cohorts retaining?', nextAction: 'Cohort analysis & exit interviews' },
  { id: 29, code: '29', title: 'Go-To-Market (GTM) Scale', question: 'Can acquisition repeat across channels?', nextAction: 'Scale primary channel' },
  { id: 30, code: '30', title: 'Fundraising Campaign Process', question: 'Are investors moving through funnel?', nextAction: 'Execute 11-step pipeline' },
  { id: 31, code: '31', title: 'Warm Introductions', question: 'Are we leveraging top network nodes?', nextAction: 'Double-opt-in campaigns' },
  { id: 32, code: '32', title: 'Investor Meeting Preparation', question: 'Can we handle all 14 questions?', nextAction: 'Pitch rehearsal & demo drills' },
  { id: 33, code: '33', title: 'The 20-Folder Virtual Data Room', question: 'Is due diligence ready?', nextAction: 'Populate data room' },
  { id: 34, code: '34', title: 'Core Operating Metrics', question: 'Does every metric prompt a decision?', nextAction: 'North Star dashboard' },
  { id: 35, code: '35', title: 'Operations & Standard SOPs', question: 'Can execution repeat without founders?', nextAction: 'Write standard SOPs' },
  { id: 36, code: '36', title: 'The Scaling Decision Gate', question: 'Are all 10 scaling gates cleared?', nextAction: 'Controlled scaling execution' },
  { id: 37, code: '37', title: 'Stuck Troubleshooting Tree', question: 'Which of 6 traps are we stuck in?', nextAction: 'Apply trap antidote' },
  { id: 38, code: '38', title: 'Founder Communication System', question: 'Are 12 core assets standardized?', nextAction: 'Standardize messaging library' },
  { id: 39, code: '39', title: 'Weekly Operating System', question: 'What is the #1 weekly uncertainty?', nextAction: 'Cheapest test design' },
  { id: 40, code: '40', title: 'Monthly Review & Assumptions', question: 'What assumptions are UNKNOWN?', nextAction: 'Categorize & prioritize tests' },
  { id: 41, code: '41', title: 'Founder Decision Log', question: 'Is organizational memory preserved?', nextAction: 'Log strategic decisions' }
];

const MASTER_CHECKLIST = [
  {
    category: 'A. Founder & Team',
    items: [
      { id: 'f_roles', text: 'Founder roles and primary responsibilities documented' },
      { id: 'f_time', text: 'Weekly time commitments and dedication agreed' },
      { id: 'f_equity', text: 'Equity ownership splits discussed and agreed' },
      { id: 'f_vesting', text: '4-year vesting schedule with 1-year cliff established' },
      { id: 'f_ip', text: 'IP assignment to the company signed by all founders' },
      { id: 'f_departure', text: 'Founder departure and equity buyback terms formalized' }
    ]
  },
  {
    category: 'B. Problem & Customer',
    items: [
      { id: 'p_formula', text: 'Problem written using Customer + Situation + Problem + Consequence' },
      { id: 'p_icp', text: 'Narrow initial target customer profile (ICP) defined' },
      { id: 'p_interviews', text: 'At least 15 customer discovery interviews conducted' },
      { id: 'p_alts', text: 'Current alternatives, workarounds, and manual costs mapped' },
      { id: 'p_importance', text: 'Verified that the problem is urgent, costly, or frequent' }
    ]
  },
  {
    category: 'C. Market & Competition',
    items: [
      { id: 'm_direct', text: 'Direct competitors identified and benchmarked' },
      { id: 'm_indirect', text: 'Indirect competitors and substitutes documented' },
      { id: 'm_donothing', text: '"Do Nothing" alternative analyzed' },
      { id: 'm_sizing', text: 'Bottom-up TAM, SAM, and realistic SOM modeled' }
    ]
  },
  {
    category: 'D. Support & Ecosystem',
    items: [
      { id: 's_preinc', text: 'Need for pre-incubation or university cell evaluated' },
      { id: 's_incubator', text: 'Incubator infrastructure requirements assessed' },
      { id: 's_accel', text: 'Accelerator value vs equity dilution evaluated' },
      { id: 's_grants', text: 'Non-dilutive grants and innovation challenges researched' },
      { id: 's_terms', text: 'Program legal terms and restrictions scrutinized' }
    ]
  },
  {
    category: 'E. Validation & Hypotheses',
    items: [
      { id: 'v_risks', text: 'Top 3 riskiest business assumptions listed' },
      { id: 'v_nocode', text: 'Cheapest no-code/manual experiment designed' },
      { id: 'v_tests', text: 'Validation experiments completed with measurable data' },
      { id: 'v_decision', text: 'Explicit PROCEED, ITERATE, PIVOT, or STOP decision taken' }
    ]
  },
  {
    category: 'F. Product & MVP',
    items: [
      { id: 'prd_workflow', text: 'Single critical workflow defined for MVP' },
      { id: 'prd_cut', text: 'Non-essential features deferred to future versions' },
      { id: 'prd_analytics', text: 'Product analytics instrumented for activation event' },
      { id: 'prd_security', text: 'Basic security, data encryption, and backups configured' }
    ]
  },
  {
    category: 'G. Customers & Sales',
    items: [
      { id: 'c_prospects', text: 'Targeted list of 50-100 prospective ICP leads compiled' },
      { id: 'c_outreach', text: 'Personalized cold and warm outreach executed' },
      { id: 'c_salesprocess', text: 'Standard sales demo script and objection playbook ready' },
      { id: 'c_first5', text: 'First 5-10 paying customers acquired' },
      { id: 'c_retention', text: 'Customer retention and usage frequency measured' }
    ]
  },
  {
    category: 'H. Company & Governance',
    items: [
      { id: 'co_timing', text: 'Incorporation triggers evaluated (liability, IP, contracts)' },
      { id: 'co_entity', text: 'Formal legal entity incorporated with registered agent' },
      { id: 'co_bank', text: 'Business bank account opened and isolated from personal funds' },
      { id: 'co_books', text: 'Double-entry accounting system and tax records active' },
      { id: 'co_privacy', text: 'Terms of Service and Privacy Policy compliant with law' }
    ]
  },
  {
    category: 'I. Funding & Capital Strategy',
    items: [
      { id: 'cap_boot', text: 'Bootstrapping feasibility and personal runway verified' },
      { id: 'cap_source', text: 'Target capital source selected from the 12 funding types' },
      { id: 'cap_milestone', text: 'Specific 18-month inflection milestone defined for funds' },
      { id: 'cap_model', text: 'Financial model with monthly burn and runway projections ready' }
    ]
  },
  {
    category: 'J. Scale & Operations',
    items: [
      { id: 'sc_repeatable', text: 'Acquisition and delivery proven repeatable' },
      { id: 'sc_sops', text: 'Core recurring processes documented in SOPs' },
      { id: 'sc_bottleneck', text: 'Real bottleneck identified before hiring new heads' },
      { id: 'sc_gates', text: 'Cleared all 10 scaling readiness questions' }
    ]
  }
];

const FINAL_COMPANY_CHECKLIST = [
  "We know who the target customer is.",
  "We understand the exact problem and its consequences.",
  "We know how customers solve it today and what that costs.",
  "We have empirically tested our major assumptions.",
  "We know what the MVP needs to prove.",
  "We have real behavioral customer evidence (not polite opinions).",
  "We know how customers can be reached repeatedly.",
  "We have an active, disciplined sales process.",
  "We understand why customers buy.",
  "We measure cohort retention and churn.",
  "We understand pricing and willingness to pay.",
  "We understand direct delivery costs (COGS) and gross margin.",
  "We understand cash requirements and monthly burn rate.",
  "We know whether external funding is truly needed.",
  "We have evaluated bootstrapping.",
  "We have evaluated grants and non-dilutive capital.",
  "We have evaluated incubators and accelerators based on bottlenecks.",
  "We have considered angel financing with clear milestones.",
  "We have considered VC only if the model supports venture scale.",
  "We understand all governance and dilution terms before signing.",
  "Founder ownership, vesting, and roles are legally documented.",
  "IP ownership is assigned to the company in writing.",
  "Legal corporate structure is registered in proper jurisdiction.",
  "Tax, accounting, and reporting obligations are maintained.",
  "Required regulatory licenses and permits are secured.",
  "Standard customer contracts and privacy terms are in place.",
  "Security safeguards (MFA, encryption, least privilege) are active.",
  "Engineering delivery is reproducible with automated CI/CD.",
  "Production monitoring, alerting, and backups exist and are tested.",
  "We know our single biggest current risk.",
  "We know the next experiment to run and what result will change direction."
];


/**
 * tree-data.js
 * Master graph coordinates, nodes, and branching logic
 * for the Infinite Decision Canvas plane.
 */

const DECISION_TREE_NODES = [
  {
    id: 'n_start',
    stageId: 0,
    x: 450,
    y: 60,
    width: 280,
    type: 'start',
    title: 'START: Idea / Problem',
    subtitle: 'Where every venture originates',
    description: 'Diagnose what you actually have before taking irreversible steps. Do not write code or incorporate yet.',
    rule: 'Do the next thing that removes the biggest uncertainty.',
    action: 'Audit current status against the 10 starting situations.'
  },
  {
    id: 'n_founder_setup',
    stageId: 1,
    x: 450,
    y: 200,
    width: 280,
    type: 'process',
    title: 'Founder & Co-Founder Setup',
    subtitle: 'Capabilities & Roles',
    description: 'Identify capability gaps. If permanent, evaluate co-founders. Test working relationship before equity lock. Vesting (4 yrs, 1 yr cliff) & IP assignment.',
    rule: 'Never give away equity for skills obtainable through contractors or advisors.',
    action: 'Draft co-founder memorandum with vesting & IP assignment.'
  },
  {
    id: 'n_problem_def',
    stageId: 2,
    x: 450,
    y: 350,
    width: 280,
    type: 'process',
    title: 'Define Customer & Problem',
    subtitle: 'Problem Discovery',
    description: 'Write: For [customer], when [situation occurs], [problem] causes [consequence]. Ensure the consequence is urgent, frequent, or costly.',
    rule: 'If customer is vague, narrow customer. If problem is vague, interview users.',
    action: 'Complete the 4-part problem definition formula.'
  },
  {
    id: 'n_gate_real_problem',
    stageId: 2,
    x: 470,
    y: 500,
    width: 240,
    type: 'decision',
    title: 'Is This a Real Problem?',
    subtitle: 'Decision Gate #1',
    description: 'Do prospective customers already spend time, energy, or money trying to solve or work around this issue?',
    yesTarget: 'n_cust_discovery',
    noTarget: 'n_stop_change_prob'
  },
  {
    id: 'n_stop_change_prob',
    stageId: 2,
    x: 820,
    y: 500,
    width: 260,
    type: 'stop',
    title: 'STOP / PIVOT: Change Problem',
    subtitle: 'Refine Segment or Problem',
    description: 'If people do not care enough to change behavior or spend budget, building a solution is futile. Pivot to a different segment or acute pain.',
    rule: 'Do not attempt to persuade people to care about a problem they do not have.',
    action: 'Return to Stage 2 with a new customer segment or different workflow.'
  },
  {
    id: 'n_cust_discovery',
    stageId: 3,
    x: 450,
    y: 670,
    width: 280,
    type: 'process',
    title: 'Customer Discovery Interviews',
    subtitle: 'Mom Test Principles',
    description: 'Conduct 15-20 interviews asking about past behavior: "What did you do the last time this happened?" Avoid hypothetical questions like "Would you buy this?"',
    rule: 'Opinions are worthless. Commitment of time, data, or money is truth.',
    action: 'Run interviews and rank signals along the Customer Evidence Ladder.'
  },
  {
    id: 'n_market_comp',
    stageId: 4,
    x: 450,
    y: 820,
    width: 280,
    type: 'process',
    title: 'Market & Competition Mapping',
    subtitle: 'Alternatives & Switching Costs',
    description: 'Map direct, indirect, manual (Excel/pen), and "do nothing" options. Calculate bottom-up TAM, SAM, and realistic SOM.',
    rule: 'Your primary competitor is almost always the status quo / "do nothing".',
    action: 'Construct competitive landscape matrix with switching barriers.'
  },
  {
    id: 'n_support_choice',
    stageId: 5,
    x: 100,
    y: 820,
    width: 280,
    type: 'support',
    title: 'Support Path Evaluation',
    subtitle: 'Pre-Incubator / Incubator / Grant',
    description: 'Match support program to your actual bottleneck: Need labs/workspace? Incubator. Need early mentoring? Pre-incubator. Research/deep-tech? Grants.',
    rule: 'Never join a program for prestige if it distracts from talking to customers.',
    action: 'Audit whether your current constraint requires structured support.'
  },
  {
    id: 'n_gate_meaningful_pain',
    stageId: 3,
    x: 470,
    y: 970,
    width: 240,
    type: 'decision',
    title: 'Evidence of Meaningful Pain?',
    subtitle: 'Decision Gate #2',
    description: 'Did discovery reveal deep frustration, active budget, or critical time loss that demands a better alternative?',
    yesTarget: 'n_solution_valprop',
    noTarget: 'n_stop_change_prob'
  },
  {
    id: 'n_solution_valprop',
    stageId: 6,
    x: 450,
    y: 1140,
    width: 280,
    type: 'process',
    title: 'Solution & Value Proposition',
    subtitle: '10x Measurable Outcome',
    description: 'Define: "For [customer], we help them [outcome] by [solution], unlike [alternative], because [differentiation]."',
    rule: 'Focus on measurable outcomes: 5x faster, 80% cheaper, or zero risk.',
    action: 'Formulate quantifiable value proposition statement.'
  },
  {
    id: 'n_validation_tests',
    stageId: 7,
    x: 450,
    y: 1290,
    width: 280,
    type: 'process',
    title: 'Validation Experiments',
    subtitle: 'Test Before Code',
    description: 'Sequence: Interview -> Prototype -> Landing Page -> Concierge Service -> Pre-Sale -> Paid Pilot. Test the single riskiest assumption first.',
    rule: 'If a hypothesis can be tested without writing code, test without code.',
    action: 'Run cheapest experiment to test willingness to adopt/pay.'
  },
  {
    id: 'n_gate_adopt_pay',
    stageId: 7,
    x: 470,
    y: 1440,
    width: 240,
    type: 'decision',
    title: 'Will Users Commit / Pay?',
    subtitle: 'Decision Gate #3',
    description: 'Did prospective users pre-order, place deposits, sign Letters of Intent (LOIs), or commit hours of active testing time?',
    yesTarget: 'n_build_mvp',
    noTarget: 'n_pivot_value_prop'
  },
  {
    id: 'n_pivot_value_prop',
    stageId: 7,
    x: 820,
    y: 1440,
    width: 260,
    type: 'stop',
    title: 'PIVOT / ITERATE: Reframe Offer',
    subtitle: 'Assumption Failed',
    description: 'If people say "sounds interesting" but will not commit time or money, the value proposition or packaging is insufficient.',
    rule: 'Polite compliments indicate a lack of genuine urgency.',
    action: 'Re-interview respondents to uncover the true barrier to commitment.'
  },
  {
    id: 'n_build_mvp',
    stageId: 8,
    x: 450,
    y: 1610,
    width: 280,
    type: 'process',
    title: 'Build Smallest Useful MVP',
    subtitle: 'Core Workflow Only',
    description: 'Build only the single workflow that proves value. Cut all auxiliary features, profile customizations, and secondary settings.',
    rule: 'The MVP must test a critical assumption, not impress with feature count.',
    action: 'Ship bare minimum product to the first 5 eager pilot users.'
  },
  {
    id: 'n_gate_mvp_value',
    stageId: 8,
    x: 470,
    y: 1760,
    width: 240,
    type: 'decision',
    title: 'MVP Creates Real Value?',
    subtitle: 'Decision Gate #4',
    description: 'Do pilot users actually complete the core workflow and experience the promised measurable outcome?',
    yesTarget: 'n_first_customers',
    noTarget: 'n_iterate_mvp'
  },
  {
    id: 'n_iterate_mvp',
    stageId: 8,
    x: 820,
    y: 1760,
    width: 260,
    type: 'process',
    title: 'ITERATE: Fix Core Product UX',
    subtitle: 'Remove Friction',
    description: 'Analyze session logs and exit interviews. Is onboarding too confusing? Is the core outcome failing technically? Strip down and rebuild the core path.',
    rule: 'Do not add new features to fix a product whose core workflow does not work.',
    action: 'Watch 5 users attempt onboarding live without speaking.'
  },
  {
    id: 'n_first_customers',
    stageId: 10,
    x: 450,
    y: 1930,
    width: 280,
    type: 'process',
    title: 'Acquire First Paying Customers',
    subtitle: 'Direct Founder Sales',
    description: 'Leverage warm network, targeted cold outreach (50-100 ICP leads), community participation, and direct founder demos to close first 5-10 accounts.',
    rule: 'Do things that do not scale at the start. Personally onboard every customer.',
    action: 'Conduct founder demos and convert pilots into paid contracts.'
  },
  {
    id: 'n_outreach_system',
    stageId: 9,
    x: 100,
    y: 1930,
    width: 280,
    type: 'process',
    title: 'Targeted Outreach Engine',
    subtitle: 'Outbound Discovery & Pilots',
    description: 'Build curated ICP list -> Personalize around specific pain triggers -> Multi-touch cadence (days 1, 4, 8, 14) -> Book discovery calls.',
    rule: 'Never send mass spam blasts. Send 50 highly personalized messages.',
    action: 'Draft and launch 4-touch outbound sequence.'
  },
  {
    id: 'n_gate_retention',
    stageId: 28,
    x: 470,
    y: 2090,
    width: 240,
    type: 'decision',
    title: 'Do Customers Retain?',
    subtitle: 'Decision Gate #5',
    description: 'Do paying customers stay active, renew subscriptions, or make repeat orders over 30, 60, and 90 days?',
    yesTarget: 'n_economics_model',
    noTarget: 'n_fix_retention'
  },
  {
    id: 'n_fix_retention',
    stageId: 28,
    x: 820,
    y: 2090,
    width: 260,
    type: 'stop',
    title: 'STOP: Churn Crisis',
    subtitle: 'Leaky Bucket',
    description: 'Acquiring more users while retention is broken burns money and reputation. Immediately halt acquisition marketing and diagnose churn.',
    rule: 'Never pour more water into a leaky bucket.',
    action: 'Call every churned user personally to identify why they stopped.'
  },
  {
    id: 'n_economics_model',
    stageId: 12,
    x: 450,
    y: 2260,
    width: 280,
    type: 'process',
    title: 'Business Model & Unit Economics',
    subtitle: 'LTV, CAC, Gross Margins',
    description: 'Answer the 10 business model questions. Calculate CAC, Gross Margin (>65% for software), and LTV. Ensure LTV/CAC > 3x and Payback < 12 months.',
    rule: 'A business cannot make up for negative unit economics with volume.',
    action: 'Build bottom-up contribution margin sheet.'
  },
  {
    id: 'n_gate_repeatable_gtm',
    stageId: 29,
    x: 470,
    y: 2420,
    width: 240,
    type: 'decision',
    title: 'Can Acquisition Repeat?',
    subtitle: 'Decision Gate #6',
    description: 'Can you acquire new customers predictably at acceptable CAC through at least 1 proven scalable channel?',
    yesTarget: 'n_capital_path',
    noTarget: 'n_iterate_channels'
  },
  {
    id: 'n_iterate_channels',
    stageId: 29,
    x: 820,
    y: 2420,
    width: 260,
    type: 'process',
    title: 'Test New GTM Channels',
    subtitle: 'Channel Discovery',
    description: 'Test one channel at a time: SEO, partner co-marketing, outbound sales, community, paid search, or product referrals. Measure CAC by channel.',
    rule: 'Master one dominant acquisition channel before spreading resources thin.',
    action: 'Run a 30-day single-channel acquisition sprint.'
  },
  {
    id: 'n_capital_path',
    stageId: 18,
    x: 450,
    y: 2590,
    width: 280,
    type: 'support',
    title: 'Capital & Financing Strategy',
    subtitle: 'Bootstrap vs Angels vs VC',
    description: 'Evaluate the 12 funding sources: If revenue can fund expansion, bootstrap. If venture-scale with high growth speed, raise Seed/VC with clear 18-month milestone.',
    rule: 'Never raise capital without knowing the exact value inflection milestone it unlocks.',
    action: 'Define required capital and select primary funding source.'
  },
  {
    id: 'n_incorporation_legal',
    stageId: 20,
    x: 450,
    y: 2750,
    width: 280,
    type: 'process',
    title: 'Company Formation & Legal Setup',
    subtitle: 'Entity, IP, Banking, Tax',
    description: 'Incorporate (e.g. Delaware C-Corp), formalize founder vesting, sign full IP assignment agreements, open business banking, configure accounting & compliance.',
    rule: 'Never commingle personal and corporate finances.',
    action: 'Execute formal incorporation and corporate governance.'
  },
  {
    id: 'n_eng_foundations',
    stageId: 24,
    x: 100,
    y: 2750,
    width: 280,
    type: 'process',
    title: 'Engineering & DevOps Foundations',
    subtitle: 'CI/CD, Monitoring, Backups',
    description: 'Set up automated test suites, CI/CD deployment pipeline, structured logging, synthetic uptime alerts, daily database backups, and MFA security.',
    rule: 'An unverified database backup is not a backup.',
    action: 'Run disaster recovery restore drill and lock main Git branch.'
  },
  {
    id: 'n_gate_scale_ready',
    stageId: 36,
    x: 470,
    y: 2920,
    width: 240,
    type: 'decision',
    title: 'Is Scaling Justified?',
    subtitle: 'Decision Gate #7',
    description: 'Are all 10 scaling readiness questions satisfied (repeatable acquisition, stable delivery, positive unit economics, 6+ month runway)?',
    yesTarget: 'n_hire_systematize',
    noTarget: 'n_stop_premature_scale'
  },
  {
    id: 'n_stop_premature_scale',
    stageId: 36,
    x: 820,
    y: 2920,
    width: 260,
    type: 'stop',
    title: 'STOP: Premature Scaling',
    subtitle: 'Consolidate Systems',
    description: 'Scaling an unstable, leaky product with high burn is the primary cause of startup collapse. Fix unit economics and operations first.',
    rule: 'Premature scaling magnifies operational flaws 100-fold.',
    action: 'Consolidate operations, document SOPs, and maintain cash runway.'
  },
  {
    id: 'n_hire_systematize',
    stageId: 35,
    x: 450,
    y: 3090,
    width: 280,
    type: 'process',
    title: 'Hire, Automate & Systematize',
    subtitle: 'Standard Operating Procedures',
    description: 'Document standard SOPs for sales, support, and release. Hire only for strategic capacity bottlenecks. Build 30-60-90 day scorecards.',
    rule: 'Write the process before hiring someone to execute it.',
    action: 'Draft core operating procedures and hire for proven bottlenecks.'
  },
  {
    id: 'n_sustainable_company',
    stageId: 41,
    x: 450,
    y: 3260,
    width: 280,
    type: 'success',
    title: 'SUSTAINABLE COMPANY',
    subtitle: 'Continuous Operating Loop',
    description: 'Run weekly founder reviews and monthly assumption audits. Maintain institutional memory via Decision Logs. Keep testing what you do not know.',
    rule: 'The company is never finished: Observe -> Hypothesize -> Experiment -> Decide -> Improve.',
    action: 'Operate the continuous founder rhythm.'
  }
];

const DECISION_TREE_EDGES = [
  { from: 'n_start', to: 'n_founder_setup', label: 'Evaluate team' },
  { from: 'n_founder_setup', to: 'n_problem_def', label: 'Define pain' },
  { from: 'n_problem_def', to: 'n_gate_real_problem', label: 'Verify' },
  { from: 'n_gate_real_problem', to: 'n_cust_discovery', label: 'YES: Real pain' },
  { from: 'n_gate_real_problem', to: 'n_stop_change_prob', label: 'NO: Trivial / ignored' },
  { from: 'n_stop_change_prob', to: 'n_problem_def', label: 'New hypothesis' },
  { from: 'n_cust_discovery', to: 'n_market_comp', label: 'Analyze alts' },
  { from: 'n_cust_discovery', to: 'n_support_choice', label: 'Evaluate help' },
  { from: 'n_market_comp', to: 'n_gate_meaningful_pain', label: 'Validate' },
  { from: 'n_support_choice', to: 'n_solution_valprop', label: 'Guided path' },
  { from: 'n_gate_meaningful_pain', to: 'n_solution_valprop', label: 'YES: Severe pain' },
  { from: 'n_gate_meaningful_pain', to: 'n_stop_change_prob', label: 'NO: Weak signal' },
  { from: 'n_solution_valprop', to: 'n_validation_tests', label: 'Design tests' },
  { from: 'n_validation_tests', to: 'n_gate_adopt_pay', label: 'Measure commitment' },
  { from: 'n_gate_adopt_pay', to: 'n_build_mvp', label: 'YES: Strong commitment' },
  { from: 'n_gate_adopt_pay', to: 'n_pivot_value_prop', label: 'NO: Polite interest only' },
  { from: 'n_pivot_value_prop', to: 'n_solution_valprop', label: 'Reframe value' },
  { from: 'n_build_mvp', to: 'n_gate_mvp_value', label: 'Ship to 5 pilots' },
  { from: 'n_gate_mvp_value', to: 'n_first_customers', label: 'YES: Solves pain' },
  { from: 'n_gate_mvp_value', to: 'n_iterate_mvp', label: 'NO: Friction / failure' },
  { from: 'n_iterate_mvp', to: 'n_build_mvp', label: 'Refactor workflow' },
  { from: 'n_outreach_system', to: 'n_first_customers', label: 'Channel pipeline' },
  { from: 'n_first_customers', to: 'n_gate_retention', label: 'Measure 90d usage' },
  { from: 'n_gate_retention', to: 'n_economics_model', label: 'YES: Retains well' },
  { from: 'n_gate_retention', to: 'n_fix_retention', label: 'NO: Users churn' },
  { from: 'n_fix_retention', to: 'n_build_mvp', label: 'Fix core value loop' },
  { from: 'n_economics_model', to: 'n_gate_repeatable_gtm', label: 'Test scale' },
  { from: 'n_gate_repeatable_gtm', to: 'n_capital_path', label: 'YES: Repeatable' },
  { from: 'n_gate_repeatable_gtm', to: 'n_iterate_channels', label: 'NO: Unpredictable' },
  { from: 'n_iterate_channels', to: 'n_outreach_system', label: 'Refine channel' },
  { from: 'n_capital_path', to: 'n_incorporation_legal', label: 'Formalize' },
  { from: 'n_incorporation_legal', to: 'n_eng_foundations', label: 'Infra setup' },
  { from: 'n_incorporation_legal', to: 'n_gate_scale_ready', label: 'Assess gates' },
  { from: 'n_eng_foundations', to: 'n_gate_scale_ready', label: 'Production ready' },
  { from: 'n_gate_scale_ready', to: 'n_hire_systematize', label: 'YES: All gates pass' },
  { from: 'n_gate_scale_ready', to: 'n_stop_premature_scale', label: 'NO: Leaky / fragile' },
  { from: 'n_stop_premature_scale', to: 'n_economics_model', label: 'Fix economics' },
  { from: 'n_hire_systematize', to: 'n_sustainable_company', label: 'Continuous loop' }
];


/**
 * app.js
 * Startup From Zero — Master Founder Operating Platform
 * Interactive Decision Tree Canvas, Diagnostic Engine, Tracker & Milestones.
 */




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
