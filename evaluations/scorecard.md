# Evaluation scorecard v0.1

Record task, difficulty, platform/model/version, prompts, baseline and variant with comparable acceptance criteria.

- Correctness: passed checks / total; human-rated issues.
- Cost: input, output and cached tokens, charges where available.
- Latency: wall-clock time and iterations.
- Reliability: failures, retries, recoveries, tool errors, unauthorized side effects.
- Context: repeated reads, handoffs, recovery accuracy.

Do not claim savings without comparable measurements. Missing metrics are unavailable, not zero. Repeat trials when model variability matters. Evaluate the integrated output, not just individual workers.

## Reproducible protocol
Follow [evaluation protocol](protocol.md) to define fixed tasks, comparable baselines, run records, evidence and promotion criteria before making efficiency claims.
