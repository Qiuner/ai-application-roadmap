<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { AUTHORED_BY_LABELS, PHASE_LABELS, SIGNAL_LABELS, TREND_LABELS } from './labels'
import { getTimelineDisplayMeta, getTimelineSlugFromRelativePath } from '../../timeline.flags'

type TimelinePhase = 'mainstream' | 'emerging' | 'legacy'
type TimelineTrend = 'rising' | 'stable' | 'absorbed' | 'shrinking' | 'obsolete'
type TimelineSignal = 'over-hyped' | 'under-rated' | 'over-scoped' | 'well-calibrated'
type AuthoredBy = 'human' | 'ai-assisted' | 'ai-generated' | 'unknown'

const { page, frontmatter, lang } = useData()

const isZh = computed(() => String(lang.value).toLowerCase().startsWith('zh'))
const relativePath = computed(() => String(page.value.relativePath ?? ''))
const show = computed(() => /(^|\/)timeline\/.+\.md$/i.test(relativePath.value))
const slug = computed(() => getTimelineSlugFromRelativePath(relativePath.value))

const formatDateValue = (value: unknown): string => {
  if (typeof value === 'string') return value
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10)
  return String(value ?? '')
}

const date = computed(() => formatDateValue(frontmatter.value.date))
const phase = computed(() => String(frontmatter.value.phase ?? 'emerging') as TimelinePhase)
const trend = computed(() => String(frontmatter.value.trend ?? 'stable') as TimelineTrend)
const signal = computed(() => String(frontmatter.value.signal ?? 'well-calibrated') as TimelineSignal)
const author = computed(() => String(frontmatter.value.author ?? 'qiuner'))
const maintainer = computed(() => String(frontmatter.value.maintainer ?? frontmatter.value.author ?? 'qiuner'))
const key = computed(() => getTimelineDisplayMeta(slug.value, isZh.value ? 'zh' : 'en').key)
const authoredBy = computed(() => String(frontmatter.value.authored_by ?? 'unknown'))
const tags = computed(() =>
  Array.isArray(frontmatter.value.tags) ? frontmatter.value.tags.map((t) => String(t)) : [],
)

const phaseLabel = computed(() => {
  const lang = isZh.value ? 'zh' : 'en'
  const value = phase.value as TimelinePhase
  return PHASE_LABELS[lang][value] ?? PHASE_LABELS[lang].emerging
})

const trendLabel = computed(() => {
  const lang = isZh.value ? 'zh' : 'en'
  const value = trend.value as TimelineTrend
  return TREND_LABELS[lang][value] ?? TREND_LABELS[lang].stable
})

const signalLabel = computed(() => {
  const lang = isZh.value ? 'zh' : 'en'
  const value = signal.value as TimelineSignal
  return SIGNAL_LABELS[lang][value] ?? SIGNAL_LABELS[lang]['well-calibrated']
})

const authoredByLabel = computed(() => {
  const lang = isZh.value ? 'zh' : 'en'
  const value = authoredBy.value as AuthoredBy
  return AUTHORED_BY_LABELS[lang][value] ?? ''
})
</script>

<template>
  <div v-if="show" class="cs-doc-meta">
    <span class="cs-doc-meta-item">{{ date }}</span>
    <span class="cs-doc-meta-item">{{ phaseLabel }}</span>
    <span class="cs-doc-meta-item">{{ trendLabel }}</span>
    <span class="cs-doc-meta-item">{{ signalLabel }}</span>
    <span v-if="key" class="cs-doc-meta-item cs-doc-meta-key">{{ isZh ? '关键' : 'KEY' }}</span>
    <span v-if="authoredByLabel" class="cs-doc-meta-item cs-doc-meta-origin">{{ authoredByLabel }}</span>
    <span class="cs-doc-meta-item">{{ isZh ? `作者 @${author}` : `by @${author}` }}</span>
    <span class="cs-doc-meta-item">{{ isZh ? `维护者 @${maintainer}` : `maintainer @${maintainer}` }}</span>
    <span v-for="tag in tags" :key="tag" class="cs-doc-meta-item cs-doc-meta-tag">#{{ tag }}</span>
  </div>
</template>
