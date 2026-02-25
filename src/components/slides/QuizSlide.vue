<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Slide, RenderMode } from '../../types/slide'

const { t } = useI18n()

const props = defineProps<{
  slide: Slide & { question?: string; options?: string[]; correctIndex?: number; explanation?: string }
  isPresenterMode: boolean
  renderMode: RenderMode
  slideBgGradient: string
}>()

const selectedIndex = ref<number | null>(null)
const revealed = ref(false)

function selectOption(index: number) {
  selectedIndex.value = index
  revealed.value = true
}

function optionClass(index: number) {
  if (!revealed.value) return ''
  if (index === props.slide.correctIndex) return 'correct'
  if (index === selectedIndex.value) return 'incorrect'
  return ''
}
</script>

<template>
  <div class="slide content-slide" :style="{ background: slideBgGradient }">
    <div class="slide-content">
      <h1>{{ slide.title }}</h1>
      <div class="slide-body">
        <div class="quiz-container">
          <div class="quiz-question">{{ slide.question }}</div>
          <div class="quiz-options">
            <div
              v-for="(option, index) in slide.options"
              :key="index"
              class="quiz-option"
              :class="[optionClass(index), { selected: selectedIndex === index && !revealed }]"
              @click="selectOption(index)"
            >
              {{ option }}
            </div>
          </div>
          <div v-if="revealed && slide.explanation" class="quiz-explanation">
            <strong>{{ t('ui.quiz_reveal_label') }}</strong>{{ slide.explanation }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
