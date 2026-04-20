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
      en: 'It turned model interaction from random trial-and-error into a methodical practice, laying the foundation for later paths such as Agents, Function Calling, and Skills.',
      zh: '让“和模型对话”从随机试错升级为可方法化实践，是后续 Agent、Function Calling、Skills 等技术路径的底层起点。',
    }, 
  },
  '2023-06-function-calling': {
    recommended: false,
    key: false,
    keyReason: {
      en: 'It moved model output from unstructured text to executable parameters, which is a key starting point for verifiable AI automation.',
      zh: '把模型输出从非结构化文本推进到可执行参数，是 AI 应用走向可验证自动化的关键起点。',
    },
  },
  '2023-11-rag': {
    recommended: false,
    key: true,
    keyReason: {
      en: 'RAG expanded model memory from "parameters only" to a dual-memory paradigm of "parameters + external retrieval," directly shaping default architectures for enterprise knowledge QA and agent systems.',
      zh: 'RAG 把“模型参数记忆”扩展为“参数 + 外部知识检索”的双记忆范式，直接影响了后续企业知识库问答与 Agent 系统的默认架构。',
    },
  },
  '2024-11-mcp': {
    recommended: true,
    key: true,
    keyReason: {
      en: 'It marks the shift from ad hoc API calls to standardized capability access, providing an HTTP-like interface layer for the AI agent ecosystem.',
      zh: '标志着大模型从“调用 API”阶段迈入“标准化能力接入”，为 AI Agent 生态提供类似 HTTP 的统一接口层。',
    },
  },
  '2025-03-tool-use': {
    recommended: false,
    key: true,
    keyReason: {
      en: 'It is not a brand-new invention, but a generalized and system-level upgrade of Function Calling that moves AI engineering from single-function invocation to multi-tool collaboration.',
      zh: '不是全新发明，而是对 Function Calling 的能力泛化与系统升级，让 AI 工程从单函数调用进入多工具协作阶段。',
    },
  },
  '2025-06-multi-agent': {
    recommended: true,
    key: true,
    keyReason: {
      en: 'It moves AI applications from single-model single-thread execution to parallel multi-role collaboration, significantly increasing the ceiling and scalability of complex tasks.',
      zh: '将 AI 应用从“单模型单线程执行”推进到“多角色并行协作执行”，显著提升复杂任务上限与可扩展性。',
    },
  },
  '2025-09-context-engineering': {
    recommended: true,
    key: true,
    keyReason: {
      en: 'It upgrades the core quality question from "how to ask" to "how to build and manage sustainable context," providing key methodology for complex agent tasks.',
      zh: '把 AI 系统质量的核心问题从“怎么提问”升级为“如何构建与管理可持续上下文”，为复杂 Agent 任务提供了关键方法论。',
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
      en: 'It upgrades the AI development target from "write better prompts" to "build sustainable operating environments," clarifying the core mission of production-grade AI engineering.',
      zh: '把 AI 开发目标从“写出更好提示词”升级为“搭建可持续运行的系统环境”，明确了生产级 AI 工程的核心任务。',
    },
  },
  '2026-02-skills': {
    recommended: true,
    key: true,
    keyReason: {
      en: 'It marks the shift from one-off conversation-driven use to reusable workflow-driven execution, allowing experience, formats, and procedures to be stably packaged as execution units.',
      zh: '标志着 AI 应用从“单次对话驱动”进入“可复用工作流驱动”阶段，让经验、格式和步骤第一次能被稳定封装为执行单元。',
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
