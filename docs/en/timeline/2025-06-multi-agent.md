---
title: Multi-agent
date: 2025-06-13
year: 2025
summary: A system architecture where multiple software agents collaborate through role specialization to complete complex tasks, entering mainstream production discussion in the LLM engineering era.
phase: emerging
trend: rising
signal: well-calibrated
tags: [multi-agent, agent, orchestration, collaboration, llmops]
author: Qiuner
authored_by: ai-assisted
---

# Multi-agent

- LLM engineering mainstream milestone: 2025-06-13
- Official references:
  - Anthropic (engineering framework): https://www.anthropic.com/engineering/building-effective-agents
  - Anthropic (production system): https://www.anthropic.com/engineering/multi-agent-research-system
  - OpenAI (application case): https://openai.com/index/consensus/
- Historical origin note (classical AI):
  - Contract Net Protocol (1980): https://reidgsmith.com/The_Contract_Net_Protocol_Dec-1980.pdf
- Note: This entry records when Multi-agent became mainstream in LLM application engineering, not the earliest origin of the concept in AI history.

## What It Is

Multi-agent is a system architecture where multiple software agents divide work, collaborate, and merge results to complete tasks.

Here, "multi-agent" means multiple programmatic agents, not human teamwork. Each agent can take different roles such as planning, retrieval, execution, review, and synthesis, while an orchestration layer handles task routing, state passing, and result merging.

## What Step It Moved AI Application Engineering From and To

It moved AI application engineering from "single-agent serial execution" to "parallel multi-role collaborative execution."

Under single-agent patterns, complex tasks are often limited by context size, single-thread reasoning speed, and quality variance from role mixing. Multi-agent systems decompose responsibilities and parallelize search, reasoning, verification, and writing, then aggregate and regress-check results at orchestration level.

This moves AI systems from "able to answer questions" toward "able to reliably complete complex workflows."

## Why the Date Is 2025-06-13

Multi-agent as an AI concept is not new. It has long roots in distributed intelligence research, with Contract Net Protocol in 1980 as an early landmark.

But in LLM engineering context, 2025-06-13 is a better milestone: Anthropic publicly shared production multi-agent research system construction and practical gains, signaling a shift from experimental discussion to reusable engineering practice.

## What Stage It Is In Now

I currently mark Multi-agent as `emerging`.

It has been validated by leading teams and is spreading across more toolchains and product forms. But standards for orchestration, observability, cost governance, failure recovery, and cross-platform interoperability are still rapidly evolving.

In short, Multi-agent is already a trend-level consensus, but not yet a default standard practice.

## What It Might Replace

It can replace part of "single agent handles everything" system designs, especially for long workflows, high-uncertainty tasks, and multi-step verification jobs.

As orchestration matures, teams will rely less on giant one-shot prompts and single big model calls, and more on "role split + parallel execution + aggregate validation."

## What Might Replace It

It is more likely to be absorbed by higher-level orchestration abstractions than fully eliminated.

Examples include automated task-graph compilers, standardized agent communication protocols, and system-level quality orchestration platforms that productize and standardize today's multi-agent practice.

