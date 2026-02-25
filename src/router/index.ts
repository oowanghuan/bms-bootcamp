import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import PresentationShell from '../components/PresentationShell.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/m/:moduleId', component: PresentationShell, props: true },
  ],
})

export default router
