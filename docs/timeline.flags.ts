type TimelineEditorialFlags = {
  recommended: boolean
  key: boolean
}

const DEFAULT_FLAGS: TimelineEditorialFlags = {
  recommended: false,
  key: false,
}

const TIMELINE_EDITORIAL_FLAGS: Record<string, TimelineEditorialFlags> = {
  '2022-11-prompt-engineering': {
    recommended: false,
    key: false,
  },
  '2023-06-function-calling': {
    recommended: false,
    key: false,
  },
  '2023-11-rag': {
    recommended: false,
    key: true,
  },
  '2024-11-mcp': {
    recommended: true,
    key: true,
  },
  '2025-03-tool-use': {
    recommended: false,
    key: true,
  },
  '2025-06-multi-agent': {
    recommended: true,
    key: true,
  },
  '2025-09-context-engineering': {
    recommended: true,
    key: true,
  },
  '2026-01-openclaw': {
    recommended: false,
    key: false,
  },
  '2026-01-openspec': {
    recommended: false,
    key: false,
  },
  '2026-02-harness-engineering': {
    recommended: false,
    key: true,
  },
  '2026-02-skills': {
    recommended: true,
    key: true,
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
