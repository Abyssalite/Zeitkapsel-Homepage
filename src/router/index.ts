import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StaticView from '../views/StaticView.vue'
import keycloak from "../keycloak";
import { app } from "../main";


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
      beforeEnter: (to, from, next) => {
        keycloak.init({ 
          onLoad: 'login-required',
          pkceMethod: "S256",
        }).then((authenticated) => {
          if (authenticated) {
            console.log('User is authenticated');
            app.config.globalProperties.$keycloak = keycloak;
            next()
          } else {
            console.log('User is not authenticated');
            keycloak.login();
          }
        }).catch((error) => {
          console.error('Keycloak initialization failed:', error);
        });
      }
    }
  ],
})

export default router
