import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StaticView from '../views/StaticView.vue'
import { app, auth } from "../main";
import { ref } from 'vue';

const isInit = ref(false)

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/static',
      name: 'Static',
      component: StaticView,
      beforeEnter: async (to, from, next) => {
        if (!isInit.value) {
          isInit.value = true
          auth.isAuth = await auth.initKeycloak()
          console.log('Keycloak Initialized: ', auth.isAuth);
        }

        if (auth.isAuth) {
          app.config.globalProperties.$keycloak = auth.keycloak;
          next()
        } else {
          console.log('User is not authenticated');
          auth.login();
        }
      }
    }
  ],
})

export default router
