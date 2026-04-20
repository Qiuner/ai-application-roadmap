# AI Engineering Rules (Codex / Agent Runtimes)

This file is a **mandatory execution policy** for coding agents working in this repo.
Unless the user gives an explicit conflicting instruction, agents **MUST** follow these rules.

## 1) Core Principles (Mandatory)

1. `DRY` (Don't Repeat Yourself)
- MUST avoid duplicating business logic, rendering logic, mapping tables, and localization rules.
- If behavior is identical, implement one shared path and reuse it.

2. `SRP` (Single Responsibility Principle)
- Each file/component/function should have one clear responsibility.
- If a module handles unrelated concerns, split it.

3. `KISS` (Keep It Simple, Stupid)
- Prefer simple, obvious, maintainable solutions.
- Do not introduce abstractions before they are needed.

4. Consistency by default
- Chinese and English features should behave the same unless a real requirement says otherwise.
- Language-specific branches require a clear reason in code comments or PR notes.

## 2) Hard Constraints

- MUST NOT copy-paste the same logic into multiple files when shared utilities/components can be used.
- MUST NOT add parallel implementations for zh/en when one implementation can read locale labels.
- MUST update existing shared code first before creating new variant code.
- MUST keep data schema consistent across `docs/timeline` and `docs/zh/timeline`.

## 3) Timeline Date Rule

For timeline markdown files:
- `date` means the **applied engineering adoption pivot** (official + publicly verifiable).
- Keep one `date` only.
- Research origin and extra milestones go into body section such as `重要时间点`.
- Do not use early academic publication date as `date` when it does not reflect applied engineering adoption.

## 4) Pre-Commit / Pre-Submit Checklist (Required)

Before finishing, the agent MUST verify:
- No obvious duplicated logic added.
- No unnecessary zh/en divergent rendering path added.
- Shared labels/mappings are centralized where possible.
- Build/tests pass for touched area (or clearly report what was not run).

