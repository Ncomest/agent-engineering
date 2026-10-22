# Platform adapters

Core documentation defines **what and why**; adapters describe **how to apply it** in a verified platform environment. They are workflows, not guaranteed feature inventories.

## Choose your environment
- [Codex](codex.md) — workspace and project instructions, approvals, implementation checks.
- [Claude Code](claude-code.md) — project instructions, permissions and optional delegation.
- [Cursor](cursor.md) — IDE workspace, project rules and focused code changes.
- [OpenCode / custom / chat-only](other.md) — capability-first fallback for other environments.

## Ready-to-adapt project instructions
- [Codex AGENTS.md example](../templates/codex-AGENTS.example.md)
- [Claude Code CLAUDE.md example](../templates/claude-CLAUDE.example.md)
- [Cursor MDC rule example](../templates/cursor-rule.example.mdc)
- [OpenCode / generic repository example](../templates/opencode-AGENTS.example.md)
- [ChatGPT conversation setup prompt](../templates/chatgpt-agent-setup.md)

Check how your installed platform loads rules; the examples are not automatically installed.

## Common setup
1. Read [AGENT_BOOTSTRAP.md](../AGENT_BOOTSTRAP.md).
2. Verify actual tool access, instruction files, permissions and persistence.
3. Select the simplest architecture using the [decision guide](../knowledge/architecture-decision-guide.md).
4. Load only relevant [patterns](../patterns/README.md).
5. Inspect and merge existing instructions. Apply changes already authorized within scope; obtain approval for new or materially broader persistent changes.
6. Review actual instruction compliance using the [adherence checklist](../evaluations/instruction-adherence-checklist.md). Record measurements in the [scorecard](../evaluations/scorecard.md) only when available.

Never assume subagents, memory, caching or network access. If the library cannot be accessed directly, paste only the necessary excerpts.
