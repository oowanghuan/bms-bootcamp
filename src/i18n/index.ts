import { createI18n } from 'vue-i18n'

import commonZhCN from './common/zh-CN.json'
import commonEn from './common/en.json'
import commonId from './common/id.json'

import m01ZhCN from './m01/zh-CN.json'
import m01En from './m01/en.json'
import m01Id from './m01/id.json'

import m02ZhCN from './m02/zh-CN.json'
import m02En from './m02/en.json'
import m02Id from './m02/id.json'

import m03ZhCN from './m03/zh-CN.json'
import m03En from './m03/en.json'
import m03Id from './m03/id.json'

import m04ZhCN from './m04/zh-CN.json'
import m04En from './m04/en.json'
import m04Id from './m04/id.json'

import m05ZhCN from './m05/zh-CN.json'
import m05En from './m05/en.json'
import m05Id from './m05/id.json'

import m06ZhCN from './m06/zh-CN.json'
import m06En from './m06/en.json'
import m06Id from './m06/id.json'

const messages = {
  'zh-CN': {
    ...commonZhCN,
    m01: m01ZhCN,
    m02: m02ZhCN,
    m03: m03ZhCN,
    m04: m04ZhCN,
    m05: m05ZhCN,
    m06: m06ZhCN,
  },
  en: {
    ...commonEn,
    m01: m01En,
    m02: m02En,
    m03: m03En,
    m04: m04En,
    m05: m05En,
    m06: m06En,
  },
  id: {
    ...commonId,
    m01: m01Id,
    m02: m02Id,
    m03: m03Id,
    m04: m04Id,
    m05: m05Id,
    m06: m06Id,
  },
}

const savedLocale = localStorage.getItem('bms-locale') || 'zh-CN'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'zh-CN',
  messages,
})

export default i18n

export const availableLocales = [
  { code: 'zh-CN', label: '中文', flag: '🇨🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'id', label: 'Bahasa', flag: '🇮🇩' },
]
