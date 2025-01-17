import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landingPage',
    component: () => import(/* webpackChunkName: "formulario" */ '../views/landing.view.vue')
  },
  {
    path: '/candidato',
    name: 'candidato',
    component: () => import(/* webpackChunkName: "formulario" */ '../views/formulario.view.vue')
  },
  {
    path: '/contratante',
    name: 'contratante',
    component: () => import(/* webpackChunkName: "contratante" */ '../views/contratante.view.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import(/* webpackChunkName: "formulario" */ '../views/formulario-list.view.vue')
  },
  {
    path: '/teste',
    name: 'teste',
    component: () => import(/* webpackChunkName: "teste" */ '../views/testePratico.view.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
