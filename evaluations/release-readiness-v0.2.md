# v0.2 release readiness and audit

Audit date: 2026-10-22. Scope: repository documentation readable through the GitHub connector on `main`, plus the Russian Notion setup guide. This is **not** a runtime agent trial, an exhaustive link crawler, or a security certification.

## Primary release goal
Help users configure Codex, Claude Code, Cursor, OpenCode and ChatGPT to follow project instructions: respect scope, use the simplest adequate workflow, avoid unnecessary delegation, request appropriate approvals, verify honestly, and stop on completion. Benchmark fixtures are optional and are **not** a release gate for this documentation library.

## Confirmed documentation
- Platform-neutral [bootstrap](../AGENT_BOOTSTRAP.md) and [instruction contract](../templates/agent-instruction-contract.md).
- Five [ready-to-adapt platform examples](../templates/README.md): Codex, Claude Code, Cursor, OpenCode/generic, and ChatGPT.
- Four [platform adapters](../adapters/README.md), including generic capability-first guidance for other environments.
- [Instruction adherence checklist](instruction-adherence-checklist.md) and [first agent trial pack](first-agent-trial.md) with explicit evidence fields.
- Architecture decision guide, pattern taxonomy, Token Engineering, pattern index, task templates and optional evaluation materials.
- Russian Notion setup guide: https://app.notion.com/p/401c9897a51f8172b5a9efd9191201a1

## Evidence from this documentation audit
- 2026-10-22: five instruction templates were checked for the presence of six baseline rule groups (scope, verification, untrusted content, approvals, stopping, delegation): **30/30 text-presence checks**. This is not evidence of actual agent obedience.
- 2026-10-22: 20 additional linked/reference repository files were fetched successfully, including guides, adapters, task templates and evaluation materials. This is **not** an exhaustive check of all relative links or anchors.
- Bootstrap, contract and Codex adapter were revised to avoid repeated approval requests for already authorized in-scope work, while preserving approval gates for new or high-impact actions.
- The Notion guide was created and extended with five templates, adherence checks and trial guidance. Full Notion parity has not been verified.

## Open acceptance criteria
1. **Runtime adherence:** execute the [first agent trial pack](first-agent-trial.md) with at least one installed agent, save the transcript and file diff, and report PASS/FAIL/NOT RUN per probe. Not yet done.
2. **Cross-platform compatibility:** verify actual instruction-loading behavior, file locations, and permissions for each installed platform/version before claiming tested support. Not yet done.
3. **Instruction remediation:** correct any observed failures and rerun the same probe. Pending real results.
4. **Navigation/parity:** exhaustive relative-link and Notion-to-GitHub companion-page checks remain incomplete.
5. **Quantified efficiency:** token and latency claims require comparable measured runs; optional and not a gate for the configuration library.

## Release decision
**Documentation package v0.2: prepared and usable as examples, with explicit unverified behavior.**
**Validated agent compliance / platform compatibility: NOT VERIFIED.**

Do not call the package a tested or certified agent configuration until evidence exists. Do not build application fixtures or benchmark stands merely to satisfy documentation readiness.
