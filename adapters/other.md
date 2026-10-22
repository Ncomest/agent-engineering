# Generic adapter: OpenCode, custom agents and chat-only models

Do not infer capabilities from the platform name. Use a capability-first checklist.

## 1. Inventory
- Can the agent read local files or remote URLs? Test with a known document.
- Can it invoke tools or run commands? Inspect actual schemas and permissions.
- Can it write persistent configuration? Identify storage and approval boundaries.
- Does it support independent delegation, parallel execution or only sequential messages?
- Is any memory, retrieval, caching or usage accounting observable?

Record each as **verified**, **unavailable** or **unknown**.

## 2. Load minimal context
Start with [AGENT_BOOTSTRAP.md](../AGENT_BOOTSTRAP.md). Add [architecture guidance](../knowledge/architecture-decision-guide.md) and only the needed [patterns](../patterns/README.md). For chat-only systems, paste selected text; do not pretend that a linked repository was read.

## 3. Choose architecture
Prefer a direct response or deterministic workflow when possible. Otherwise start with one agent. For long tasks use explicit milestones and checkpoint summaries. Use multiple workers only when the runtime actually supports them and integration overhead is justified.

## 4. Tool and safety contract
Define permitted tools, read/write scope, input validation, retries, stop conditions, approval requirements and treatment of untrusted retrieved content. For external side effects, request explicit approval as appropriate.

## 5. Evaluate
Define acceptance criteria before execution. Log observed correctness, elapsed time, retries, errors and token counts if exposed. Mark missing measurements as unknown.

## Copy-ready setup request
"Inventory the tools, permissions, persistence and delegation available in this environment. Read or request AGENT_BOOTSTRAP.md and only the relevant Agent Engineering reference pages. Recommend the simplest adequate workflow with fallback options, verification and resource limits. Distinguish verified facts from assumptions."
