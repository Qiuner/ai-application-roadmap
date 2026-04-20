---
title: Prompt Engineering（提示词工程）
date: 2022-11-30
year: 2022
summary: 一种通过系统化设计提示词来稳定控制模型输出的工程方法，标志着 AI 应用从“随便问问”走向“可设计、可复现”的交互编程阶段。
phase: mainstream
trend: absorbed
signal: well-calibrated
tags: [prompt-engineering, llm, prompting, workflow, reliability]
author: Qiuner
authored_by: ai-assisted
---

# Prompt Engineering

- 进入主流时间节点：2022-11-30（ChatGPT 面向公众发布，提示词工程进入大规模实践阶段）
- 官方介绍：
  - https://platform.openai.com/docs/guides/prompt-engineering
  - https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- 说明：此条目用于记录 Prompt Engineering 成为 AI 应用基础方法论的时间节点与阶段意义，具体模板、技巧和案例应放在 Guide 中展开。

## 它是什么

Prompt Engineering（提示词工程）是一套系统化设计输入指令的工程方法，用于提升模型输出的可控性、一致性和任务完成率。

它不是“写几句漂亮提示词”，而是围绕角色设定、上下文组织、输出格式约束、步骤分解和反馈迭代建立可复用流程。

## 它把 AI 应用工程从哪一步推进到了哪一步

它把 AI 应用工程从“自然语言随手提问、结果靠运气”推进到了“有结构地设计输入、按目标稳定获得输出”。

在 Prompt Engineering 成熟之前，很多团队对模型的使用方式是临时试错：同一个问题换个人问，结果质量波动很大。Prompt Engineering 出现后，团队开始沉淀模板、范式和评估标准，让模型交互进入可复现、可优化、可协作的工程阶段。

这一步非常关键，因为后续的 Function Calling、Agent 编排、Skills 封装，本质上都建立在“先把模型行为组织起来”这个基础之上。

## 现在看，它处于什么阶段

目前我把 Prompt Engineering 标记为 `mainstream`。

原因是它已经成为几乎所有 LLM 应用的基础能力：无论是个人使用、产品设计还是企业落地，提示词设计都不是可选项，而是默认工程工作的一部分。

但随着模型能力增强，提示词写得过于细碎、过于“手把手”，有时反而会限制模型发挥。你把每一步都写死，模型可用的推理与规划空间会变小，最终效果不一定更好。

与此同时，它也在被更高层的机制逐步吸收，例如结构化输出、工具调用、工作流编排和可复用 Skills。但这些机制并没有取代 Prompt Engineering，而是把它从“单点技巧”升级为“系统设计的一层”。

## 它可能替代什么

它替代了早期“把模型当搜索框或聊天框随机试”的交互方式，把“对话”变成一种可设计、可迭代的任务编排手段。

在团队协作中，它也替代了大量不可复用的口头经验，让“谁会问问题”变成“团队如何定义问题与输出标准”。

## 它可能被什么替代

未来它不太可能被完全替代，更可能被“上层抽象”逐步包裹。

如果出现更成熟的任务图编排标准、自动提示词优化器、或更强约束的模型接口层，Prompt Engineering 的显式工作量会下降，但其核心思想会内化为这些系统的一部分，而不是彻底消失。
