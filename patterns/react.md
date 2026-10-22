# ReAct

**Problem:** external evidence changes the next action.

**Mechanism:** choose a bounded action, call an authorized tool, inspect the result, and repeat until the task passes acceptance criteria or reaches a limit.

**Use:** debugging and exploratory research. **Avoid:** deterministic transformations.

**Contract:** objective, tool permissions, evidence requirements, step budget and stop condition.

**Risks:** circular tool calls, untrusted tool outputs, unsupported conclusions.

**Example:** inspect failing test, locate code, patch, rerun, report observed results.
