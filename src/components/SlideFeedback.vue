<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  slideId: string
  feedback: string
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'update', value: string): void
}>()

const localText = ref(props.feedback)

watch(() => props.slideId, () => {
  localText.value = props.feedback
})

watch(() => props.feedback, (val) => {
  localText.value = val
})

function onInput(e: Event) {
  const target = e.target as HTMLTextAreaElement
  localText.value = target.value
  emit('update', target.value)
}
</script>

<template>
  <div v-if="visible" class="slide-feedback">
    <div class="feedback-header">
      <span class="feedback-label">{{ t('ui.feedback_label') }}</span>
      <span v-if="localText.trim()" class="feedback-saved">{{ t('ui.feedback_saved') }}</span>
    </div>
    <textarea
      class="feedback-input"
      :value="localText"
      @input="onInput"
      :placeholder="t('ui.feedback_placeholder')"
      rows="2"
    />
  </div>
</template>

<style scoped>
.slide-feedback {
  background: #1e2a1e;
  border-top: 1px solid #2a4a2a;
  padding: 8px 24px;
}

.feedback-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}

.feedback-label {
  font-size: 12px;
  font-weight: 600;
  color: #6abf6a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.feedback-saved {
  font-size: 11px;
  color: #5a9a5a;
}

.feedback-input {
  width: 100%;
  background: #0d1a0d;
  border: 1px solid #2a4a2a;
  border-radius: 4px;
  color: #c8e6c8;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.5;
  padding: 8px 10px;
  resize: vertical;
  min-height: 40px;
  max-height: 120px;
  outline: none;
  transition: border-color 0.2s;
}

.feedback-input:focus {
  border-color: #4caf50;
}

.feedback-input::placeholder {
  color: #4a6a4a;
}

.presentation-mode .slide-feedback {
  display: none;
}
</style>
