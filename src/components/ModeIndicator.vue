<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  isPresenterMode: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <div class="mode-indicator">
    <span
      class="mode-badge"
      :class="isPresenterMode ? 'presenter' : 'presentation'"
    >
      {{ isPresenterMode ? t('ui.mode_presenter') : t('ui.mode_presentation') }}
    </span>
    <button class="mode-toggle-btn" @click="emit('toggle')">
      {{ t('ui.mode_toggle') }}
    </button>
  </div>
</template>
