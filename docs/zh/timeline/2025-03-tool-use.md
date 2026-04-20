---
title: Tool Use（工具调用）
date: 2025-03-11
year: 2025
summary: 一种将函数调用扩展为更广义工具交互与编排的能力范式，标志着 AI 系统从“单点 API 调用”走向“可组合工具系统”。
phase: emerging
trend: rising
signal: well-calibrated
tags: [tool-use, tools, agent, orchestration, function-calling]
author: Qiuner
authored_by: ai-assisted
---

# Tool Use

- 官方能力升级节点：2025-03-11
- 官方资料：
  - OpenAI（New tools for building agents）：https://openai.com/index/new-tools-for-building-agents/
  - Anthropic（Tool use overview）：https://docs.anthropic.com/en/docs/build-with-claude/tool-use
- 演进说明：该条目记录的是 `Function Calling -> Tool Use` 的能力泛化，不是独立于 Function Calling 的全新底层机制。

## 它是什么

Tool Use 是一种更广义的工具交互范式：模型不只是输出单次函数参数，还能在任务过程中选择、调用、组合并调度多种外部工具。

在这个范式里，“函数调用”被视为其中一种具体工具调用形式，系统重点转向工具生态接入、调用策略、执行反馈与多步协作。

## 它把 AI 应用工程从哪一步推进到了哪一步

它把 AI 应用工程从“结构化调用单个函数/API”推进到了“面向任务目标编排多个工具协同执行”。

这意味着工程焦点从参数格式正确与否，进一步扩大到工具选择、调用顺序、上下文传递、错误恢复与结果整合，系统级复杂度明显提升，也带来了更高上限。

## 为什么要单独成篇

Tool Use 与 Function Calling 属于同一能力线，但它代表了边界扩张与工程重心迁移。

Function Calling 更强调“把调用做对”；Tool Use 更强调“把整套工具系统用好”。在时间轴上分两篇可以更清楚地记录这次能力升级拐点，而不是把它们混成同一阶段。

## 现在看，它处于什么阶段

目前我把 Tool Use 标记为 `emerging`。

原因是主流平台已经把它作为核心能力方向公开推进，但跨平台统一协议、可观测性标准和成本控制实践还在快速演化中。

换句话说，趋势明确，但最佳实践仍在形成。

## 它可能替代什么

它可能替代一部分“单函数调用 + 人工串联步骤”的半自动流程。

随着 Tool Use 成熟，系统会更多采用模型驱动的多工具动态协作，而不是把大部分编排逻辑硬编码在业务侧。

## 它可能被什么替代

未来它更可能被更高层执行编排标准吸收，而不是消失。

例如，统一任务图协议、标准化 agent 通信层、系统级执行治理平台，可能把今天的 Tool Use 实践进一步抽象成更稳定的工程框架。
