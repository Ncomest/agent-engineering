# Agent Engineering

Platform-neutral library for configuring and evaluating AI agents.

## Primary goal
Configure agents to reliably follow project instructions, respect scope, verify outcomes, and use resources efficiently. Benchmark fixtures are optional supporting evidence, not the primary deliverable. Written instructions alone cannot guarantee compliance.

## Quick start
1. Read [AGENT_BOOTSTRAP.md](AGENT_BOOTSTRAP.md).
2. Adapt the [agent instruction contract](templates/agent-instruction-contract.md) to your project and platform; review existing instructions first.
3. Provide the agent with access to this library or paste relevant excerpts.
4. Request a capability inventory and the simplest adequate configuration proposal.
5. Approve persistent changes and permissions before execution.
6. Run the contract's manual adherence probes and record evidence; evaluate results using [scorecard](evaluations/scorecard.md).

## Index
- [Principles](knowledge/principles.md)
- [Architecture decision guide](knowledge/architecture-decision-guide.md)
- [Pattern taxonomy](knowledge/pattern-taxonomy.md)
- [Token Engineering](knowledge/token-engineering.md)
- [Patterns](patterns/README.md)
- [Prompts](templates/README.md)
- [Platform adapters](adapters/README.md)
- [Evaluation workspace (optional)](evaluations/README.md)
- [Evaluation scorecard](evaluations/scorecard.md)

Core guidance is platform-neutral; adapters are platform-specific. Never assume agent tools, memory, subagents or caching are available. Status: **v0.2 documentation candidate**; platform trials and comparable benchmarks are not yet verified. See [release readiness](evaluations/release-readiness-v0.2.md).
