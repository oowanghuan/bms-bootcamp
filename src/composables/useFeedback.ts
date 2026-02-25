import { reactive, watch } from 'vue'

const STORAGE_KEY = 'bms-slide-feedback'

// Global feedback store: { moduleId: { slideId: feedbackText } }
const feedbackStore = reactive<Record<string, Record<string, string>>>(loadFromStorage())

function loadFromStorage(): Record<string, Record<string, string>> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackStore))
}

// Auto-save on changes
watch(feedbackStore, saveToStorage, { deep: true })

export function useFeedback(moduleId: () => string) {
  function getFeedback(slideId: string): string {
    const mid = moduleId()
    return feedbackStore[mid]?.[slideId] || ''
  }

  function setFeedback(slideId: string, text: string) {
    const mid = moduleId()
    if (!feedbackStore[mid]) {
      feedbackStore[mid] = {}
    }
    if (text.trim()) {
      feedbackStore[mid][slideId] = text
    } else {
      delete feedbackStore[mid][slideId]
    }
  }

  function hasFeedback(slideId: string): boolean {
    const mid = moduleId()
    return !!(feedbackStore[mid]?.[slideId]?.trim())
  }

  function getFeedbackCount(): number {
    const mid = moduleId()
    if (!feedbackStore[mid]) return 0
    return Object.values(feedbackStore[mid]).filter(v => v.trim()).length
  }

  function exportFeedback(
    slides: Array<{ id: string; title: string; section: string }>,
    moduleTitle: string
  ): string {
    const mid = moduleId()
    const moduleFeedback = feedbackStore[mid] || {}
    const lines: string[] = []

    lines.push(`# ${moduleTitle} - Feedback`)
    lines.push(``)
    lines.push(`> Generated: ${new Date().toLocaleString()}`)
    lines.push(``)

    let currentSection = ''
    let feedbackIndex = 0

    slides.forEach((slide, pageIndex) => {
      const text = moduleFeedback[slide.id]?.trim()
      if (!text) return

      feedbackIndex++

      if (slide.section !== currentSection) {
        currentSection = slide.section
        lines.push(`## ${currentSection}`)
        lines.push(``)
      }

      lines.push(`### ${feedbackIndex}. [P${pageIndex + 1}] ${slide.title}`)
      lines.push(``)
      lines.push(`> Slide ID: \`${slide.id}\``)
      lines.push(``)
      lines.push(text)
      lines.push(``)
      lines.push(`---`)
      lines.push(``)
    })

    if (feedbackIndex === 0) {
      lines.push(`_No feedback recorded._`)
    } else {
      lines.push(`**Total: ${feedbackIndex} items**`)
    }

    return lines.join('\n')
  }

  function downloadFeedback(
    slides: Array<{ id: string; title: string; section: string }>,
    moduleTitle: string
  ) {
    const content = exportFeedback(slides, moduleTitle)
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `feedback-${moduleId()}-${new Date().toISOString().slice(0, 10)}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  function clearModuleFeedback() {
    const mid = moduleId()
    delete feedbackStore[mid]
  }

  return {
    getFeedback,
    setFeedback,
    hasFeedback,
    getFeedbackCount,
    exportFeedback,
    downloadFeedback,
    clearModuleFeedback,
  }
}
