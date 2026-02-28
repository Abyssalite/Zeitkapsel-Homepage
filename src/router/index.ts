import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StaticView from '../views/StaticView.vue'
import { app, auth } from "../main";

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
        if (import.meta.env.VITE_REQUIRE_AUTHENTICATE == "true") {
          console.log('User authenticated: ', await auth.initKeycloak());

          if (!auth.isAuth) {
            console.log('User is not authenticated');
            await auth.login();
            if (await auth.initKeycloak() && auth.keycloak.token) auth.isAuth = true
          } 
          if (auth.isAuth){
            app.config.globalProperties.$keycloak = auth.keycloak;
            next()
            return
          }
          return await auth.logout()
        } else next()
      }
    }
  ],
})

export default router
