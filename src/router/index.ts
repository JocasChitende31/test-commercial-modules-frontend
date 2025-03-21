import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const isAuthenticate = async () => {
  const token = sessionStorage.getItem('token')
  if (!token) return false

  try {
    return true
  } catch (error) {
    return false
  }
}

const isEmailValid = async () => {
  const email = sessionStorage.getItem('isValidEmail')
  return !!email
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/request-email',
      name: 'Auth Login Email',
      component: () => import('../views/AuthRequestEmail.vue'),
    },
    {
      path: '/request-password',
      name: 'Auth Login Password',
      component: () => import('../views/AuthRequestPassword.vue'),
    },
  ],
})

const publicRoutes = ['/request-email']
const passwordRoutes = ['/request-password']

router.beforeEach(async (to, from, next) => {
  const authenticated = await isAuthenticate()

  if (publicRoutes.includes(to.path)) {
    return next()
  }

  if (passwordRoutes.includes(to.path)) {
    const emailValid = await isEmailValid()
    if (!emailValid) {

      return next('/request-email')
    }
    return next()
  }

  if (!authenticated) {
    return next('/request-email')
  }

  next()
})

export default router
