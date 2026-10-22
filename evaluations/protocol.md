# Agent evaluation protocol (v0.2 draft)

## Purpose
Compare an agent workflow against a simpler baseline on the same tasks. Evaluate the final integrated output, not only individual workers.

## Test design
1. Define a fixed task set before testing. Include simple, medium and complex tasks with clear acceptance criteria and representative failure cases.
2. Freeze task inputs, relevant repository revision, allowed tools, permission boundaries, model/platform versions and maximum attempts.
3. Define a baseline (usually one agent without extra orchestration) and a candidate variant. Change one main factor at a time.
4. Run both under comparable conditions. Repeat trials when outputs are stochastic; document run count and order.
5. Capture raw results and artifacts, including failed runs. Do not discard inconvenient outcomes.

## Minimum scorecard
- **Correctness:** checks passed / total; severity of unresolved defects.
- **Reliability:** successful runs / total; tool failures, retries and recoveries.
- **Efficiency:** input/output/cached tokens if exposed; elapsed time; tool calls; monetary cost if known.
- **Context:** repeated reads, handoff fidelity and missing critical constraints.
- **Safety:** unauthorized or destructive side effects; approval compliance.

## Reporting rules
- Unknown measurements are **N/A**, not 0.
- Do not add cached tokens to billed token totals without verifying provider accounting.
- If either baseline or variant lacks comparable token counts, do not publish a token-savings percentage.
- A faster but less correct variant is not automatically better.
- Report sample size and variability; small samples do not justify universal claims.
- Separate observations, interpretations and hypotheses.

## Run record
| Field | Value |
| --- | --- |
| Task ID / revision | |
| Baseline or variant | |
| Model, platform, version | |
| Tool and permission setup | |
| Acceptance criteria | |
| Passed checks / total | |
| Failure severity | |
| Input / output / cached tokens | |
| Wall time and tool calls | |
| Retries and recoveries | |
| Unauthorized side effects | |
| Artifact and evidence links | |

## Decision
Promote a variant only if it meets required quality and safety gates and shows a reproducible advantage on the relevant metric. Otherwise retain the baseline or collect more evidence.
