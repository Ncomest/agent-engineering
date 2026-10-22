# Cursor adapter

This guide is version-neutral; check the installed IDE and workspace features.

## 1. Inspect
Confirm workspace and branch, active project rules, available agent/chat modes, file and terminal access, approval controls, and whether tasks can run independently. Do not assume every mode has identical permissions.

## 2. Connect reference material
Use [AGENT_BOOTSTRAP.md](../AGENT_BOOTSTRAP.md) for the initial request. Supply only relevant [patterns](../patterns/README.md). If project rules are supported, inspect current rules first and propose a short scoped rule referencing the library rather than copying all documentation. Ask before persistent edits.

## 3. Practical workflow
For a Vue/TypeScript feature: inspect relevant files and existing architecture; define acceptance criteria; implement the smallest change; run lint, type checks and tests; summarize diff and limitations. Use Plan-and-Execute only when the change has multiple dependencies.

## 4. Delegation and context
Do not assume independent workers or background execution. If unavailable, split into sequential stages. Keep file context narrow; include cross-cutting constraints and interfaces. Never allow two workers to edit the same file without an explicit integration owner.

## Copy-ready setup request
"Audit the active Cursor workspace, project rules, tools and permissions. Read AGENT_BOOTSTRAP.md and only the relevant Agent Engineering documents. Recommend the minimum agent workflow and show proposed rule changes for approval. Verify implementation with actual project checks and report evidence, not estimates."

## Common pitfalls
Overly broad always-on rules, duplicated context, unverified assumptions about modes, and claiming token savings without a comparable baseline.
