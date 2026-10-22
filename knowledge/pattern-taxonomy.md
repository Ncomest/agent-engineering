# Agent Engineering Taxonomy (v0.2 draft)

A pattern describes repeatable control flow; a technique improves an individual step; an infrastructure capability enables the system; an evaluation method measures results. Categories overlap, but should not generate duplicate articles.

| Category | Concepts | Relationship |
| --- | --- | --- |
| Control flow | ReAct, Plan-and-Execute, Prompt Chaining, Routing | ReAct interleaves reasoning/actions; planning separates milestones; chaining sequences prompts; routing selects paths |
| Coordination | Orchestrator–Workers, Parallelization | Orchestration assigns and integrates work; parallelization is an execution property, not necessarily multi-agent |
| Quality | Reflection, Evaluator–Optimizer, Guardrails, Human-in-the-Loop | Reflection is self-critique; evaluator uses criteria; guardrails enforce boundaries; humans approve consequential decisions |
| Context | Context Engineering, Isolation, Progressive Disclosure, Checkpoint & Handoff | Engineering is the umbrella; isolation limits scope; disclosure retrieves on demand; handoff persists verified state |
| Knowledge | Memory, RAG | Memory retains selected state; RAG retrieves external evidence; neither guarantees accuracy |
| Integration | Tool Use | Controlled invocation of external capabilities, with permission and error handling |
| Measurement | Agent Evaluations | Benchmarks and observations, not an execution pattern |

## Avoid duplicates
- Planning is the general activity; Plan-and-Execute is one workflow realization.
- Reflection can be one evaluator step; Evaluator–Optimizer includes a bounded improvement loop.
- Parallelization does not imply independent agents.
- Memory differs from a checkpoint: memory is selective long-term retention; checkpoint is a task-state snapshot.
- RAG is retrieval of relevant external information, not automatic memory.

## Selection rule
Document each concept once as a canonical entry, link to related concepts, and specify prerequisites, failure modes, costs and a baseline comparison. Never promise token savings without measured trials.
