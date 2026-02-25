<script setup lang="ts">
import type { Slide, RenderMode } from '../../types/slide'
import CountdownTimer from '../CountdownTimer.vue'

defineProps<{
  slide: Slide
  isPresenterMode: boolean
  renderMode: RenderMode
  slideBgGradient: string
}>()
</script>

<template>
  <div class="slide content-slide" :style="{ background: slideBgGradient }">
    <div class="slide-content" :class="{ 'has-countdown': slide.countdown }">
      <h1>{{ slide.title }}</h1>
      <div class="content-with-timer">
        <div class="content-main">
          <div class="slide-body" v-if="renderMode === 'separate'">
            <div v-if="isPresenterMode && slide.presenterContent" v-html="slide.presenterContent" />
            <div v-else v-html="slide.studentContent" />
          </div>
          <div class="slide-body" v-else>
            <div v-if="slide.studentContent" v-html="slide.studentContent" />
            <div v-if="slide.presenterContent" v-html="slide.presenterContent" />
          </div>
        </div>
        <div v-if="slide.countdown" class="timer-side">
          <CountdownTimer :seconds="slide.countdown" />
        </div>
      </div>
    </div>
  </div>
</template>
