# Architecture

## Overview

MiMo Max Command Center is structured as an agentic workflow product with a replaceable model adapter.

```text
User Goal
  -> Signal Scout
  -> Strategy Planner
  -> Execution Builder
  -> Evidence Auditor
  -> Submission Packager
  -> Proof Bundle + Dashboard + JSON Report
```

## Agent responsibilities

| Agent | Responsibility | MiMo model usage path |
| --- | --- | --- |
| Signal Scout | Extract goals, constraints, audience, and opportunity signals | classification + summarization |
| Strategy Planner | Generate milestones, dependencies, risk gates, and acceptance tests | planning + reasoning |
| Execution Builder | Produce implementation tasks, code prompts, content drafts, and launch assets | generation |
| Evidence Auditor | Score privacy, hallucination risk, evidence quality, and readiness | critique + verification |
| Submission Packager | Produce repo docs, proof narrative, and form-ready application copy | synthesis + rewriting |

## Demo mode

The current repository runs in deterministic simulation mode. This keeps the review experience simple: anyone can clone the repo and run `npm run proof` without API keys.

## Production MiMo adapter

A production adapter would expose an interface like:

```js
async function runMiMoAgent({ agentRole, prompt, context, schema }) {
  // call Xiaomi MiMo model endpoint
  // validate response against schema
  // return structured agent output
}
```

Each agent can then swap from deterministic demo output to live MiMo model output while keeping the dashboard and proof format the same.

## Proof format

`data/latest-proof-report.json` includes:

- run id,
- timestamp,
- user goal,
- agent outputs,
- confidence scores,
- audit result,
- next steps.

This gives reviewers concrete evidence that the workflow ran and shows how the system could be extended for real user missions.
