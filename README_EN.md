<div align="center">

# ai-application-roadmap

[English](./README_EN.md) | [中文](./README.md)

## Visit The Website

Click once and start browsing:
[https://qiuner.github.io/ai-application-roadmap/en/](https://qiuner.github.io/ai-application-roadmap/en/)

AI is replacing human intelligence.

Before AGI fully arrives, we hope this site helps you waste less time on avoidable detours.

</div>

## Why This Site Exists

There is a small story behind this project.

This year, I posted a video about coding styles popular in 2026, from traditional coding to multi-agent collaboration. In the comments, some people had never even heard of `multi-agent`, while others still saw AI as just a web chat box. Many websites track model releases, but very few systematically document **applied engineering evolution beyond the models themselves**. What we need is not more feature updates, but a technical map that answers: where am I now, and what should I learn next? `ai-application-roadmap` exists for exactly that reason. We do not focus on model parameter launches or benchmark scoreboards. We track how MCP, Function Calling, Skills, Harness, and Multi-agent workflows evolve, what they change, and which nodes are truly worth marking.

This repository is meant to serve as a practical roadmap for applied AI, helping you see where you are now and what is actually worth learning next.

## How To Use The Site

- The homepage shows a timeline in reverse chronological order by default.
- Use the `Filter Set` dropdown to switch between two filter groups:
  - Base filters: `Year` / `Adoption Effort` / `Recommended` / `Key`
  - Evolution filters: `Phase` / `Trend` / `Signal`
- The `Guide` page highlights key technologies and concepts for quick scanning.
- Docs use language-based routes (`/en/` and `/zh/`). Use the language switcher in the top-right corner.

## Who We Are Looking For

We welcome the best engineers, researchers, and builders worldwide to co-maintain this site.
If you care about real AI application-engineering evolution, not only model scoreboards, your contribution matters here. Contributing is simple: add a timeline node under `docs/en/timeline/*.md` (or `docs/zh/timeline/*.md`) and open a PR. You can also share practical AI usage tips, and we can feature them in the Guide section.

## How To Contribute

1. Fork this repository and create a branch.
2. Add a timeline node file under `docs/en/timeline/` (English) or `docs/zh/timeline/` (Chinese), preferably named `YYYY-MM-topic.md`.
3. Fill in the required frontmatter fields (see below).
4. Preview and build locally:
   - `npm install`
   - `npm run docs:dev`
   - `npm run docs:build`
5. Open a PR with context, references, and your rationale for the node.

Notes:
- New files under `docs/en/timeline/*.md` and `docs/zh/timeline/*.md` are auto-loaded on the homepage timeline.
- Sidebar timeline links are generated from timeline folders in `docs/.vitepress/config.ts`.

## Governance Rules

- `recommended`, `key`, and `key_reason` are maintained centrally in `docs/timeline.flags.ts`, not in timeline markdown frontmatter.

## Timeline Frontmatter Fields

Each timeline node supports the following frontmatter fields:

- `title`: Node title.
- `date`: Node date shown on the timeline (for example, `2026-08`).
  - Definition: use the **applied engineering adoption pivot** (official + publicly verifiable), not the earliest academic publication timestamp.
  - Priority: official announcement/docs of applied adoption > official repo release/tag used in engineering practice > package first release used as an engineering baseline.
  - Keep one `date` only; put additional milestone timestamps (for example, `0.1.0`, `1.0.0`) in the article body under a section such as "Key Dates".
- `year`: Year used for filtering.
- `summary`: Summary shown on timeline cards.
- `phase`: Lifecycle phase, one of `emerging` / `mainstream` / `legacy`.
- `trend`: Evolution direction, one of `rising` / `stable` / `absorbed` / `shrinking` / `obsolete`.
- `signal`: Cognitive calibration, one of `over-hyped` / `under-rated` / `over-scoped` / `well-calibrated`.
- `adoption_effort`: Adoption effort classification, one of:
  - `ready-to-use` (install-and-use or light configuration)
  - `integration-heavy` (noticeable integration and wiring work)
  - `engineering-heavy` (system-level engineering and long-term maintenance)
- `tags`: Tag array for filtering (for example, `["mcp", "protocol"]`).
- `author`: Contributor identifier.
- `maintainer`: Long-term maintainer for this node (optional; defaults to `author`).
- `authored_by`: Content origin, one of `human` / `ai-assisted` / `ai-generated` (optional; defaults to `unknown`).

## Thanks To All Contributors

<a href="https://github.com/Qiuner/ai-application-roadmap/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Qiuner/ai-application-roadmap" alt="ai-application-roadmap contributors" />
</a>
