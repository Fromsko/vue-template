import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: 'Home',
      isPage: true
    },
    component: () => import('@/layout/Home.vue')
  },
  {
    name: 'UserPage',
    path: '/user',
    meta: {
      title: 'user page',
      isPage: true
    },
    component: () => import('@components/Settings.vue')
  },
  {
    name: 'TranslatePage',
    path: '/translate',
    meta: {
      title: 'translate page',
      isPage: true
    },
    component: () => import('@components/Translate.vue')
  },
  {
    name: 'PDF',
    path: '/pdf',
    meta: {
      title: 'PDF',
      isPage: true
    },
    component: () => import('@components/PdfTranslator.vue')
  },
  {
    name: 'test',
    path: '/test',
    meta: {
      title: 'component test env',
      isPage: true
    },
    component: () => import('@/layout/Demo.vue')
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

export default router
