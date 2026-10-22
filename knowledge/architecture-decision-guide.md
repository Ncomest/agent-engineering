# Architecture Decision Guide (v0.2 draft)

## Goal
Choose the least complex architecture that meets acceptance criteria. Do not equate more agents with better results.

## Decision sequence
1. **Deterministic operation:** if a script, query or conventional workflow fully specifies the transformation, prefer it over an LLM agent.
2. **Direct model response:** if no external state, tools or iterative decisions are needed, use a single prompt.
3. **Single tool-using agent:** if the task needs files, search or APIs, use one agent with bounded permissions and verification.
4. **Plan-and-Execute:** add explicit milestones only for consequential dependencies, uncertainty or long-running tasks; it can run inside one agent.
5. **Routing / Prompt Chaining:** route different input types to specialized instructions, or chain dependent transformations. These do not require multiple agents.
6. **Orchestrator–Workers:** delegate only if independent work packages have non-overlapping ownership, stable interfaces, measurable integration checks, and the platform actually supports delegation. Sequential role switching is not parallelism.
7. **Evaluator–Optimizer:** introduce a bounded feedback loop only when a reliable rubric or executable tests exist.

## Delegation gate
Before creating a worker, document: distinct deliverable; inputs and minimal context; read/write scope; interface; integration owner; expected advantage (quality, latency or context isolation); added token/tool overhead; stop condition. If these cannot be specified, stay with one agent.

## Verification and budgets
Set acceptance tests before execution. Record platform/model/version, wall time, input/output/cached tokens when available, retries, tool failures and final correctness. Treat unavailable measurements as unknown, never zero. Compare against a single-agent baseline on the same task before claiming efficiency.

## Example: Vue feature
Task: add an expense editor to a Vue application. Start with one agent to inspect existing API, implement UI and run tests. Split contract and UI into workers only if interfaces are stable, files do not overlap, and integration checks are defined. If the API is changing, prefer sequential work. Reviewer should report concrete failing cases rather than trigger endless rewrite cycles.

## Decision record template
- Task and acceptance criteria:
- Constraints and available capabilities (verified vs assumed):
- Selected approach and rejected simpler options:
- Ownership, context and tool permissions:
- Integration and verification:
- Limits (time, retries, tokens if observable):
- Outcome and evidence:
