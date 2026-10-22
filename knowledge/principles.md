# Core engineering principles v0.1

These are engineering recommendations, not universal laws.

1. **Simplicity first:** begin with direct response or one agent; add orchestration only when justified.
2. **Explicit contracts:** define inputs, outputs, ownership, constraints and acceptance criteria.
3. **Separation of concerns:** avoid overlapping write ownership and unclear interfaces.
4. **Context efficiency:** retrieve only relevant context; verify fidelity of summaries.
5. **Verification over confidence:** prefer tests and evidence to self-assessment.
6. **Bounded autonomy:** limit time, retries, costs, permissions and side effects.
7. **Observability:** record decisions, checkpoints, failures and outcomes.
8. **Recoverability:** save concise durable state for continuation.
9. **Cost–quality balance:** compare quality, latency and usage against a baseline.
10. **Platform independence:** core states intended behavior; adapters state implementation.

## Evidence labels
- Mechanism: documented or reproducibly verified behavior.
- Recommendation: context-dependent engineering heuristic.
- Hypothesis: claim requiring evaluation.
