import { computed, toValue, type Ref, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Slide } from '../types/slide'

const translatableFields = [
  'section', 'title', 'subtitle', 'description',
  'studentContent', 'presenterContent', 'notes',
  'question', 'explanation', 'options',
] as const

export function useSlideI18n(moduleIdRef: string | Ref<string> | ComputedRef<string> | (() => string)) {
  const { messages, locale, fallbackLocale } = useI18n()

  function getSlideData(originalSlide: Slide): Slide {
    if (!originalSlide || !originalSlide.id) return originalSlide

    const moduleId = toValue(moduleIdRef)

    // Get module translations for current locale
    const currentMessages = (messages.value as Record<string, any>)[locale.value]
    const fallbackMessages = (messages.value as Record<string, any>)[fallbackLocale.value as string]

    const currentModuleSlides = currentMessages?.[moduleId]?.slides || {}
    const fallbackModuleSlides = fallbackMessages?.[moduleId]?.slides || {}

    const translated = currentModuleSlides[originalSlide.id]
    const fallback = fallbackModuleSlides[originalSlide.id]

    if (!translated && !fallback) return originalSlide

    // Merge: original < fallback < translated
    const merged = { ...originalSlide } as any
    const source = translated || fallback || {}

    for (const field of translatableFields) {
      if (source[field] !== undefined && source[field] !== '') {
        merged[field] = source[field]
      }
    }

    return merged as Slide
  }

  function getTranslatedSlides(slides: Slide[]): Slide[] {
    return slides.map(s => getSlideData(s))
  }

  return {
    getSlideData,
    getTranslatedSlides,
  }
}
