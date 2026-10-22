# Execution prompts for Vue expense editor benchmark

Use the same pinned fixture commit, model version, tool permissions, acceptance criteria and budget for both variants. Start each run from a clean checkout. Replace placeholders before use.

## Shared task text
Repository: {{FIXTURE_REPOSITORY}}
Commit: {{FIXTURE_COMMIT}}
Task specification: [Vue expense editor](tasks/vue-expense-editor.md)
Allowed commands and permissions: {{TOOLS_AND_PERMISSIONS}}
Time and retry limits: {{LIMITS}}

Implement the specified expense editing behavior. Respect existing conventions and API contract. Run available checks. Report changed files, actual test output, unresolved failures, and usage metrics only if observable. Do not modify production data or unrelated files.

## Variant A: baseline
Use the shared task text only. Do not add mandatory planning checkpoints, subagents or an independent reviewer.

## Variant B: Plan-and-Execute
Use the shared task text and append:

"Before editing, write a short plan with milestones and acceptance checks. Execute the plan sequentially, updating status after each milestone. Inspect the API contract first, implement the feature, then run tests and review the diff. Stop when acceptance criteria pass or the defined budget is exhausted."

## Collection
For each run, append one row to [run-template.csv](run-template.csv), preserve actual logs and commit/diff links. Use N/A for unavailable usage data. Do not infer tokens from message length. If test outcomes are ambiguous, mark them unresolved rather than passed.

## Independence
Prefer an evaluator that checks test output and diffs against a fixed rubric without knowing which variant produced them. Do not use extra reviewer work in only one variant.
