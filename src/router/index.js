import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('src/pages/HomePage.vue') },
      { path: '/about', name: 'about', component: () => import('src/pages/AboutPage.vue') },
      { path: '/contact', name: 'contact', component: () => import('src/pages/ContactPage.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router