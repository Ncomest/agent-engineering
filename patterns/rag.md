# Retrieval-Augmented Generation (RAG)

**Problem:** relevant facts reside outside the model's current context.

**Mechanism:** retrieve candidate sources → select relevant passages → generate with source attribution → verify critical claims.

**Use:** large knowledge bases and documentation questions. **Avoid:** tiny complete inputs or when reliable retrieval is unavailable.

**Contract:** retrieval scope, freshness, access control, citation rules, no-result behavior.

**Failure modes:** irrelevant retrieval, outdated sources, injected instructions in documents, unsupported synthesis.

**Example:** answer an API question from versioned repository docs, citing exact files.

**Verification:** assess retrieval relevance and answer faithfulness separately.
