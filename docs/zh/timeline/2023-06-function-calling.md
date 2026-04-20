---
title: Function Calling（函数调用）
date: 2023-06-13
year: 2023
summary: 一种让模型按结构化参数调用外部函数/API 的能力，标志着 LLM 从“只会生成文本”进入“可执行动作”的工程阶段。
phase: mainstream
trend: absorbed
signal: well-calibrated
tags: [function-calling, tools, api, orchestration, reliability]
author: Qiuner
authored_by: ai-assisted
---

# Function Calling

- 官方发布节点：2023-06-13
- 官方资料：
  - OpenAI 发布公告：https://openai.com/index/function-calling-and-other-api-updates/
  - OpenAI 文档指南：https://platform.openai.com/docs/guides/function-calling
- 演进说明：该能力线在后续阶段被更广义地纳入 `Tool Use` 叙事，见 `2025-03-tool-use` 条目。

## 它是什么

Function Calling 是一种让模型输出严格遵循函数签名（JSON 参数结构），并触发外部工具/API 执行的能力。

它的核心不是“调用函数”这个动作本身，而是把模型意图转成可执行、可校验、可追踪的结构化接口请求。

## 它把 AI 应用工程从哪一步推进到了哪一步

它把 AI 应用工程从“模型给自然语言建议”推进到“模型输出可执行指令并进入系统流程”。

在 Function Calling 之前，很多系统需要把模型文本结果再做二次解析，稳定性和可控性较差。Function Calling 之后，开发者可以直接围绕函数签名、参数校验和错误处理组织执行链路，系统可靠性显著提高。

这一步让 Agent、工作流编排、业务自动化真正进入可工程化阶段。

## 现在看，它处于什么阶段

目前我把 Function Calling 标记为 `mainstream`。

原因是结构化工具调用已经成为主流 LLM 应用的基础能力之一，几乎所有生产级 AI 系统都在某种形式上依赖它。

同时，它的能力边界也在扩展：从“函数参数调用”逐步走向“更广义工具交互”，这也是后续 Tool Use 叙事形成的背景。

## 它可能替代什么

它替代了一部分“文本指令 + 正则解析 + 人工兜底”的脆弱链路。

随着该范式成熟，开发者更少依赖松散 prompt 约束，更多依赖类型化接口和执行反馈闭环。

## 它可能被什么替代

它更可能被上层抽象吸收，而不是被彻底淘汰。

未来更通用的 Tool Use 框架、多工具编排协议和执行环境标准会把 Function Calling 作为底层能力内化进去，而非完全抛弃其结构化调用思想。
