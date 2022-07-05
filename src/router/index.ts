import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/menu.view.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.view.vue')
  },
  {
    path: '/proximos-passos',
    name: 'proximos-passos',
    component: () => import(/* webpackChunkName: "passo" */ '../views/passo.view.vue')
  },
  {
    path: '/produtos-listar',
    name: 'produtos-listar',
    component: () => import(/* webpackChunkName: "produtos-listar" */ '../views/produto-list.view.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
