# Token Engineering (v0.2)

## Goal
Reduce unnecessary context and repeated work **without** reducing correctness, safety or recoverability. Token counts are one dimension of total task cost.

## 1. Establish a baseline
Record task, acceptance criteria, model/platform/version, available tools, number of runs, input/output/cached tokens (when exposed), wall time, retries, failures, and final quality. Unknown metrics stay unknown. Compare the same task under equivalent conditions.

## 2. Context selection
- Read a repository map, file list or search hits before opening full files.
- Load only files and excerpts relevant to the current step; include global constraints and interfaces.
- Use progressive disclosure: start with a short overview, fetch detail on demand.
- Prefer precise retrieval over dumping a whole knowledge base.
- Avoid repeated reads unless a file changed or evidence is stale.
- Use concise checkpoint handoffs containing verified facts, decisions, file references, blockers and next action.
- Never summarize away security constraints, acceptance criteria or unresolved uncertainties.

## 3. Delegation
One agent is the baseline. Add workers only for independent deliverables with stable contracts and a clear integration gate. Count orchestration, duplicated context, worker calls, review and rework in the total. Parallel execution may reduce wall time while increasing tokens.

## 4. Model and tool selection
Choose a model/tool based on task difficulty, tool support, observed quality and cost. Use deterministic code for mechanical transformations. Route only if classification overhead is justified. Never assume that a cheaper model or shorter prompt preserves quality.

## 5. Caching and reuse
Reuse validated artifacts, search results and unchanged file summaries within their freshness limits. Provider-side prompt caching is platform-specific; verify availability and accounting. Never report cache savings without provider usage data.

## 6. Bounded retries and review
Retry only for a diagnosed transient failure or actionable review finding. Set retry/iteration budgets. Stop when acceptance criteria pass or the budget is exhausted. Independent verification should use tests or external evidence, not mere agreement.

## 7. Quality guardrails
Do not truncate critical source material, skip necessary tests, remove approval steps or conceal failures to save tokens. Track defect rate and recovery cost alongside token usage.

## Comparison worksheet
| Field | Baseline | Variant |
| --- | --- | --- |
| Task and acceptance criteria | | |
| Platform/model/version | | |
| Input tokens | | |
| Output tokens | | |
| Cached tokens (if exposed) | | |
| Wall time | | |
| Tool calls and retries | | |
| Passed checks / total | | |
| Rework and integration issues | | |
| Total charge (if exposed) | | |

## Interpretation
Calculate token difference only when both sides have comparable measurements and consistent accounting. For baseline B and variant V, reduction = (B - V) / B when B > 0. Report absolute counts and quality changes; do not attribute a reduction to a specific technique without controlled comparisons.
