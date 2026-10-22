# Agent Engineering

Platform-neutral library for configuring and evaluating AI agents.

## Quick start
1. Read [AGENT_BOOTSTRAP.md](AGENT_BOOTSTRAP.md).
2. Provide the agent with access to this library or paste relevant excerpts.
3. Request a capability inventory and a minimal configuration proposal.
4. Approve persistent changes and permissions before execution.
5. Evaluate results using [scorecard](evaluations/scorecard.md).

## Index
- [Principles](knowledge/principles.md)
- [Architecture decision guide](knowledge/architecture-decision-guide.md)
- [Pattern taxonomy](knowledge/pattern-taxonomy.md)
- [Token Engineering](knowledge/token-engineering.md)
- [Patterns](patterns/README.md)
- [Prompts](templates/README.md)
- [Platform adapters](adapters/README.md)
- [Evaluation](evaluations/scorecard.md)

Core guidance is platform-neutral; adapters are platform-specific. Never assume agent tools, memory, subagents or caching are available. Status: **v0.2 documentation candidate**; patterns, adapters and evaluation protocol are documented, but platform trials and comparable benchmarks are not yet verified. See [release readiness](evaluations/release-readiness-v0.2.md).
