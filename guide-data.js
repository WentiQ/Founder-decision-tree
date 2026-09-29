/**
 * guide-data.js
 * Comprehensive structured knowledge base derived from:
 * "STARTUP FROM ZERO -> SUCCESSFUL COMPANY: THE COMPLETE FOUNDER DECISION TREE"
 */

export const GUIDE_SECTIONS = [
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

export const STAGES_LIST = [
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

export const MASTER_CHECKLIST = [
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

export const FINAL_COMPANY_CHECKLIST = [
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
