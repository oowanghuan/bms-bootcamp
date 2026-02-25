<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { moduleConfigs } from '../data/modules'
import { slidesData as m01Slides } from '../data/m01'
import { slidesData as m02Slides } from '../data/m02'
import { slidesData as m03Slides } from '../data/m03'
import { slidesData as m04Slides } from '../data/m04'
import { slidesData as m05Slides } from '../data/m05'
import { slidesData as m06Slides } from '../data/m06'
import { usePresentation } from '../composables/usePresentation'
import { useSlideI18n } from '../composables/useSlideI18n'
import { useFeedback } from '../composables/useFeedback'
import NavigationPanel from './NavigationPanel.vue'
import SlideRenderer from './SlideRenderer.vue'
import ControlsBar from './ControlsBar.vue'
import SpeakerNotes from './SpeakerNotes.vue'
import SlideFeedback from './SlideFeedback.vue'
import ModeIndicator from './ModeIndicator.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const props = defineProps<{
  moduleId: string
}>()

const { t } = useI18n()
const router = useRouter()

const slidesMap: Record<string, any[]> = {
  m01: m01Slides,
  m02: m02Slides,
  m03: m03Slides,
  m04: m04Slides,
  m05: m05Slides,
  m06: m06Slides,
}

const config = computed(() => moduleConfigs[props.moduleId])
const rawSlides = computed(() => slidesMap[props.moduleId] || [])

const { getSlideData } = useSlideI18n(() => props.moduleId)

const {
  currentIndex,
  currentSlide,
  totalSlides,
  progressPercent,
  isFirstSlide,
  isLastSlide,
  isPresenterMode,
  navVisible,
  timerDisplay,
  sectionGroups,
  goToSlide,
  nextSlide,
  prevSlide,
  toggleMode,
  toggleNav,
  toggleFullscreen,
} = usePresentation(rawSlides)

// Feedback system
const {
  getFeedback,
  setFeedback,
  hasFeedback,
  getFeedbackCount,
  downloadFeedback,
} = useFeedback(() => props.moduleId)

const currentFeedback = computed(() => getFeedback(currentSlide.value?.id || ''))
const feedbackCount = computed(() => getFeedbackCount())

function onFeedbackUpdate(text: string) {
  if (currentSlide.value) {
    setFeedback(currentSlide.value.id, text)
  }
}

function handleExportFeedback() {
  const slideList = rawSlides.value.map(s => {
    const translated = getSlideData(s)
    return { id: s.id, title: translated.title, section: translated.section }
  })
  const moduleTitle = t(`ui.nav_title_${props.moduleId}`)
  downloadFeedback(slideList, moduleTitle)
}

// Get translated slide data
const translatedSlide = computed(() => getSlideData(currentSlide.value))

// Get translated section groups for navigation
const translatedSectionGroups = computed(() => {
  const groups: Record<string, { time: string; slides: Array<any & { index: number }> }> = {}
  rawSlides.value.forEach((slide, index) => {
    const s = getSlideData(slide)
    const section = s.section || 'Other'
    if (!groups[section]) {
      groups[section] = { time: s.time || '', slides: [] }
    }
    groups[section].slides.push({ ...s, index })
  })
  return groups
})

// Update page title
watch(
  () => props.moduleId,
  () => {
    const titleKey = `ui.page_title_${props.moduleId}`
    const titleVal = t(titleKey)
    if (titleVal !== titleKey) {
      document.title = titleVal
    }
  },
  { immediate: true }
)
</script>

<template>
  <div
    v-if="config"
    class="app-container"
    :class="{ 'presentation-mode': !isPresenterMode }"
    :style="{
      '--accent': config.accent,
      '--accent-secondary': config.accentSecondary,
      '--module-color': config.moduleColor,
    }"
    id="app"
  >
    <!-- Unified Top Toolbar -->
    <div class="top-toolbar">
      <div class="toolbar-left">
        <button class="toolbar-btn" @click="toggleNav">
          {{ navVisible ? '✕' : '☰' }}
          {{ navVisible ? t('ui.btn_collapse_nav') : t('ui.btn_expand_nav') }}
        </button>
      </div>
      <div class="toolbar-right">
        <LanguageSwitcher />
        <ModeIndicator
          :is-presenter-mode="isPresenterMode"
          @toggle="toggleMode"
        />
        <button
          v-if="isPresenterMode"
          class="toolbar-btn feedback-export"
          @click="handleExportFeedback"
          :title="t('ui.feedback_export_title')"
        >
          {{ t('ui.feedback_export') }}
          <span v-if="feedbackCount > 0" class="feedback-badge">{{ feedbackCount }}</span>
        </button>
        <button class="toolbar-btn home" @click="router.push('/')">
          {{ t('ui.btn_home') }}
        </button>
      </div>
    </div>

    <NavigationPanel
      :module-id="moduleId"
      :section-groups="translatedSectionGroups"
      :current-index="currentIndex"
      :visible="navVisible"
      @go-to-slide="goToSlide"
    />

    <div class="main-content">
      <SlideRenderer
        :slide="translatedSlide"
        :is-presenter-mode="isPresenterMode"
        :render-mode="config.renderMode"
        :bg-gradient="config.bgGradient"
        :slide-bg-gradient="config.slideBgGradient"
      />

      <SlideFeedback
        :slide-id="translatedSlide.id"
        :feedback="currentFeedback"
        :visible="isPresenterMode"
        @update="onFeedbackUpdate"
      />

      <SpeakerNotes
        :notes="translatedSlide.notes || ''"
        :visible="isPresenterMode"
      />

      <ControlsBar
        :current-index="currentIndex"
        :total-slides="totalSlides"
        :progress-percent="progressPercent"
        :timer-display="timerDisplay"
        :is-first-slide="isFirstSlide"
        :is-last-slide="isLastSlide"
        @prev="prevSlide"
        @next="nextSlide"
        @fullscreen="toggleFullscreen"
      />
    </div>
  </div>
</template>
