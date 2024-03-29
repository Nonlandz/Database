import { createRouter, createWebHistory } from 'vue-router';

function isAuthenticated(to, from, next) {
  if (localStorage.getItem('user')) {
    next();
  } else {
    next('/'); // Redirect to login page
  }
}

function isAdmin(to, from, next) {
  if (localStorage.getItem('userType') === 'admin') {
    next();
  } else {
    next('/home'); // Redirect to home page if not an admin
  }
}


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
      component: () => import('../views/home.vue'),
      beforeEnter: isAuthenticated
    },
    {
      path: '/myticket',
      name: 'myticket',
      component: () => import('../views/myticket.vue'),
      beforeEnter: isAuthenticated,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/prize',
      name: 'prize',
      component: () => import('../views/prize.vue'),
      beforeEnter: isAuthenticated,
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test.vue')
    },
    {
      path: '/addtrain',
      name: 'addtrain',
      component: () => import('../views/Addtrain.vue'),
      beforeEnter: (to, from, next) => {
        isAuthenticated(to, from, () => {
          isAdmin(to, from, next);
        });
      },
    }
    ,
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/CreateBlog.vue')
    },
     {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/inventory.vue'),
      beforeEnter: isAuthenticated
    },
    {
      path: '/addprize',
      name: 'addprize',
      component: () => import('../views/addprize.vue'),
      beforeEnter: (to, from, next) => {
        isAuthenticated(to, from, () => {
          isAdmin(to, from, next);
        });
      },
    },
    {
      path: '/admin',
      name: '/admin',
      component: () => import('../views/Admin.vue'),
      beforeEnter: (to, from, next) => {
        isAuthenticated(to, from, () => {
          isAdmin(to, from, next);
        });
      },
    }

  
 
  ]
})

export default router
