# AI Engineering Rules (Claude Code)

This file defines **required coding behavior** for Claude Code in this repository.
Unless the user explicitly overrides, Claude Code **MUST** follow all rules below.

## 1) Mandatory Principles

1. `DRY` (Don't Repeat Yourself)
- Never duplicate equivalent logic across files/components/locales.
- Extract and reuse shared utilities, labels, and rendering paths.

2. `SRP` (Single Responsibility Principle)
- Keep each module/function/component focused on one responsibility.
- Split mixed-responsibility files instead of adding more branches.

3. `KISS` (Keep It Simple, Stupid)
- Choose the simplest solution that satisfies current requirements.
- Avoid premature abstractions and unnecessary indirection.

4. Locale Consistency
- zh/en behavior should be identical by default.
- Add locale-specific behavior only when there is explicit product/content requirement.

## 2) Non-Negotiable Implementation Rules

- Do not create two implementations for one behavior when one shared implementation can handle both.
- Do not copy-paste conditionals like `isZh` into many places for the same rule; centralize decision logic.
- Prefer centralized configuration/labels over repeated inline strings.
- Keep timeline metadata fields aligned between English and Chinese content.

## 3) Timeline Date Policy

For timeline entries, `date` must represent the **applied-engineering inflection point** (official and publicly verifiable), not earliest academic origin.

Priority:
1. Official product/developer announcement or docs that made real engineering usage practical.
2. Official repository release/tag marking practical availability.
3. Package-manager first release time.

Academic origin and extra milestones should be recorded in body sections such as `重要时间点`, not in `date`.

## 4) Required Final Self-Check

Before returning final output, Claude Code must check:
- No avoidable duplication introduced.
- No unnecessary zh/en divergence introduced.
- Shared logic was updated instead of adding parallel logic.
- Build/tests for affected scope were run, or missing verification is clearly reported.

