<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { moduleConfigs } from '../data/modules'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t, locale } = useI18n()

const modules = Object.values(moduleConfigs)

const toolkitItems = computed(() => {
  const lang = locale.value
  return [
    {
      icon: '📖',
      titleKey: 'ui.toolkit_dictionary_title',
      descKey: 'ui.toolkit_dictionary_desc',
      href: `/tools/dictionary_${lang}.html`,
    },
    {
      icon: '📝',
      titleKey: 'ui.toolkit_handbook_title',
      descKey: 'ui.toolkit_handbook_desc',
      href: `/tools/handbook_${lang}.html`,
    },
  ]
})
</script>

<template>
  <div class="landing-page">
    <div class="landing-content">
      <h1 class="landing-title">{{ t('ui.index_title') }}</h1>
      <p class="landing-subtitle">{{ t('ui.index_subtitle') }}</p>
      <div class="landing-lang-row">
        <LanguageSwitcher />
      </div>

      <div class="module-grid">
        <router-link
          v-for="mod in modules"
          :key="mod.id"
          :to="`/m/${mod.id}`"
          class="module-card"
          :style="{ '--card-accent': mod.accent }"
        >
          <div class="module-icon">{{ mod.icon }}</div>
          <h3>{{ t(`ui.index_${mod.id}_title`) }}</h3>
          <p>{{ t(`ui.index_${mod.id}_desc`) }}</p>
        </router-link>
      </div>

      <div class="toolkit-section">
        <h2 class="toolkit-title">{{ t('ui.toolkit_title') }}</h2>
        <div class="toolkit-grid">
          <a
            v-for="item in toolkitItems"
            :key="item.href"
            :href="item.href"
            target="_blank"
            class="toolkit-card"
          >
            <div class="toolkit-icon">{{ item.icon }}</div>
            <h3>{{ t(item.titleKey) }}</h3>
            <p>{{ t(item.descKey) }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
}
.landing-content {
  text-align: center;
  padding: 40px;
  max-width: 800px;
}
.landing-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #fff 0%, #aaa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.landing-subtitle {
  font-size: 18px;
  color: #a0a0a0;
  margin-bottom: 24px;
}
.landing-lang-row {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
.module-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.module-card {
  display: block;
  padding: 32px 24px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  text-decoration: none;
  color: white;
  transition: all 0.3s;
  border-top: 3px solid var(--card-accent);
}
.module-card:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
.module-icon {
  font-size: 40px;
  margin-bottom: 12px;
}
.module-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--card-accent);
}
.module-card p {
  font-size: 14px;
  color: #a0a0a0;
}

/* Toolkit Section */
.toolkit-section {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.toolkit-title {
  font-size: 20px;
  font-weight: 600;
  color: #888;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.toolkit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.toolkit-card {
  display: block;
  padding: 24px 20px;
  background: rgba(255,255,255,0.03);
  border: 1px dashed rgba(255,255,255,0.12);
  border-radius: 12px;
  text-decoration: none;
  color: white;
  transition: all 0.3s;
}
.toolkit-card:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.25);
  transform: translateY(-2px);
}
.toolkit-icon {
  font-size: 32px;
  margin-bottom: 10px;
}
.toolkit-card h3 {
  font-size: 16px;
  margin-bottom: 6px;
  color: #ccc;
}
.toolkit-card p {
  font-size: 13px;
  color: #777;
}
</style>
