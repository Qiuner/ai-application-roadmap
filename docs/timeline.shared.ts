import { createContentLoader } from 'vitepress'
import {
  ADOPTION_EFFORT_VALUES,
  PHASE_VALUES,
  SIGNAL_VALUES,
  TREND_VALUES,
  type AdoptionEffort,
  type TimelinePhase,
  type TimelineSignal,
  type TimelineTrend,
} from './.vitepress/theme/labels'
import { getTimelineDisplayMeta, getTimelineSlugFromUrl, type TimelineLocale } from './timeline.flags'

export type TimelineItem = {
  title: string
  date: string
  year: number
  summary: string
  url: string
  phase: TimelinePhase
  trend: TimelineTrend
  signal: TimelineSignal
  tags: string[]
  recommended: boolean
  author: string
  maintainer: string
  key: boolean
  keyReason: string
  authoredBy: 'human' | 'ai-assisted' | 'ai-generated' | 'unknown'
  adoptionEffort: AdoptionEffort
}

const formatDateValue = (value: unknown): string => {
  if (typeof value === 'string') return value
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }
  return String(value ?? '')
}

const extractDateFromSource = (src: unknown): string | null => {
  if (typeof src !== 'string') return null
  const frontmatterMatch = src.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!frontmatterMatch) return null
  const dateLineMatch = frontmatterMatch[1].match(/^\s*date:\s*(.+)\s*$/m)
  if (!dateLineMatch) return null
  return dateLineMatch[1].trim().replace(/^['"]|['"]$/g, '')
}

const resolveAdoptionEffort = (frontmatter: Record<string, unknown>): AdoptionEffort => {
  return ADOPTION_EFFORT_VALUES.includes(frontmatter.adoption_effort as AdoptionEffort)
    ? (frontmatter.adoption_effort as AdoptionEffort)
    : 'ready-to-use'
}

const resolvePhase = (frontmatter: Record<string, unknown>): TimelinePhase => {
  if (PHASE_VALUES.includes(frontmatter.phase as TimelinePhase)) return frontmatter.phase as TimelinePhase
  if (frontmatter.status === 'mainstream') return 'mainstream'
  if (frontmatter.status === 'declining') return 'legacy'
  return 'emerging'
}

const resolveTrend = (frontmatter: Record<string, unknown>): TimelineTrend => {
  if (TREND_VALUES.includes(frontmatter.trend as TimelineTrend)) return frontmatter.trend as TimelineTrend
  if (frontmatter.status === 'mainstream') return 'stable'
  if (frontmatter.status === 'declining') return 'shrinking'
  return 'rising'
}

const resolveSignal = (frontmatter: Record<string, unknown>): TimelineSignal => {
  return SIGNAL_VALUES.includes(frontmatter.signal as TimelineSignal)
    ? (frontmatter.signal as TimelineSignal)
    : 'well-calibrated'
}

const toTimelineItem = (item: { url: string; frontmatter: Record<string, unknown>; src?: unknown }): TimelineItem => {
  const { url, frontmatter } = item
  const rawDate = extractDateFromSource(item.src)
  const date = rawDate ?? formatDateValue(frontmatter.date)
  const slug = getTimelineSlugFromUrl(url)
  const locale: TimelineLocale = url.startsWith('/zh/') ? 'zh' : 'en'
  const editorial = getTimelineDisplayMeta(slug, locale)

  return {
    title: String(frontmatter.title ?? ''),
    date,
    year: Number(String(frontmatter.year ?? date.slice(0, 4) ?? '0')) || 0,
    summary: String(frontmatter.summary ?? ''),
    url,
    phase: resolvePhase(frontmatter),
    trend: resolveTrend(frontmatter),
    signal: resolveSignal(frontmatter),
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags.map((t) => String(t).toLowerCase()) : [],
    recommended: editorial.recommended,
    author: String(frontmatter.author ?? 'qiuner').toLowerCase(),
    maintainer: String(frontmatter.maintainer ?? frontmatter.author ?? 'qiuner').toLowerCase(),
    key: editorial.key,
    keyReason: editorial.keyReason,
    authoredBy:
      frontmatter.authored_by === 'human' ||
      frontmatter.authored_by === 'ai-assisted' ||
      frontmatter.authored_by === 'ai-generated'
        ? frontmatter.authored_by
        : 'unknown',
    adoptionEffort: resolveAdoptionEffort(frontmatter),
  }
}

export const createTimelineLoader = (globPattern: string) =>
  createContentLoader(globPattern, {
    transform(raw): TimelineItem[] {
      return raw.map((item) => toTimelineItem(item as { url: string; frontmatter: Record<string, unknown>; src?: unknown })).sort((a, b) => +new Date(b.date) - +new Date(a.date))
    },
  })
