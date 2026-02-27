import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
export const app = createApp(App);
import router from './router'

app.use(createPinia())
app.use(router)
app.mount("#app");    
