# Orchestrator–Workers

**Problem:** independent workstreams may benefit from specialization.

**Mechanism:** orchestrator defines contracts, assigns workers, integrates outputs and verifies the whole.

**Use:** separable tasks with clear ownership. **Avoid:** tightly coupled tasks or unavailable delegation.

**Benefits:** specialization, context isolation and possible concurrency.

**Risks:** duplicated reading, interface drift, conflicts, repeated review cycles.

**Example:** delegate independent research sources, then synthesize with evidence checks.

**Minimum:** owner, scope, inputs, output, interfaces, integration gate. Sequential role switching is a fallback, not real parallelism.
