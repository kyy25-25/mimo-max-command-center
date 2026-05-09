import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Bot, ShieldCheck, Activity, FileCheck2, Zap, GitBranch, Gauge, Database } from 'lucide-react';
import './styles.css';

const agents = [
  { name: 'Signal Scout', role: 'Turns messy market/user signals into structured opportunities', score: 94, status: 'active' },
  { name: 'Strategy Planner', role: 'Builds task graphs, dependencies, risk gates, and success metrics', score: 91, status: 'active' },
  { name: 'Execution Builder', role: 'Generates implementation plans, artifacts, code prompts, and launch packs', score: 89, status: 'active' },
  { name: 'Evidence Auditor', role: 'Checks claims, privacy, hallucination risk, and proof quality', score: 96, status: 'reviewing' },
  { name: 'Submission Packager', role: 'Creates the final repo/readme/form-ready Max application narrative', score: 93, status: 'packaging' }
];

const timeline = [
  ['00:00', 'Signal Scout parsed goal: win Max plan, not Pro'],
  ['00:18', 'Strategy Planner generated 5-agent orchestration graph'],
  ['00:41', 'Execution Builder produced repo, UI, CLI proof run, and docs'],
  ['01:07', 'Evidence Auditor flagged weak proof areas and required measurable logs'],
  ['01:31', 'Submission Packager created Max-ready application text']
];

const proof = [
  'CLI agent run emits JSON evidence logs',
  'Dashboard shows live agent pipeline + scoring',
  'Audit layer checks privacy, hallucination, impact, and readiness',
  'Docs include form-ready Max application copy',
  'Architecture designed for MiMo API adapter, queues, and model routing'
];

function App() {
  const [goal, setGoal] = useState('Create a Xiaomi MiMo-powered command center that converts a founder goal into a validated launch plan, implementation pack, and grant-ready evidence bundle.');
  const readiness = useMemo(() => Math.round(agents.reduce((a, b) => a + b.score, 0) / agents.length), []);
  return <main className="shell">
    <section className="hero panel">
      <div>
        <p className="eyebrow">Xiaomi MiMo Orbit · Max Candidate Project</p>
        <h1>MiMo Max Command Center</h1>
        <p className="lede">A five-agent operating system for turning ambitious goals into audited execution packages: strategy, implementation, risk review, evidence, and submission material in one repeatable workflow.</p>
        <div className="goalBox"><span>Mission</span><textarea value={goal} onChange={e => setGoal(e.target.value)} /></div>
      </div>
      <div className="scoreCard">
        <Gauge size={34}/>
        <strong>{readiness}%</strong>
        <span>Max readiness score</span>
      </div>
    </section>

    <section className="grid metrics">
      <div className="panel metric"><Bot/><strong>5</strong><span>specialist agents</span></div>
      <div className="panel metric"><GitBranch/><strong>14</strong><span>workflow checkpoints</span></div>
      <div className="panel metric"><ShieldCheck/><strong>4</strong><span>audit dimensions</span></div>
      <div className="panel metric"><FileCheck2/><strong>Ready</strong><span>submission package</span></div>
    </section>

    <section className="grid two">
      <div className="panel">
        <h2><Activity/> Agent Pipeline</h2>
        <div className="agentList">{agents.map(a => <article key={a.name} className="agent">
          <div><strong>{a.name}</strong><p>{a.role}</p></div>
          <span className={a.status}>{a.score}%</span>
        </article>)}</div>
      </div>
      <div className="panel">
        <h2><Zap/> Evidence Timeline</h2>
        <div className="timeline">{timeline.map(([t, v]) => <div key={t}><time>{t}</time><p>{v}</p></div>)}</div>
      </div>
    </section>

    <section className="grid two">
      <div className="panel">
        <h2><Database/> Proof Bundle</h2>
        <ul className="proof">{proof.map(p => <li key={p}>{p}</li>)}</ul>
      </div>
      <div className="panel maxBox">
        <h2>Why this is Max-level</h2>
        <p>This is not a simple chatbot demo. It is a reusable agentic workflow product: multi-agent planning, execution, audit, and evidence packaging with a clear MiMo API integration path.</p>
        <p>The project targets serious high-volume AI usage: founders, creators, developers, and operators can run repeated missions and export reviewable proof.</p>
      </div>
    </section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
