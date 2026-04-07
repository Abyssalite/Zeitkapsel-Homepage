import { ref } from 'vue'
import { defineStore } from 'pinia'
import keycloak from "../keycloak";

export const useAuthenticateStore = defineStore('auth', () => {
  const isAuth = ref(false)
  const isInit = ref(false)

  async function initKeycloak() {
    console.log( isInit.value,isAuth.value )
    if (isInit.value) return isInit.value

    isInit.value = true
    isAuth.value = await keycloak.init({
      onLoad: 'login-required',
      pkceMethod: 'S256',
    })
    return isInit.value
  }

  async function login() {
    return keycloak.login({
      redirectUri: window.location.href,
    })
  }

  async function logout() {
    isAuth.value = false
    return keycloak.logout({
      redirectUri: window.location.origin,
    })
  }

  return { isAuth, keycloak, initKeycloak, login, logout }
})

