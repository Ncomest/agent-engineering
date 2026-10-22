# Prompt Chaining

**Problem:** a task requires inspectable sequential transformations.

**Mechanism:** step A produces structured output, validate it, then pass only required information to step B.

**Use:** requirements extraction followed by implementation planning. **Avoid:** chains without meaningful validation boundaries.

**Contract:** step schemas, validation rules, retries and failure handling.

**Risks:** propagated errors, excessive intermediate tokens, lost constraints.

**Example:** extract an API contract, validate fields, generate a typed client.
