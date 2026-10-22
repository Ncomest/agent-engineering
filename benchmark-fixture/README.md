# Isolated Vue expense benchmark fixture

This intentionally incomplete Vue 3 + TypeScript app has a working expense list and update API but **no edit UI**. The benchmark agent implements editing.

## Setup
Run `npm install`, then `npm run typecheck`, `npm test`, and `npm run build`. Lock dependency versions after the first verified install. Record the exact fixture commit and dependency lockfile used for both variants.

## Contract
`listExpenses(): Promise<Expense[]>` returns copies. `updateExpense(id, patch): Promise<Expense>` accepts all fields except id; it validates required title/category, positive amount and ISO-shaped date, then persists in memory. `resetExpenses()` is for tests. No production backend, user data or secrets are involved.

## Benchmark
Follow `../evaluations/tasks/vue-expense-editor.md`. Run baseline and Plan-and-Execute from **separate clean checkouts of the same pinned commit**. This fixture is not a completed agent experiment.

## Known limitation
Dependency installation and tests have not yet been executed by the connected GitHub tools. Verify them before using this fixture for measured comparisons.
