<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { data as enTimeline } from '../../en/timeline.data'
import { data as zhTimeline } from '../../zh/timeline.data'
import {
  ADOPTION_EFFORT_LABELS,
  ADOPTION_EFFORT_VALUES,
  AUTHORED_BY_LABELS,
  PHASE_LABELS,
  PHASE_VALUES,
  SIGNAL_LABELS,
  SIGNAL_VALUES,
  TREND_LABELS,
  TREND_VALUES,
} from './labels'
import TimelineCard from './TimelineCard.vue'

type Lang = 'en' | 'zh'
type FilterMode = 'base' | 'evolution'
type AuthoredBy = keyof (typeof AUTHORED_BY_LABELS)['en']
type AdoptionEffort = (typeof ADOPTION_EFFORT_VALUES)[number]
type TimelinePhase = (typeof PHASE_VALUES)[number]
type TimelineTrend = (typeof TREND_VALUES)[number]
type TimelineSignal = (typeof SIGNAL_VALUES)[number]

const props = withDefaults(defineProps<{ lang?: Lang }>(), {
  lang: 'en',
})

const isZh = computed(() => props.lang === 'zh')
const timeline = computed(() => (isZh.value ? zhTimeline : enTimeline))

const t = computed(() =>
  isZh.value
    ? {
        title: '时间轴',
        filterSet: '筛选集',
        baseSet: '年份/门槛/推荐',
        evolutionSet: '阶段/走势/认知',
        year: '年份',
        adoptionEffort: '落地门槛',
        phase: '阶段',
        trend: '走势',
        signal: '认知校准',
        recommend: '推荐',
        all: '全部',
        allEfforts: '全部门槛',
        allPhases: '全部阶段',
        allTrends: '全部走势',
        allSignals: '全部信号',
        allItems: '全部条目',
        onlyRecommended: '仅看推荐',
        keyOnly: '仅关键',
        timeline: '时间线',
        newest: '↓ 按时间倒序',
        key: '关键',
        empty: '暂无时间轴条目。',
      }
    : {
        title: 'Timeline',
        filterSet: 'Filter Set',
        baseSet: 'Year/Effort/Rec',
        evolutionSet: 'Phase/Trend/Signal',
        year: 'Year',
        adoptionEffort: 'Adoption Effort',
        phase: 'Phase',
        trend: 'Trend',
        signal: 'Signal',
        recommend: 'Recommended',
        all: 'All',
        allEfforts: 'All Efforts',
        allPhases: 'All Phases',
        allTrends: 'All Trends',
        allSignals: 'All Signals',
        allItems: 'All Items',
        onlyRecommended: 'Only Recommended',
        keyOnly: 'Key Only',
        timeline: 'Timeline',
        newest: '↓ Newest first',
        key: 'KEY',
        empty: 'No timeline items yet.',
      },
)

const originLabel = (value: AuthoredBy | string | undefined) => {
  const lang = isZh.value ? 'zh' : 'en'
  return AUTHORED_BY_LABELS[lang][(value as AuthoredBy) ?? 'unknown'] ?? ''
}

const adoptionEffortLabel = (value: AdoptionEffort | string | undefined) => {
  const lang = isZh.value ? 'zh' : 'en'
  return ADOPTION_EFFORT_LABELS[lang][(value as AdoptionEffort) ?? 'ready-to-use'] ?? ''
}

const phaseLabel = (value: TimelinePhase | string | undefined) => {
  const lang = isZh.value ? 'zh' : 'en'
  return PHASE_LABELS[lang][(value as TimelinePhase) ?? 'emerging'] ?? ''
}

const trendLabel = (value: TimelineTrend | string | undefined) => {
  const lang = isZh.value ? 'zh' : 'en'
  return TREND_LABELS[lang][(value as TimelineTrend) ?? 'stable'] ?? ''
}

const signalLabel = (value: TimelineSignal | string | undefined) => {
  const lang = isZh.value ? 'zh' : 'en'
  return SIGNAL_LABELS[lang][(value as TimelineSignal) ?? 'well-calibrated'] ?? ''
}

const filterMode = ref<FilterMode>('base')
const selectedYear = ref('all')
const selectedAdoptionEffort = ref<'all' | AdoptionEffort>('all')
const recommendedOnly = ref(false)
const keyOnly = ref(false)
const selectedPhase = ref<'all' | TimelinePhase>('all')
const selectedTrend = ref<'all' | TimelineTrend>('all')
const selectedSignal = ref<'all' | TimelineSignal>('all')
const ready = ref(false)

const allYears = computed(() =>
  Array.from(new Set(timeline.value.map((item) => item.year)))
    .filter(Boolean)
    .sort((a, b) => b - a),
)

watch(filterMode, (mode) => {
  if (mode === 'base') {
    selectedPhase.value = 'all'
    selectedTrend.value = 'all'
    selectedSignal.value = 'all'
  } else {
    selectedYear.value = 'all'
    selectedAdoptionEffort.value = 'all'
    recommendedOnly.value = false
    keyOnly.value = false
  }
})

const filteredTimeline = computed(() =>
  timeline.value.filter((item) => {
    if (filterMode.value === 'base') {
      if (selectedYear.value !== 'all' && String(item.year) !== selectedYear.value) return false
      if (selectedAdoptionEffort.value !== 'all' && item.adoptionEffort !== selectedAdoptionEffort.value) return false
      if (recommendedOnly.value && !item.recommended) return false
      if (keyOnly.value && !item.key) return false
      return true
    }
    if (selectedPhase.value !== 'all' && item.phase !== selectedPhase.value) return false
    if (selectedTrend.value !== 'all' && item.trend !== selectedTrend.value) return false
    if (selectedSignal.value !== 'all' && item.signal !== selectedSignal.value) return false
    return true
  }),
)

const enrichedTimeline = computed(() =>
  filteredTimeline.value.map((item) => ({
    ...item,
    phaseLabel: phaseLabel(item.phase),
    trendLabel: trendLabel(item.trend),
    signalLabel: signalLabel(item.signal),
    adoptionEffortLabel: adoptionEffortLabel(item.adoptionEffort),
    originLabel: originLabel(item.authoredBy),
  })),
)

onMounted(() => {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  filterMode.value = params.get('mode') === 'evolution' ? 'evolution' : 'base'
  selectedYear.value = params.get('year') ?? 'all'
  selectedAdoptionEffort.value =
    ADOPTION_EFFORT_VALUES.includes(params.get('effort') as AdoptionEffort) ? (params.get('effort') as AdoptionEffort) : 'all'
  recommendedOnly.value = params.get('recommended') === '1'
  keyOnly.value = params.get('key') === '1'
  selectedPhase.value = PHASE_VALUES.includes(params.get('phase') as TimelinePhase) ? (params.get('phase') as TimelinePhase) : 'all'
  selectedTrend.value = TREND_VALUES.includes(params.get('trend') as TimelineTrend) ? (params.get('trend') as TimelineTrend) : 'all'
  selectedSignal.value = SIGNAL_VALUES.includes(params.get('signal') as TimelineSignal) ? (params.get('signal') as TimelineSignal) : 'all'
  ready.value = true
})

watch([filterMode, selectedYear, selectedAdoptionEffort, recommendedOnly, keyOnly, selectedPhase, selectedTrend, selectedSignal], () => {
  if (!ready.value || typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  filterMode.value === 'base' ? params.delete('mode') : params.set('mode', 'evolution')

  if (filterMode.value === 'base') {
    selectedYear.value === 'all' ? params.delete('year') : params.set('year', selectedYear.value)
    selectedAdoptionEffort.value === 'all' ? params.delete('effort') : params.set('effort', selectedAdoptionEffort.value)
    recommendedOnly.value ? params.set('recommended', '1') : params.delete('recommended')
    keyOnly.value ? params.set('key', '1') : params.delete('key')
    params.delete('phase')
    params.delete('trend')
    params.delete('signal')
  } else {
    selectedPhase.value === 'all' ? params.delete('phase') : params.set('phase', selectedPhase.value)
    selectedTrend.value === 'all' ? params.delete('trend') : params.set('trend', selectedTrend.value)
    selectedSignal.value === 'all' ? params.delete('signal') : params.set('signal', selectedSignal.value)
    params.delete('year')
    params.delete('effort')
    params.delete('recommended')
    params.delete('key')
  }

  const qs = params.toString()
  window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`)
})
</script>

<template>
  <h2 id="timeline" tabindex="-1">
    {{ t.title }}
    <a class="header-anchor" href="#timeline" aria-label="Permalink to timeline">​</a>
  </h2>

  <div class="cs-filters">
    <div class="cs-filter-row">
      <span class="cs-filter-label">{{ t.filterSet }}</span>
      <div class="cs-filter-inline">
        <select v-model="filterMode" class="cs-filter-select">
          <option value="base">{{ t.baseSet }}</option>
          <option value="evolution">{{ t.evolutionSet }}</option>
        </select>
      </div>
    </div>

    <template v-if="filterMode === 'base'">
      <div class="cs-filter-row">
        <span class="cs-filter-label">{{ t.year }}</span>
        <div class="cs-chip-list">
          <button class="cs-chip" :class="{ 'is-active': selectedYear === 'all' }" @click="selectedYear = 'all'">{{ t.all }}</button>
          <button
            v-for="year in allYears"
            :key="String(year)"
            class="cs-chip"
            :class="{ 'is-active': selectedYear === String(year) }"
            @click="selectedYear = String(year)"
          >
            {{ year }}
          </button>
        </div>
      </div>
      <div class="cs-filter-row">
        <span class="cs-filter-label">{{ t.adoptionEffort }}</span>
        <div class="cs-chip-list">
          <button class="cs-chip" :class="{ 'is-active': selectedAdoptionEffort === 'all' }" @click="selectedAdoptionEffort = 'all'">
            {{ t.allEfforts }}
          </button>
          <button
            v-for="effort in ADOPTION_EFFORT_VALUES"
            :key="effort"
            class="cs-chip"
            :class="{ 'is-active': selectedAdoptionEffort === effort }"
            @click="selectedAdoptionEffort = effort"
          >
            {{ adoptionEffortLabel(effort) }}
          </button>
        </div>
      </div>
      <div class="cs-filter-row">
        <span class="cs-filter-label">{{ t.recommend }}</span>
        <div class="cs-chip-list">
          <button class="cs-chip" :class="{ 'is-active': !recommendedOnly && !keyOnly }" @click="recommendedOnly = false; keyOnly = false">
            {{ t.allItems }}
          </button>
          <button class="cs-chip" :class="{ 'is-active': recommendedOnly }" @click="recommendedOnly = true; keyOnly = false">
            {{ t.onlyRecommended }}
          </button>
          <button class="cs-chip" :class="{ 'is-active': keyOnly }" @click="keyOnly = true; recommendedOnly = false">
            {{ t.keyOnly }}
          </button>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="cs-filter-row">
        <span class="cs-filter-label">{{ t.phase }}</span>
        <div class="cs-chip-list">
          <button class="cs-chip" :class="{ 'is-active': selectedPhase === 'all' }" @click="selectedPhase = 'all'">{{ t.allPhases }}</button>
          <button
            v-for="phase in PHASE_VALUES"
            :key="phase"
            class="cs-chip"
            :class="{ 'is-active': selectedPhase === phase }"
            @click="selectedPhase = phase"
          >
            {{ phaseLabel(phase) }}
          </button>
        </div>
      </div>
      <div class="cs-filter-row">
        <span class="cs-filter-label">{{ t.trend }}</span>
        <div class="cs-chip-list">
          <button class="cs-chip" :class="{ 'is-active': selectedTrend === 'all' }" @click="selectedTrend = 'all'">{{ t.allTrends }}</button>
          <button
            v-for="trend in TREND_VALUES"
            :key="trend"
            class="cs-chip"
            :class="{ 'is-active': selectedTrend === trend }"
            @click="selectedTrend = trend"
          >
            {{ trendLabel(trend) }}
          </button>
        </div>
      </div>
      <div class="cs-filter-row">
        <span class="cs-filter-label">{{ t.signal }}</span>
        <div class="cs-chip-list">
          <button class="cs-chip" :class="{ 'is-active': selectedSignal === 'all' }" @click="selectedSignal = 'all'">{{ t.allSignals }}</button>
          <button
            v-for="signal in SIGNAL_VALUES"
            :key="signal"
            class="cs-chip"
            :class="{ 'is-active': selectedSignal === signal }"
            @click="selectedSignal = signal"
          >
            {{ signalLabel(signal) }}
          </button>
        </div>
      </div>
    </template>
  </div>

  <div class="cs-groups">
    <section class="cs-group">
      <div class="cs-group-head">
        <h3 class="cs-group-title">{{ t.timeline }}</h3>
        <span class="cs-group-trend">{{ t.newest }}</span>
      </div>
      <div class="cs-timeline">
        <TimelineCard
          v-for="(item, index) in enrichedTimeline"
          :key="item.url"
          :item="item"
          :side-class="index % 2 === 0 ? 'cs-item--left' : 'cs-item--right'"
          :key-label="t.key"
        />
      </div>
    </section>
    <div v-if="enrichedTimeline.length === 0" class="cs-empty">
      {{ t.empty }}
    </div>
  </div>
</template>
