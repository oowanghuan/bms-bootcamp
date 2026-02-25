<script setup lang="ts">
import type { Slide, RenderMode } from '../types/slide'
import TitleSlide from './slides/TitleSlide.vue'
import ContentSlide from './slides/ContentSlide.vue'
import QuizSlide from './slides/QuizSlide.vue'

defineProps<{
  slide: Slide
  isPresenterMode: boolean
  renderMode: RenderMode
  bgGradient: string
  slideBgGradient: string
}>()
</script>

<template>
  <div class="slide-container" :style="{ background: bgGradient }">
    <TitleSlide
      v-if="slide.type === 'title'"
      :slide="slide"
      :is-presenter-mode="isPresenterMode"
      :render-mode="renderMode"
      :slide-bg-gradient="slideBgGradient"
    />
    <ContentSlide
      v-else-if="slide.type === 'content'"
      :slide="slide"
      :is-presenter-mode="isPresenterMode"
      :render-mode="renderMode"
      :slide-bg-gradient="slideBgGradient"
    />
    <QuizSlide
      v-else-if="slide.type === 'quiz'"
      :slide="slide"
      :is-presenter-mode="isPresenterMode"
      :render-mode="renderMode"
      :slide-bg-gradient="slideBgGradient"
    />
  </div>
</template>
