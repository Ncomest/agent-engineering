# Worker task contract

**Purpose:** bounded delegation. **Use:** independent work with clear deliverable. **Avoid:** ambiguous tightly coupled work. **Requirements:** text only; automated delegation needs subagent support.

**Variables:** {{OBJECTIVE}}, {{INPUTS}}, {{SCOPE}}, {{OUTPUT}}, {{ACCEPTANCE}}, {{BUDGET}}.

## Prompt
You own only {{OBJECTIVE}}. Inputs: {{INPUTS}}. Allowed scope and prohibited changes: {{SCOPE}}. Deliver {{OUTPUT}}. Verify against {{ACCEPTANCE}} within {{BUDGET}}. Report changed artifacts, evidence, assumptions, blockers and risks. Do not modify shared interfaces without approval. Stop when complete or blocked.

**Expected:** bounded verified output. **Failure modes:** overlapping ownership, inaccessible inputs, vague criteria.
