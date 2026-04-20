<script setup lang="ts">
import { withBase } from 'vitepress'

type TimelineCardItem = {
  url: string
  phase: string
  trendLabel: string
  signalLabel: string
  date: string
  title: string
  summary: string
  key: boolean
  keyReason: string
  adoptionEffortLabel: string
  originLabel: string
}

defineProps<{
  item: TimelineCardItem
  sideClass: string
  keyLabel: string
}>()
</script>

<template>
  <div class="cs-item" :class="[sideClass, `cs-item--${item.phase}`]">
    <div class="cs-item-meta">
      <p class="cs-year">{{ item.date }}</p>
    </div>
    <div class="cs-item-rail"></div>
    <article class="cs-item-card">
      <div class="cs-item-head">
        <div class="cs-head-badges">
          <span class="cs-badge cs-badge-domain">{{ item.adoptionEffortLabel }}</span>
          <span class="cs-badge cs-badge-phase">{{ item.trendLabel }}</span>
          <span class="cs-badge cs-badge-signal">{{ item.signalLabel }}</span>
          <span v-if="item.originLabel" class="cs-badge cs-badge-origin">{{ item.originLabel }}</span>
          <span v-if="item.key" class="cs-badge cs-badge-key">{{ keyLabel }}</span>
        </div>
      </div>
      <h4 class="cs-title">
        <a :href="withBase(item.url)">{{ item.title }}</a>
      </h4>
      <p class="cs-desc">{{ item.summary }}</p>
      <p v-if="item.key && item.keyReason" class="cs-key-reason">{{ item.keyReason }}</p>
    </article>
  </div>
</template>
