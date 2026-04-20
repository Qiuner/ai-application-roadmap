<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const currentTheme = ref('warm') // 'warm' or 'lively'

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'warm' ? 'lively' : 'warm'
}

const title = computed(() => {
  const isZh = lang.value === 'zh-CN'
  if (currentTheme.value === 'warm') {
    return isZh ? '切换到活泼清爽风格' : 'Switch to Lively Theme'
  }
  return isZh ? '切换到沉静纸张风格' : 'Switch to Warm Theme'
})

watch(currentTheme, (newTheme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-color-scheme', newTheme)
    localStorage.setItem('cs-color-scheme', newTheme)
  }
})

onMounted(() => {
  const saved = localStorage.getItem('cs-color-scheme')
  if (saved === 'lively' || saved === 'warm') {
    currentTheme.value = saved
  } else {
    currentTheme.value = 'warm'
  }
  document.documentElement.setAttribute('data-color-scheme', currentTheme.value)
})
</script>

<template>
  <div class="VPNavBarAppearance cs-theme-switcher-wrapper">
    <button
      class="cs-theme-switcher"
      @click="toggleTheme"
      :title="title"
    >
      <!-- Coffee cup icon for Warm theme -->
      <svg v-if="currentTheme === 'warm'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cs-theme-icon">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
        <line x1="6" x2="6" y1="2" y2="4"/>
        <line x1="10" x2="10" y1="2" y2="4"/>
        <line x1="14" x2="14" y1="2" y2="4"/>
      </svg>
      <!-- Sparkles icon for Lively theme -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cs-theme-icon">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        <path d="M5 3v4"/>
        <path d="M19 17v4"/>
        <path d="M3 5h4"/>
        <path d="M17 19h4"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.cs-theme-switcher-wrapper {
  display: flex;
  align-items: center;
  padding: 0 12px;
}
.cs-theme-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.cs-theme-switcher:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand-1);
}

.cs-theme-icon {
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-2);
}

.cs-theme-switcher:hover .cs-theme-icon {
  color: var(--vp-c-brand-1);
}
</style>
