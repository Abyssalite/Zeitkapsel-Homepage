import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthenticateStore } from './stores/authenticate'

export const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount("#app");    
export const auth = useAuthenticateStore()