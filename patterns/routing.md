# Routing

**Problem:** different task types need different workflows.

**Mechanism:** classify task, select a route using explicit rules, and use a fallback for ambiguity.

**Use:** separating debugging, research and documentation. **Avoid:** specialization without measurable value.

**Contract:** route definitions, fallback and classification checks.

**Risks:** misclassification, lost constraints, unnecessary model calls.

**Example:** route reproducible failures to debugging, explanations to documentation.
