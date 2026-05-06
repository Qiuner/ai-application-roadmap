export type TimelineLocale = 'en' | 'zh'

type LocalizedText = {
  en: string
  zh: string
}

type TimelineEditorialFlags = {
  recommended: boolean
  key: boolean
  keyReason: LocalizedText
}

const DEFAULT_FLAGS: TimelineEditorialFlags = {
  recommended: false,
  key: false,
  keyReason: { en: '', zh: '' },
}

const TIMELINE_EDITORIAL_FLAGS: Record<string, TimelineEditorialFlags> = {
  '2022-11-prompt-engineering': {
    recommended: false,
    key: false,
    keyReason: {
      en: 'Large language models are inherently probabilistic — the same prompt can yield different answers. Prompt engineering helps reduce this variance by setting roles, formats, and constraints, making outputs more stable and controllable. It also serves as the foundation for later paradigms like agents, function calling, and skills.',
      zh: '大模型本质上是概率生成的，同一个问题也可能有不同回答。prompt engineering 的意义，是通过设定角色、格式等方式，把这种“发散输出”尽量收敛成更稳定、更可控的结果，是后续 Agent、Function Calling、Skills 等技术路径的底层起点。',
    },
  },
  '2023-06-function-calling': {
    recommended: false,
    key: false,
    keyReason: {
      en: 'Models are fundamentally text generators — they can describe actions but cannot execute them. Function calling introduces a “capability menu,” allowing the model to choose tools and fill in structured arguments when needed. This turns plain responses into real, executable actions, marking the shift from “just talking” to “actually doing.”',
      zh: '模型本质上只会"说话"——你问它帮你查天气，它最多给你一段描述，但什么都不会真的发生。Function calling 的意义，是给模型一份"能力菜单"，让它在需要时自己决定调哪个工具、填什么参数，把一句回答变成一个真实执行的动作。它是模型从"会说"走向"会做"的关键一步，也是 Agent 能真正操控外部世界的基础。',
    },
  },
  '2023-11-rag': {
    recommended: false,
    key: true,
    keyReason: {
      en: 'Models used to rely only on what was baked into training. RAG changes this by letting them retrieve information before answering. Instead of guessing from memory, the model can ground its response in external knowledge. This is now the standard approach for enterprise QA and agent systems.',
      zh: '模型的知识是训练时"背进去"的，一旦训练完就冻住了——你问它昨天的新闻、公司内部文档，它要么不知道，要么瞎编。RAG 的意义，是在模型回答之前先去检索相关资料，把找到的内容塞进上下文，让模型"有据可查"地回答，而不是靠记忆硬撑。它是让模型接入私有知识、实时信息的最直接方式，也是企业落地 AI 问答场景的标配方案。',
    },
  },
  '2024-11-mcp': {
    recommended: true,
    key: true,
    keyReason: {
      en: 'As tools proliferate, integrating each one individually becomes unsustainable. MCP introduces a standardized “plug interface” between models and tools. As long as a tool follows the protocol, it can be directly used without custom integration. This shifts the ecosystem from fragmented integrations to plug-and-play extensibility.',
      zh: '工具越来越多，但每接一个新工具，都要重新写一套对接代码——格式不同、调用方式不同，Agent 系统很快就变成一堆定制胶水代码。MCP 的意义，是给模型和外部工具之间定了一套统一的"插座标准"，工具只要按这个标准暴露接口，模型就能直接调用，不用每次重新适配。它让 Agent 的工具生态从"各自为政"走向"即插即用"，是构建可扩展 AI 系统的基础协议。',
    },
  },
  '2025-03-tool-use': {
    recommended: false,
    key: true,
    keyReason: {
      en: 'This is not a brand-new concept, but a system-level generalization of function calling. Function calling answers “how to call,” while tool use expands “what can be called.” Tools now include search engines, code interpreters, browsers, and databases. It extends the model’s capability boundary from language to all callable external resources.',
      zh: '不是全新发明，而是对 Function Calling 的能力泛化与系统升级。function calling 解决的是"怎么调用"，tool use 关注的是"能调用什么"。工具不只是函数——搜索引擎、代码执行器、浏览器、数据库，都可以是模型的工具。tool use 的意义，是把模型的能力边界从"语言"延伸到"一切可调用的外部资源"，让 Agent 真正具备与现实世界交互的手脚。',
    },
  },
  '2025-06-multi-agent': {
    recommended: true,
    key: true,
    keyReason: {
      en: 'A single agent is limited by context length and sequential execution. Multi-agent systems break complex tasks into parallel roles — one searches, one analyzes, one writes — resembling real team collaboration. This significantly raises the ceiling for handling long and complex workflows.',
      zh: '一个 Agent 再能干，也有上下文长度、单线程执行的天花板。multi-agent 的意义，是把一个复杂任务拆给多个 Agent 并行处理——一个负责搜索、一个负责分析、一个负责输出——像一个真正的团队协作，而不是一个人从头忙到尾。它让 AI 系统突破单个模型的能力边界，是处理长流程、高复杂度任务的必然选择。',
    },
  },
  '2025-09-context-engineering': {
    recommended: true,
    key: true,
    keyReason: {
      en: 'Prompt engineering focuses on “how to ask,” but model performance largely depends on “what it sees.” Context engineering systematically organizes conversation history, retrieved knowledge, and tool outputs, ensuring the model reasons over the right information. It is the backbone of RAG and agent memory systems.',
      zh: 'prompt-engineering 解决的是"怎么问"，但大模型能表现多好，很大程度取决于它"看到了什么"。context engineering 的意义，是把对话历史、外部知识、工具返回结果等信息，有策略地组织和筛选后塞进模型的"视野"里，让它在正确的信息下做出更准确的判断——是 RAG、Agent 记忆管理等技术的核心支撑。',
    },
  },
  '2026-01-openclaw': {
    recommended: false,
    key: false,
    keyReason: { en: '', zh: '' },
  },
  '2026-01-openspec': {
    recommended: false,
    key: false,
    keyReason: { en: '', zh: '' },
  },
  '2026-02-harness-engineering': {
    recommended: false,
    key: true,
    keyReason: {
      en: 'Prompts control how the model speaks, and context controls what it sees — but neither guarantees reliability. Harness engineering builds the surrounding system: tool orchestration, memory, error handling, and state tracking. Instead of hoping prompts fix failures, it eliminates them at the system level, making agents production-ready.',
      zh: 'prompt 管"怎么说"，context 管"看到什么"，但光靠这两件事，模型依然会犯错、会失控。harness engineering 的意义，是把模型之外的一切——工具调用、记忆管理、错误恢复、状态追踪——设计成一套稳定的"脚手架"，每次模型出错，不是靠调整 prompt 祈祷下次变好，而是在系统层面堵死这个漏洞。是让 Agent 真正能跑在生产环境里的关键一层。',
    },
  },
  '2026-02-skills': {
    recommended: true,
    key: true,
    keyReason: {
      en: 'Even with tools and context, models still have to figure out workflows from scratch each time. Skills package prompts, tool usage, and execution steps into reusable units. When facing familiar tasks, the model can directly invoke them instead of re-deriving the process. This shifts agents from ad hoc assembly to reusable, standardized building blocks.',
      zh: '有了工具、有了上下文，模型还是得每次从头想"该怎么做"——这就像一个厨师每次做菜都要重新发明菜谱。Skills 的意义，是把"提示词 + 工具调用 + 执行步骤"打包成一个可复用的单元，模型遇到熟悉的任务时直接调用，不用每次重新推理。它让 Agent 从"临时拼凑"走向"开箱即用"，也是构建大规模、标准化 Agent 系统的基础积木。',
    },
  },
}

const normalizeSegment = (value: string): string =>
  value
    .replace(/\/+$/, '')
    .replace(/\/index$/i, '')
    .replace(/\.(md|html?)$/i, '')

export const getTimelineSlugFromUrl = (url: string): string => {
  const segment = normalizeSegment(String(url ?? '').split('/').filter(Boolean).at(-1) ?? '')
  return segment
}

export const getTimelineSlugFromRelativePath = (relativePath: string): string => {
  const segment = normalizeSegment(String(relativePath ?? '').split('/').filter(Boolean).at(-1) ?? '')
  return segment
}

export const getTimelineEditorialFlags = (slug: string): TimelineEditorialFlags => {
  return TIMELINE_EDITORIAL_FLAGS[slug] ?? DEFAULT_FLAGS
}

export const getTimelineDisplayMeta = (slug: string, locale: TimelineLocale) => {
  const flags = getTimelineEditorialFlags(slug)
  return {
    recommended: flags.recommended,
    key: flags.key,
    keyReason: flags.keyReason[locale],
  }
}
