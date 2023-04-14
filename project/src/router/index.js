import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/myticket',
      name: 'myticket',
      component: () => import('../views/myticket.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/prize',
      name: 'prize',
      component: () => import('../views/prize.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test.vue')
    },
    {
      path: '/addtrain',
      name: 'addtrain',
      component: () => import('../views/Addtrain.vue')
    }
    ,
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/CreateBlog.vue')
    },
    {
      path: '/addprize',
      name: 'addprize',
      component: () => import('../views/Addprize.vue')
    }
  
 
  ]
})

export default router
