# Parallelization

**Problem:** independent tasks may finish sooner when concurrent.

**Mechanism:** partition non-overlapping work, run concurrently if supported, integrate and verify.

**Use:** independent read-only investigations. **Avoid:** shared write ownership or unstable interfaces.

**Contract:** partitions, ownership, integration gate and conflict policy.

**Risks:** duplicate reads, conflicting changes and increased total token use.

**Example:** audit unrelated modules concurrently, then consolidate findings.
