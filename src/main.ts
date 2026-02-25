import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './styles/global.css'
import './styles/variables.css'
import './styles/slide-layout.css'
import './styles/slide-content.css'
import './styles/m04-extras.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
