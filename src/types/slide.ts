export interface BaseSlide {
  id: string
  section: string
  time?: string
  type: 'title' | 'content' | 'quiz'
  title: string
  subtitle?: string
  description?: string
  notes?: string
  isStar?: boolean
  countdown?: number // seconds for countdown timer
}

export interface TitleSlide extends BaseSlide {
  type: 'title'
  studentContent?: string
  presenterContent?: string
}

export interface ContentSlide extends BaseSlide {
  type: 'content'
  studentContent: string
  presenterContent?: string
}

export interface QuizSlide extends BaseSlide {
  type: 'quiz'
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  studentContent?: string
  presenterContent?: string
}

export type Slide = TitleSlide | ContentSlide | QuizSlide

export type RenderMode = 'combined' | 'separate'

export interface ModuleConfig {
  id: string
  title: string
  subtitle: string
  accent: string
  accentSecondary: string
  moduleColor: string
  bgGradient: string
  slideBgGradient: string
  renderMode: RenderMode
  icon: string
}
