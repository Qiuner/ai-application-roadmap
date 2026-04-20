---
title: OpenSpec（规范驱动开发）
date: 2026-01-26
year: 2026
summary: 一种把需求、规格、设计与任务拆解为可追踪工件的 AI 协作框架，推动“先对齐规格再让 AI 实施”成为可执行流程。
phase: emerging
trend: rising
signal: well-calibrated
adoption_effort: ready-to-use
tags: [openspec, spec-driven-development, sdd, workflow, agent, ai-engineering]
author: Qiuner
authored_by: ai-assisted
---

# OpenSpec

- 重要时间点：
  - 首次发布（npm 0.1.0）：2025-09-06
  - 1.0.0 版本发布时间：2026-01-26
- 官方资料：
  - https://github.com/Fission-AI/OpenSpec
  - https://www.npmjs.com/package/@fission-ai/openspec
  - https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md
- 说明：此条目用于记录 OpenSpec 作为规范驱动 AI 开发框架的公开演进节点与阶段意义。

## 它是什么

OpenSpec 是一个面向 AI 编码协作的规范驱动开发框架（Spec-Driven Development, SDD）。

按照官方文档，它通过 `proposal.md`、`specs/`、`design.md`、`tasks.md` 这组工件，把“为什么做、做什么、怎么做、如何实施”拆成可迭代维护的结构化流程，而不是把关键决策全部留在聊天上下文里。

## 它把 AI 应用工程从哪一步推进到了哪一步

它把很多团队的 AI 开发方式从“提示词 + 即时改代码”推进到“先形成规格工件，再进入实现与归档”。

OpenSpec 官方默认路径是 `/opsx:propose -> /opsx:apply -> /opsx:archive`。这意味着需求澄清、方案设计、任务分解与最终落档被连成同一条工作流，降低了多人协作或长周期迭代时的语义漂移问题。

## 现在看，它处于什么阶段

目前我把 OpenSpec 标记为 `emerging`。

原因是它已经形成可安装的 CLI、明确的工件模型、跨工具集成路径，并在 2026-01-26 发布 1.0.0；但它仍是快速演进中的生态项目，团队落地方式与组织级治理范式还在持续形成。

## 它可能替代什么

它可能替代一部分“仅靠聊天记录管理需求”的 AI 开发习惯，以及分散在文档、任务系统、临时提示词之间的弱连接流程。

特别在多轮迭代和多人协作场景下，OpenSpec 这种工件化链路可以让“需求-设计-实施”关系更可追踪。

## 它可能被什么替代

如果未来出现更统一的“规范 + 执行 + 验证 + 归档”标准协议，OpenSpec 可能被上层平台能力吸收。

例如，更深度集成到 IDE/Agent Runtime 的系统级工作流编排，可能把当前以仓库工件为中心的实践进一步标准化。
