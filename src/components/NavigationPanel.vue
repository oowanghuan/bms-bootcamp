<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Slide } from '../types/slide'

const { t } = useI18n()

const props = defineProps<{
  moduleId: string
  sectionGroups: Record<string, { time: string; slides: Array<Slide & { index: number }> }>
  currentIndex: number
  visible: boolean
}>()

const emit = defineEmits<{
  goToSlide: [index: number]
}>()

const expandedSections = ref<Set<string>>(new Set())

// Expand the first section by default
const sections = Object.keys(props.sectionGroups)
if (sections.length > 0) {
  expandedSections.value.add(sections[0])
}

function toggleSection(section: string) {
  if (expandedSections.value.has(section)) {
    expandedSections.value.delete(section)
  } else {
    expandedSections.value.add(section)
  }
}
</script>

<template>
  <div class="nav-panel" :class="{ hidden: !visible }">
    <div class="nav-header">
      <h1>{{ t(`ui.nav_title_${moduleId}`) }}</h1>
      <p>{{ t(`ui.nav_subtitle_${moduleId}`) }}</p>
    </div>
    <div class="slide-list">
      <div v-for="(group, section) in sectionGroups" :key="section" class="section-group">
        <div class="section-header" @click="toggleSection(section as string)">
          <span>{{ expandedSections.has(section as string) ? '▾' : '▸' }}</span>
          <span>{{ section }}</span>
          <span v-if="group.time" class="time">{{ group.time }}</span>
        </div>
        <div class="section-items" :class="{ expanded: expandedSections.has(section as string) }">
          <div
            v-for="slide in group.slides"
            :key="slide.id"
            class="slide-item"
            :class="{ active: slide.index === currentIndex }"
            @click="emit('goToSlide', slide.index)"
          >
            {{ slide.title || slide.subtitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
