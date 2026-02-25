<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  currentIndex: number
  totalSlides: number
  progressPercent: number
  timerDisplay: string
  isFirstSlide: boolean
  isLastSlide: boolean
}>()

const emit = defineEmits<{
  prev: []
  next: []
  fullscreen: []
}>()
</script>

<template>
  <div class="controls-bar">
    <div class="progress-info">
      <span>{{ currentIndex + 1 }} / {{ totalSlides }}</span>
      <div class="progress-bar-container">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }" />
      </div>
      <span class="timer">{{ timerDisplay }}</span>
    </div>
    <div class="nav-controls">
      <button class="nav-btn" :disabled="isFirstSlide" @click="emit('prev')">
        {{ t('ui.btn_prev') }}
      </button>
      <button class="nav-btn primary" :disabled="isLastSlide" @click="emit('next')">
        {{ t('ui.btn_next') }}
      </button>
      <button class="nav-btn" @click="emit('fullscreen')">
        {{ t('ui.btn_fullscreen') }}
      </button>
    </div>
    <div class="shortcuts-hint">
      <kbd>&larr;</kbd><kbd>&rarr;</kbd> {{ t('ui.shortcuts_hint') }}
    </div>
  </div>
</template>
