# Efficient task prompt

Task: {{TASK}}
Acceptance criteria: {{CRITERIA}}
Relevant references: {{REFERENCES}}
Allowed tools: {{TOOLS}}
Verification: {{CHECKS}}
Budget: {{BUDGET}}

1. Verify access and permissions.
2. Read only relevant sources and expand as needed.
3. Prefer one agent; justify any delegation.
4. Reuse validated context and avoid repeated unchanged reads.
5. Run checks and report observed results, failures and resource usage.
6. Do not claim token savings without comparable measurements.
