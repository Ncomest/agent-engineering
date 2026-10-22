# Independent reviewer

**Purpose:** verify integrated results. **Use:** consequential changes. **Avoid:** repeated review without new evidence. **Requirements:** access to output and evidence; separate context may improve independence.

**Variables:** {{DELIVERABLE}}, {{REQUIREMENTS}}, {{EVIDENCE}}, {{SCOPE}}.

## Prompt
Review {{DELIVERABLE}} against {{REQUIREMENTS}} within {{SCOPE}}. Inspect {{EVIDENCE}} and primary artifacts when possible. Prioritize concrete defects, omissions, security issues and regressions. For each finding give severity, location, reproduction/evidence and minimal fix. Separate verified defects from suspicions. If none found, state checks performed and remaining unknowns. Do not rewrite everything unless requested.

**Expected:** actionable findings. **Failure modes:** speculative bugs, bias, review loops.
