<script setup lang="ts">
import { ref, computed, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  seconds: number
}>()

const remaining = ref(props.seconds)
const running = ref(false)
const finished = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

// Reset when slide changes (seconds prop changes)
watch(() => props.seconds, (val) => {
  stop()
  remaining.value = val
  finished.value = false
})

const display = computed(() => {
  const m = Math.floor(remaining.value / 60)
  const s = remaining.value % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
})

const progressPercent = computed(() => {
  return ((props.seconds - remaining.value) / props.seconds) * 100
})

function toggle() {
  if (finished.value) {
    // Reset
    remaining.value = props.seconds
    finished.value = false
    return
  }
  running.value ? pause() : start()
}

function start() {
  if (remaining.value <= 0) return
  running.value = true
  timer = setInterval(() => {
    remaining.value--
    if (remaining.value <= 0) {
      remaining.value = 0
      running.value = false
      finished.value = true
      if (timer) clearInterval(timer)
    }
  }, 1000)
}

function pause() {
  running.value = false
  if (timer) clearInterval(timer)
}

function stop() {
  running.value = false
  if (timer) clearInterval(timer)
  timer = null
}

function reset() {
  stop()
  remaining.value = props.seconds
  finished.value = false
}

onBeforeUnmount(() => stop())
</script>

<template>
  <div class="countdown-widget" :class="{ finished, running }">
    <div class="countdown-display" @click="toggle">
      <div class="countdown-time">{{ display }}</div>
      <div class="countdown-label">
        {{ finished ? t('ui.timer_finished') : running ? t('ui.timer_pause') : t('ui.timer_start') }}
      </div>
    </div>
    <div class="countdown-progress">
      <div class="countdown-progress-fill" :style="{ width: progressPercent + '%' }" />
    </div>
    <button v-if="running || remaining !== seconds" class="countdown-reset" @click.stop="reset">
      ↺ {{ t('ui.timer_reset') }}
    </button>
  </div>
</template>

<style scoped>
.countdown-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
}
.countdown-display {
  cursor: pointer;
  text-align: center;
  padding: 20px 48px;
  border-radius: 16px;
  background: rgba(255,255,255,0.06);
  border: 2px solid rgba(255,255,255,0.15);
  transition: all 0.3s;
  user-select: none;
}
.countdown-display:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.3);
}
.running .countdown-display {
  border-color: var(--accent, #64B5F6);
  box-shadow: 0 0 20px rgba(100, 181, 246, 0.2);
}
.finished .countdown-display {
  border-color: #FF6B35;
  box-shadow: 0 0 30px rgba(255, 107, 53, 0.3);
  animation: pulse 1s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}
.countdown-time {
  font-size: 64px;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: white;
  letter-spacing: 4px;
}
.finished .countdown-time {
  color: #FF6B35;
}
.countdown-label {
  font-size: 14px;
  color: var(--text-secondary, #a0a0a0);
  margin-top: 4px;
}
.countdown-progress {
  width: 260px;
  height: 4px;
  background: rgba(255,255,255,0.1);
  border-radius: 2px;
  overflow: hidden;
}
.countdown-progress-fill {
  height: 100%;
  background: var(--accent, #64B5F6);
  transition: width 1s linear;
  border-radius: 2px;
}
.finished .countdown-progress-fill {
  background: #FF6B35;
}
.countdown-reset {
  padding: 6px 16px;
  background: transparent;
  border: 1px solid #555;
  border-radius: 6px;
  color: #aaa;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}
.countdown-reset:hover {
  background: rgba(255,255,255,0.1);
  color: white;
  border-color: #888;
}
</style>
