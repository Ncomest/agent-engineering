# Evaluation workspace

- [Protocol](protocol.md): controlled comparison and decision gates.
- [Scorecard](scorecard.md): metric definitions.
- [v0.2 readiness audit](release-readiness-v0.2.md): completed checks and open release gates.
- [Vue expense editor task](tasks/vue-expense-editor.md): a proposed practical benchmark, not a completed run.
- [Run data template](run-template.csv): one row per actual run; leave unavailable measurements as N/A.

## Running the first comparison
1. Select an isolated Vue/TypeScript fixture with a pinned commit and test commands.
2. Freeze the task instructions, allowed tools, model and evaluation criteria.
3. Run baseline single-agent and Plan-and-Execute separately from the same revision.
4. Save evidence, including failures; repeat runs if possible.
5. Compare quality and safety first, then latency and measured tokens.
6. Do not publish an efficiency claim until comparable measurements exist.

No benchmark outcomes are included in this directory.
