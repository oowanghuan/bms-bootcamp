<script setup lang="ts">
import type { Slide, RenderMode } from '../../types/slide'

const props = defineProps<{
  slide: Slide
  isPresenterMode: boolean
  renderMode: RenderMode
  slideBgGradient: string
}>()
</script>

<template>
  <div class="slide title-slide" :style="{ background: slideBgGradient }">
    <div class="slide-content" v-if="renderMode === 'separate' && slide.studentContent">
      <!-- M04 separate mode: render studentContent or presenterContent directly -->
      <div v-if="isPresenterMode && slide.presenterContent" v-html="slide.presenterContent" />
      <div v-else v-html="slide.studentContent" />
    </div>
    <div class="slide-content" v-else>
      <h1>{{ slide.title }}</h1>
      <h2 v-if="slide.subtitle">{{ slide.subtitle }}</h2>
      <p v-if="slide.description" class="subtitle">{{ slide.description }}</p>
    </div>
  </div>
</template>
