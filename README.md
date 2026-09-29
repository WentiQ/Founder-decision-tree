# Startup From Zero — The Complete Founder Decision Tree

> **"The central rule: Do the next thing that removes the biggest uncertainty."**

A complete, professional, aesthetic founder operating platform and interactive decision tree based on empirical customer validation, hypothesis testing, and the master startup decision tree.

---

## ✦ Aesthetic & Design System

- **Monochrome Palette**: Pure blacks (`#000000`, `#09090b`), off-blacks (`#121215`, `#18181d`), charcoal neutrals (`#27272a`, `#3f3f46`, `#52525b`, `#71717a`, `#a1a1aa`), and crisp whites (`#ffffff`).
- **Uncongested, High-Contrast Layout**: Designed with generous breathing room, clean micro-borders, elegant typography, and a modern Swiss/Obsidian design language.
- **Dual Themes**: Includes both **Studio Dark (Monochrome Obsidian)** and **Paper Light (Monochrome White)** modes.

---

## ✦ Core Features & Modules

### 1. Next Action Engine ("What Should I Do Now?")
- Dynamic interactive diagnostic questionnaire based on Sections 3, 45, 51, and 55.
- Asks founders about their current reality and bottlenecks.
- Generates an explicit verdict command: **`PROCEED`**, **`ITERATE`**, **`PIVOT`**, or **`STOP`**.
- Formulates the exact **Cheapest Useful Experiment** to run immediately.
- 1-click actions: "Set as My Current Focus", "Add to Milestones", and "View on Decision Canvas".

### 2. Infinite Decision Canvas (Interactive Pan & Zoom Plane)
- A 2D infinite workspace featuring the complete startup decision graph:
  - From **Start (Idea/Problem)** &rarr; **Customer Discovery** &rarr; **Validation** &rarr; **MVP** &rarr; **First Customers** &rarr; **Retention** &rarr; **Unit Economics** &rarr; **Capital Allocation** &rarr; **Controlled Scaling** &rarr; **Sustainable Company**.
  - Interactive decision gates (diamonds) with YES/NO branch logic and Stop/Pivot escape hatches.
  - Interactive panning (drag canvas) and smooth mouse-wheel zooming (25% to 200%).
  - Minimap viewport indicator in the corner.
  - Floating controls toolbar: Zoom In, Zoom Out, 1:1 Reset, Fit View, and Center on Current Focus.
  - Clicking any node opens a deep slide-over drawer with the governing rule, immediate next action, gate pass/fail test, and handbook cross-link.

### 3. Execution & Milestones Tracker
- **Current Active Focus**: Prominently displays the stage the founder is actively working on with 1-click "Mark Stage Complete & Proceed".
- **Master Stages Progress**: Real-time progress bar across all 23 startup stages (#0 to #22).
- **Custom Milestone Planner**: Add custom target milestones with due dates and stage associations.
- **Master Founder Checklist**: 10 categorized accordions (A. Founder, B. Problem, C. Market, D. Support, E. Validation, F. Product, G. Customers, H. Company, I. Funding, J. Scale) with live percentage counters.
- **Section 57 Final Checklist**: 31-point canonical verification before calling it a company.
- Automatic persistence in `localStorage`.

### 4. Complete Handbook & Algorithms Explorer
- Directory of all 58 sections and stages from the original LaTeX guide.
- Live full-text search with instant filtering (search for "CAC", "SAFE", "outreach", "data room", "vesting", etc.).
- Complete mathematical formulas (CAC, Gross Margin, LTV, Runway, Activation, Cohort Retention) and formatted tables (Funding Decision Matrix, Sales Troubleshooting, Investor Research).
- The Master Founder IF-THEN Algorithm formatted as an executable pseudocode loop.

### 5. Founder Operational Cadence & Memory
- **Weekly Operating Review (Section 39)**: 5 pillars (Customers, Product, Finance, Team, Strategy) + The 2 Golden Questions ("What is the #1 uncertainty?" & "What is the cheapest experiment?").
- **Founder Decision Log (Section 41)**: Systematic log of major strategic decisions (Date, Decision, Owner, Evidence, Assumptions, Expected result, Review date, Status) to eliminate organizational amnesia.

### 6. Zero-Friction Portability
- **JSON Backup Export & Import**: Download your entire state as a JSON file or restore it anytime.
- **Universal Compatibility**: Works both offline by double-clicking `index.html` (via `bundle.js`) and through any web server.

---

## ✦ Getting Started

### Option 1: Instant 1-Click Launch (Windows)
Double-click `start.bat` in the project root. It will start the local server and open your default browser to `http://localhost:3000`.

### Option 2: Run via Node
```bash
npm start
# Server runs at http://localhost:3000
```

### Option 3: Direct Browser File Open
Double-click `index.html` directly to open it in Chrome, Edge, Safari, or Firefox without any server required.

---

## ✦ Project Structure

```
Startup Guide/
├── index.html          # Clean semantic UI shell and view panels
├── style.css           # Monochrome design system, infinite canvas, and typography
├── bundle.js           # Standalone universal distribution bundle
├── app.js              # State manager, canvas renderer, diagnostic engine
├── guide-data.js       # Complete structured knowledge base (58 sections, 23 stages)
├── tree-data.js        # Graph layout coordinates, decision nodes, and edges
├── server.js           # Zero-dependency local Node.js development server
├── package.json        # NPM build and start scripts
├── start.bat           # 1-click Windows batch launcher
└── README.md           # Documentation
```
