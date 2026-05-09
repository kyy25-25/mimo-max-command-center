# MiMo Max Command Center

A Xiaomi MiMo Orbit **Max-level candidate project**: a five-agent command center that converts an ambitious goal into an audited execution package, proof bundle, and form-ready submission narrative.

This project was built after an earlier MiMo submission received Pro. The goal here is to demonstrate a stronger Max-worthy use case: not a simple chatbot, but a repeatable multi-agent workflow system with planning, execution, audit, and evidence packaging.

## What it does

MiMo Max Command Center orchestrates five specialist agents:

1. **Signal Scout** — turns messy user or market signals into structured opportunities.
2. **Strategy Planner** — builds task graphs, dependencies, acceptance tests, and risk gates.
3. **Execution Builder** — generates implementation plans, artifacts, code prompts, and launch packs.
4. **Evidence Auditor** — checks hallucination risk, privacy exposure, evidence quality, and readiness.
5. **Submission Packager** — creates the final repo/readme/form-ready Max application narrative.

## Why this is Max-level

- It demonstrates a complete multi-agent workflow, not a single prompt wrapper.
- It has a real UI dashboard plus a CLI proof run that emits machine-readable evidence.
- It includes an audit layer for quality, privacy, hallucination risk, and proof strength.
- It is designed for repeated high-volume AI usage by founders, creators, developers, and operators.
- It has a clear Xiaomi MiMo API integration path through a backend adapter/model-routing layer.
- It produces submission-ready artifacts: docs, proof logs, screenshots, and impact narrative.

## Run locally

```bash
npm install
npm run dev
```

## Build and generate proof

```bash
npm run proof
```

This will:

1. Build the Vite app.
2. Run the simulated MiMo agent workflow.
3. Write `data/latest-proof-report.json` as evidence.

## Files reviewers should inspect

- `src/App.jsx` — multi-agent command center dashboard.
- `server/mimo-agent-command-center.js` — CLI proof workflow and evidence generator.
- `data/latest-proof-report.json` — generated proof report after running `npm run proof`.
- `docs/MAX_APPLICATION.md` — form-ready Xiaomi MiMo Orbit Max submission text.
- `docs/ARCHITECTURE.md` — MiMo API adapter and production architecture path.
- `examples/sample-mission.md` — example workflow output.

## MiMo integration path

The current demo runs in deterministic simulation mode so reviewers can inspect it immediately. Production integration would connect the backend adapter to Xiaomi MiMo models for:

- signal extraction,
- task graph generation,
- artifact drafting,
- audit/review passes,
- final submission packaging.

The UI and CLI are intentionally structured around reusable agent roles so the simulated calls can be replaced with real MiMo API calls without changing the product experience.
