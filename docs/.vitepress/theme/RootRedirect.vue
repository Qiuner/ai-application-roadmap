<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { withBase } from 'vitepress'

const defaultLocalePath = computed(() => {
  if (typeof navigator === 'undefined') {
    return '/en/'
  }

  return navigator.language.toLowerCase().startsWith('zh') ? '/zh/' : '/en/'
})

const targetHref = computed(() => withBase(defaultLocalePath.value))

onMounted(() => {
  window.location.replace(targetHref.value)
})
</script>

<template>
  <div class="cs-root-redirect">
    <p>Redirecting...</p>
    <p>
      If the redirect does not happen, open
      <a :href="withBase('/en/')">English</a>
      or
      <a :href="withBase('/zh/')">简体中文</a>.
    </p>
  </div>
</template>

<style scoped>
.cs-root-redirect {
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 0.5rem;
  padding: 2rem;
  text-align: center;
}

.cs-root-redirect p {
  margin: 0;
}
</style>
