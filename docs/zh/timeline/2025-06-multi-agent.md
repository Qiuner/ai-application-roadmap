---
title: Multi-agent（多智能体协作）
date: 2025-06-13
year: 2025
summary: 一种通过多个软件智能体分工协作完成复杂任务的系统架构，在 LLM 工程化阶段进入生产级实践主流讨论。
phase: emerging
trend: rising
signal: well-calibrated
tags: [multi-agent, agent, orchestration, collaboration, llmops]
author: Qiuner
authored_by: ai-assisted
---

# Multi-agent

- LLM 工程化主流节点：2025-06-13
- 官方资料：
  - Anthropic（工程框架）：https://www.anthropic.com/engineering/building-effective-agents
  - Anthropic（生产系统）：https://www.anthropic.com/engineering/multi-agent-research-system
  - OpenAI（应用案例）：https://openai.com/index/consensus/
- 概念起源补充（经典 AI）：
  - Contract Net Protocol（1980）：https://reidgsmith.com/The_Contract_Net_Protocol_Dec-1980.pdf
- 说明：本文记录的是 Multi-agent 在 LLM 应用工程中的主流化时间点，不是该概念在 AI 领域的最早起点。

## 它是什么

Multi-agent（多智能体协作）是一种让多个软件智能体分工、协同、汇总结果来完成任务的系统架构。

这里的“多智能体”指多个程序智能体，不是多人协作。每个 agent 可以承担不同角色，例如规划、检索、执行、审校与整合，系统通过编排层进行任务分发、状态传递和结果合并。

## 它把 AI 应用工程从哪一步推进到了哪一步

它把 AI 应用工程从“单 Agent 串行执行”推进到了“多角色并行协作执行”。

在单 Agent 模式下，复杂任务经常受限于上下文长度、单线程推理速度和角色混杂导致的质量波动。Multi-agent 让系统能够按职能拆分任务，把搜索、推理、验证、写作等环节并行化，并在编排层进行汇总与回归检查。

这一步让 AI 系统从“能回答问题”迈向“能稳定完成复杂工作流”。

## 为什么时间点是 2025-06-13

Multi-agent 作为 AI 概念并不新。它在经典 AI 的分布式智能研究中早已存在，1980 年的 Contract Net Protocol 就是早期代表。

但在 LLM 工程语境中，2025-06-13 是一个更合适的节点：Anthropic 公开了生产级 multi-agent research system 的构建方式与实战收益，标志着该范式从“实验性讨论”进入“可复用工程实践”的主流视野。

## 现在看，它处于什么阶段

目前我把 Multi-agent 标记为 `emerging`。

原因是它已经在头部团队中被验证有效，并持续扩散到更多工具链和产品形态；但在通用编排标准、可观测性、成本控制、失败恢复和跨平台互操作性上，仍处于快速演化阶段。

换句话说，Multi-agent 已经成为趋势共识，但离“默认标准做法”还有距离。

## 它可能替代什么

它可能替代一部分“单 Agent 扛全部任务”的系统设计，尤其是长流程、高不确定性、多步骤验证类任务。

随着编排能力成熟，团队会更少依赖单点超长提示词和一次性大模型调用，更多采用“角色拆分 + 并行执行 + 汇总校验”的体系化执行模型。

## 它可能被什么替代

未来它更可能被更高层编排抽象吸收，而不是被完全淘汰。

例如，更自动化的任务图编译器、标准化 agent 通信协议、系统级质量编排平台，可能降低手工编排多 agent 的复杂度，把今天的 multi-agent 实践进一步产品化与标准化。
