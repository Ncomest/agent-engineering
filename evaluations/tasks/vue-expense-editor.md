# Benchmark task: Vue expense editor

**Status:** task specification only; no agent runs recorded.

## Objective
Implement expense editing in a small Vue 3 + TypeScript application with an existing expense list. Use a fixed repository commit supplied at run time. Do not use a live production application as the benchmark fixture.

## Starting fixture requirements
- A Vue 3 + TypeScript project with a working test runner.
- An expense list with `id`, `title`, `categoryId`, `amount`, `date`.
- An existing read API or mocked data source.
- A documented persistence contract for updating one expense.
- A known failing/absent edit interaction, plus baseline tests.

Record the exact fixture repository and commit before any run. **Do not start the benchmark without these inputs.**

## Acceptance criteria
1. User can open an editor for a selected expense.
2. Editor pre-fills the correct expense data.
3. Save validates amount and required fields and uses the documented update contract.
4. Successful update is visible in the list without a full reload.
5. Failure leaves user data intact and shows an actionable error.
6. Cancel does not persist edits.
7. Existing list sorting and filters are preserved.
8. Type check, relevant unit tests and project lint pass, if configured.

## Variant A: single agent
Provide the same task, fixture, tools, time budget and acceptance criteria. No explicit planning workflow beyond normal execution.

## Variant B: Plan-and-Execute
Same conditions and model, but require a concise dependency-aware plan with checkpoints: inspect contract → implement UI and state updates → verify tests → summarize. Do not add workers or extra review tools.

## Evaluation
Use [protocol](../protocol.md) and [run template](../run-template.csv). Keep raw tool logs, final diffs, test output, usage telemetry where available, and record missing metrics as N/A. Compare final integrated output, not just planning quality.

## Caveats
This is a **proposed benchmark**, not a claim that an experiment has been executed. To obtain credible results, provide an isolated fixture, run both variants on identical starting revisions, repeat trials when possible, and review outcomes independently.

## Prepared isolated fixture
An intentionally incomplete Vue 3 + TypeScript fixture has been published on branch [`benchmark/vue-expense-fixture`](https://github.com/Ncomest/agent-engineering/tree/benchmark/vue-expense-fixture/benchmark-fixture). The branch's fixture creation commit is `dfb9ce31aa07415847e8745a182ab4d2e3acbb3d`. Use that exact commit for both baseline and variant runs, after verifying dependency installation and tests. This does not imply any benchmark has been executed.

## Fixture validation gate (2026-10-22)
A GitHub Actions workflow has been added to the fixture branch at `.github/workflows/vue-expense-fixture.yml` for install, typecheck, unit tests and build. A successful CI run and committed dependency lockfile are **not yet verified**. The earlier fixture commit is a source snapshot only; after CI passes and dependencies are locked, record a **new immutable benchmark baseline commit** and use it for both variants. Do not run or report an A/B comparison against an unvalidated fixture.
