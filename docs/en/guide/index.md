<script setup lang="ts">
import { projectMeta } from '../../.vitepress/project-meta'
</script>

# Guide

<code>{{ projectMeta.repoName }}</code> tracks how applied AI engineering practices evolve over time.

## A Small Story

Around age 17, I got obsessed with philosophy. I read both Chinese and Western works, including _Caigentan_, _Principles of Human Knowledge_, _The Origin of the Family, Private Property and the State_, _One-Dimensional Man_, and _On Contradiction_.

As I read more, I realized philosophy was huge, but I had no timeline or map to tell me where I was. Then I thought: philosophy is taught in undergraduate programs, so I bought a philosophy textbook to see how they learn it.

That textbook offered one idea that stayed with me: learning philosophy means learning the history of philosophy. At that moment, I knew I had bought the right book.

That is also why I started this project. Applied AI engineering is moving fast, but we still lack a clear timeline map that tells people where they are and what comes next.

If you are serious about building AI systems, you are invited to contribute. The bar is intentionally low: add one markdown file under `docs/zh/timeline/*.md` (or `docs/en/timeline/*.md` for English), document a node clearly, and open a PR.

## What You Will Find

This site has two types of content:

- **Timeline**  
  Answers: which technical nodes matter, what stage they are in, and where they are heading.  
  Each node includes engineering significance and adoption judgment, not just hype.

- **Guide tutorials**  
  Answers: how to actually do the work. We keep updating three blocks:
  1. Core ideas and hands-on methods for vibe coding
  2. Practical onboarding paths for key timeline technologies (how to use, when to use, common pitfalls)
  3. Concrete AI productivity workflows (browser operation, PPT generation, data handling, and more)

---

## How to Use This Site

Recommended flow:

**1. Start with the timeline to decide what to learn**  
Use homepage filter sets to narrow by year and adoption effort, then check recommended and key nodes.

**2. Use evolution labels to decide whether to adopt now**  
Treat `phase / trend / signal` as three decision questions:

- Is this a mature approach or an early one?
- Is it rising, stable, or being replaced/shrinking?
- Is community attention aligned with real engineering value?

**3. Go to Guide for implementation details**  
Open the matching tutorial and focus on: minimum runnable path, recommended setup, common mistakes, and migration patterns.

---

**Example:** [`everything-claude-code`](https://github.com/affaan-m/everything-claude-code) is popular, and the content is genuinely solid. The README includes a Quick Start, but real onboarding can still feel heavy: beyond installing plugins, you often need to handle rules, install dependencies, and run scripts per language/workflow. Some users end up feeling that after all the setup, outcomes are not better by default.

Before AGI fully arrives, hopefully this site helps you waste less time on avoidable detours.
