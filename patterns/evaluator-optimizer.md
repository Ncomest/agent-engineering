# Evaluator–Optimizer

**Problem:** outputs require iterative improvement against criteria.

**Mechanism:** generate → evaluate with tests or rubric → revise concrete failures → stop at threshold or budget.

**Use:** measurable quality and actionable feedback. **Avoid:** subjective review loops without reliable rubric.

**Benefits:** targeted improvement and visible defects.

**Risks:** evaluator bias, rubric overfitting, endless cycles.

**Example:** check a report for evidence and completeness; revise missing sections.

**Minimum:** fixed rubric, bounded iterations (two by default, adjusted to risk), explicit stop reason.
