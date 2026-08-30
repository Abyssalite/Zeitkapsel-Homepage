import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StaticView from '../views/StaticView.vue'
import ServiceView from '../views/ServiceView.vue'
import { app, auth } from "../main";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'Service',
      component: ServiceView,
    },
    {
      path: '/stats',
      name: 'Stats',
      component: StaticView,
      beforeEnter: async (_to, _from, next) => {
        if (import.meta.env.VITE_REQUIRE_AUTHENTICATE == "true") {
          console.log('Keycloak init: ', await auth.initKeycloak());
          console.log('Authenticated: ', auth.getIsAuth())

          if (!auth.getIsAuth()) {
            console.log('User is not authenticated');
            await auth.login();
          } 
          if (auth.getIsAuth()){
            app.config.globalProperties.$keycloak = auth.keycloak;
            next()
          }
          return
        } else next()
      }
    }
  ],
})

export default router
