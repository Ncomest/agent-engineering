# Session handoff

**Purpose:** portable resumption. **Use:** multi-session work. **Avoid:** short completed tasks. **Requirements:** ability to pass text; file storage optional.

**Variables:** {{TASK}}, {{CURRENT_STATE}}, {{EVIDENCE}}, {{NEXT_STEPS}}.

## Prompt
Create a factual handoff for {{TASK}}. Verified state: {{CURRENT_STATE}}. Evidence and artifacts: {{EVIDENCE}}. Next steps: {{NEXT_STEPS}}. Include decisions, unresolved questions, failures, commands/tests and their actual outcomes. Separate facts from assumptions. Keep concise but sufficient for a fresh agent. Exclude secrets.

**Expected:** usable checkpoint. **Failure modes:** stale references, invented completion, omitted blockers.
