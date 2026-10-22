# Context Isolation

**Problem:** irrelevant context raises cost and can confuse decisions or expose unnecessary data.

**Mechanism:** give each task or worker only relevant source excerpts, constraints and interfaces; provide verified handoffs when context changes.

**Use:** large repositories, independent workstreams, multi-session work. **Avoid:** isolating away essential cross-cutting requirements.

**Contract:** context inclusion rules, source references, required invariants, refresh policy.

**Failure modes:** missing dependencies, stale summaries, duplicated discovery, loss of security constraints.

**Example:** UI worker sees component contract and relevant files, not unrelated infrastructure logs.

**Verification:** check completion and rework rate against a full-context baseline.
