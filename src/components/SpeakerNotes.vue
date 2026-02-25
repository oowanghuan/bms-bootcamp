<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  notes: string
  visible: boolean
}>()
</script>

<template>
  <div v-if="visible" class="speaker-notes">
    <h4>{{ t('ui.speaker_notes') }}</h4>
    <p>{{ notes || t('ui.no_notes') }}</p>
  </div>
</template>
