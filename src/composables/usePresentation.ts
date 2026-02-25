import { ref, computed, watch, onMounted, onUnmounted, type Ref, type ComputedRef, toValue } from 'vue'
import type { Slide } from '../types/slide'

export function usePresentation(slidesRef: Ref<Slide[]> | ComputedRef<Slide[]>) {
  const currentIndex = ref(0)
  const isPresenterMode = ref(true)
  const elapsedSeconds = ref(0)
  const navVisible = ref(true)
  let timerInterval: ReturnType<typeof setInterval> | null = null

  const slides = computed(() => toValue(slidesRef))
  const currentSlide = computed(() => slides.value[currentIndex.value])
  const totalSlides = computed(() => slides.value.length)
  const progressPercent = computed(() => ((currentIndex.value + 1) / totalSlides.value) * 100)
  const isFirstSlide = computed(() => currentIndex.value === 0)
  const isLastSlide = computed(() => currentIndex.value === totalSlides.value - 1)

  // Reset slide index when slides change (module switch)
  watch(slides, () => {
    currentIndex.value = 0
    elapsedSeconds.value = 0
  })

  const timerDisplay = computed(() => {
    const mins = Math.floor(elapsedSeconds.value / 60)
    const secs = elapsedSeconds.value % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  })

  // Section grouping for navigation
  const sectionGroups = computed(() => {
    const groups: Record<string, { time: string; slides: Array<Slide & { index: number }> }> = {}
    slides.value.forEach((slide, index) => {
      const section = slide.section || 'Other'
      if (!groups[section]) {
        groups[section] = { time: slide.time || '', slides: [] }
      }
      groups[section].slides.push({ ...slide, index })
    })
    return groups
  })

  function goToSlide(index: number) {
    if (index >= 0 && index < slides.value.length) {
      currentIndex.value = index
    }
  }

  function nextSlide() {
    goToSlide(currentIndex.value + 1)
  }

  function prevSlide() {
    goToSlide(currentIndex.value - 1)
  }

  function toggleMode() {
    isPresenterMode.value = !isPresenterMode.value
  }

  function toggleNav() {
    navVisible.value = !navVisible.value
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.getElementById('app')?.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault()
        nextSlide()
        break
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault()
        prevSlide()
        break
      case 'f':
      case 'F':
        toggleFullscreen()
        break
      case 'n':
      case 'N':
        toggleNav()
        break
      case 'p':
      case 'P':
        toggleMode()
        break
      case 'Home':
        goToSlide(0)
        break
      case 'End':
        goToSlide(slides.value.length - 1)
        break
    }
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      elapsedSeconds.value++
    }, 1000)
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
    startTimer()
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    stopTimer()
  })

  return {
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
  }
}
