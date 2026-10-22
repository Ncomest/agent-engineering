# Codex adapter

This adapter is a practical setup workflow, **not** a guarantee about features in every Codex release.

## 1. Capability inventory
Ask the installed agent to report: runtime (IDE/CLI/cloud), accessible workspace and repository branch, applicable project instructions, available tools, command execution, approval policy, network access, delegation support, and session persistence. Confirm each capability by inspecting the actual environment; label unknowns.

## 2. Attach the library
Read [AGENT_BOOTSTRAP.md](../AGENT_BOOTSTRAP.md), [architecture decision guide](../knowledge/architecture-decision-guide.md), and only task-relevant [patterns](../patterns/README.md). A GitHub link is not evidence of file access. If repository access is absent, paste the bootstrap and selected excerpts.

## 3. Project configuration
Inspect existing project-level instruction files before proposing changes. If the installed environment supports `AGENTS.md`, prefer a small repository-local file with: project scope, build/test commands, coding conventions, change boundaries, approval requirements, and references to this library. Preserve existing instructions; proceed with previously authorized in-scope changes, and request approval before new or materially broader persistent edits. Start from the [Codex AGENTS.md example](../templates/codex-AGENTS.example.md).

## 4. Execution
Default to one agent. Use Plan-and-Execute for dependent milestones and Checkpoint & Handoff for multi-session tasks. Delegate only when verified supported and when workers have independent ownership, limited context, clear outputs and an integration gate. Sequential phases are the fallback.

## 5. Verification
Run the project's actual lint, type checks and tests where permitted. Report commands, results, changed files, blockers and unresolved assumptions. Never claim that a tool ran if it did not.

## Copy-ready setup request
"Inspect the current Codex environment and existing project instructions. Use AGENT_BOOTSTRAP.md and the minimum relevant Agent Engineering documents. Propose the simplest workflow and any project-local instruction changes, with exact file diffs and approval gates. Do not assume delegation, network access, persistent memory or caching. After approval, verify with available tests and report measured outcomes."

## Failure modes
Duplicated project instructions; workers modifying the same files; repeated full-repository reads; claiming efficiency from token estimates without actual measurements.
