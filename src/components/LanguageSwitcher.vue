<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { availableLocales } from '../i18n'

const { locale } = useI18n()

function switchLang(code: string) {
  locale.value = code
  localStorage.setItem('bms-locale', code)
}
</script>

<template>
  <div class="lang-switcher">
    <button
      v-for="loc in availableLocales"
      :key="loc.code"
      class="lang-btn"
      :class="{ active: locale === loc.code }"
      :title="loc.label"
      @click="switchLang(loc.code)"
    >
      {{ loc.flag }} {{ loc.label }}
    </button>
  </div>
</template>
