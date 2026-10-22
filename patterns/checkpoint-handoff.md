# Checkpoint & Handoff

**Problem:** work may outlive a session or context window.

**Mechanism:** save verified state, decisions and next steps; pass relevant context forward.

**Use:** multi-session tasks or agent transitions. **Avoid:** short completed tasks.

**Benefits:** recoverability and less rediscovery.

**Risks:** stale or fabricated summaries, missing blockers, secret leakage.

**Example:** audit checkpoint with examined files, verified findings, remaining work and command results.

**Minimum:** timestamp, objective, verified completion, decisions, artifacts, blockers, next action and evidence. Never store secrets.
