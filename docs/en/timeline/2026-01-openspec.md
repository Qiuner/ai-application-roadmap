---
title: OpenSpec (Spec-Driven Development)
date: 2026-01-26
year: 2026
summary: An AI collaboration framework that turns requirements, specs, design, and task breakdowns into traceable artifacts, making "align on specs first, then implement with AI" an executable process.
phase: emerging
trend: rising
signal: well-calibrated
adoption_effort: ready-to-use
tags: [openspec, spec-driven-development, sdd, workflow, agent, ai-engineering]
author: Qiuner
authored_by: ai-assisted
---

# OpenSpec

- Important dates:
  - First release (npm 0.1.0): 2025-09-06
  - Version 1.0.0 release: 2026-01-26
- Official references:
  - https://github.com/Fission-AI/OpenSpec
  - https://www.npmjs.com/package/@fission-ai/openspec
  - https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md
- Note: This entry records public evolution milestones and phase significance of OpenSpec as a spec-driven AI development framework.

## What It Is

OpenSpec is a spec-driven development framework (SDD) for AI coding collaboration.

According to its official docs, it uses artifacts such as `proposal.md`, `specs/`, `design.md`, and `tasks.md` to separate "why this," "what to build," "how to design," and "how to execute" into an iterative, maintainable process instead of leaving key decisions only in chat context.

## What Step It Moved AI Application Engineering From and To

It moved many teams from "prompt and edit code immediately" toward "produce spec artifacts first, then implement and archive."

Its default path is `/opsx:propose -> /opsx:apply -> /opsx:archive`. This links requirement clarification, solution design, task breakdown, and final archival into one workflow, reducing semantic drift in multi-person or long-cycle collaboration.

## What Stage It Is In Now

I currently mark OpenSpec as `emerging`.

It already has an installable CLI, a clear artifact model, integration paths across tools, and a 1.0.0 release on 2026-01-26. But it is still an evolving ecosystem project, and organizational rollout and governance patterns are still forming.

## What It Might Replace

It can replace part of AI development habits that rely only on chat logs for requirement management, as well as weakly connected processes split across docs, task systems, and temporary prompts.

In iterative and collaborative work, artifact-driven pipelines like OpenSpec make requirement-design-implementation relations more traceable.

## What Might Replace It

If a more unified standard protocol appears that combines specification, execution, verification, and archival, OpenSpec may be absorbed by higher-level platform capabilities.

For example, workflow systems deeply integrated with IDEs and agent runtimes may further standardize practices that are currently repo-artifact centered.

