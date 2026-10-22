# Platform adapters

Core documentation defines **what and why**; adapters describe **how to apply it** in a verified platform environment. They are workflows, not guaranteed feature inventories.

## Choose your environment
- [Codex](codex.md) — workspace and project instructions, approvals, implementation checks.
- [Claude Code](claude-code.md) — project instructions, permissions and optional delegation.
- [Cursor](cursor.md) — IDE workspace, project rules and focused code changes.
- [OpenCode / custom / chat-only](other.md) — capability-first fallback for other environments.

## Common setup
1. Read [AGENT_BOOTSTRAP.md](../AGENT_BOOTSTRAP.md).
2. Verify actual tool access, instruction files, permissions and persistence.
3. Select the simplest architecture using the [decision guide](../knowledge/architecture-decision-guide.md).
4. Load only relevant [patterns](../patterns/README.md).
5. Propose persistent configuration changes before applying them.
6. Validate against acceptance criteria and record actual measurements using the [scorecard](../evaluations/scorecard.md).

Never assume subagents, memory, caching or network access. If the library cannot be accessed directly, paste only the necessary excerpts.
