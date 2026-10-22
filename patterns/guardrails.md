# Guardrails

**Problem:** agent actions may exceed intended scope.

**Mechanism:** enforce permissions, validate inputs, require approvals for consequential changes and set limits.

**Use:** external tools, file modifications and sensitive operations.

**Contract:** allowed actions, escalation, validation and stop conditions.

**Risks:** prompt injection, unintended changes, secret exposure. Prompt instructions alone are not a security boundary.

**Example:** require approval before deleting project documentation.
