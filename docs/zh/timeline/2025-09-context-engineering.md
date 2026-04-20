---
title: Context Engineering（上下文工程）
date: 2025-09-29
year: 2025
summary: 一种围绕“给模型什么信息、在什么时机给、给多少”来组织任务执行环境的工程方法，标志着 AI 开发从提示词优化走向上下文系统设计。
phase: emerging
trend: rising
signal: well-calibrated
tags: [context-engineering, agent, memory, context-window, llmops]
author: Qiuner
authored_by: ai-assisted
---

# Context Engineering

- 概念系统化公开时间：2025-09-29
- 官方资料：
  - Anthropic Engineering: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
  - OpenAI Cookbook（Session Memory）: https://developers.openai.com/cookbook/examples/agents_sdk/session_memory
  - OpenAI Cookbook（Personalization）: https://developers.openai.com/cookbook/examples/agents_sdk/context_personalization
  - OpenAI 官网案例（Consensus）: https://openai.com/index/consensus/
- 说明：此条目用于记录 Context Engineering 作为工程概念进入主流讨论的时间节点与阶段意义，具体实现细节应放在 Guide 中展开。

## 它是什么

Context Engineering（上下文工程）是一种围绕“模型在执行任务时到底看到什么信息”的系统化工程方法。

它关注的不是单条提示词润色，而是整套上下文生命周期：信息选择、结构组织、注入时机、上下文长度控制、记忆更新、历史压缩与检索策略。

核心问题是：在有限上下文窗口内，如何给模型“最有效、最相关、最及时”的信息组合，从而稳定完成复杂任务。

## 它把 AI 应用工程从哪一步推进到了哪一步

它把 AI 应用工程从“主要围绕 prompt wording 优化输出”推进到了“围绕上下文系统设计任务执行环境”。

在这个阶段，团队开始把“记忆管理、检索策略、上下文剪裁、状态传递、历史压缩”当作一等工程对象，而不是附属技巧。模型效果不再只取决于一句提示词写得好不好，而更取决于上下文系统是否设计合理。

这使得 AI 开发从“对话技巧”进一步进入“信息编排工程”阶段。

## 现在看，它处于什么阶段

目前我把 Context Engineering 标记为 `emerging`。

原因是它已经被头部团队明确命名并给出工程实践框架，且 OpenAI 与 Anthropic 的公开资料都在强化这条路径；但行业内在术语边界、最佳实践标准和统一实现范式上仍在快速演化。

换句话说，它已经成为高质量 Agent 系统的核心共识之一，但还没有完全固化成跨平台统一规范。

## 它可能替代什么

它可能替代“只靠手工 prompt 调参解决复杂任务问题”的开发方式。

随着上下文工程化普及，团队会更少讨论“这句话怎么改”，更多讨论“上下文怎么构建、更新、裁剪和验证”。这会显著减少随机性，提高任务连续性与可维护性。

## 它可能被什么替代

未来它更可能被更高抽象层吸收，而不是被完全淘汰。

例如，自动上下文调度器、统一记忆总线、可观测上下文策略引擎等能力，可能把当前大量手工上下文设计工作进一步平台化与产品化。但“上下文决定系统上限”的核心思想仍会长期存在。
