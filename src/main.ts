import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import keycloak from "./keycloak.ts";

import App from './App.vue'
import router from './router'

keycloak.init({ 
  onLoad: 'login-required',
  pkceMethod: "S256",
}).then((authenticated) => {
  if (authenticated) {
    console.log('User is authenticated');

    const app = createApp(App);
    app.config.globalProperties.$keycloak = keycloak;
    app.use(createPinia())
    app.use(router)
    app.mount("#app");    
  } else {
    console.log('User is not authenticated');
    keycloak.login();
  }
}).catch((error) => {
  console.error('Keycloak initialization failed:', error);
});