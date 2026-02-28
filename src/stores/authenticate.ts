import { ref } from 'vue'
import { defineStore } from 'pinia'
import keycloak from "../keycloak";

export const useAuthenticateStore = defineStore('auth', () => {
  const isAuth = ref(false)
  const isInit = ref(false)

  async function initKeycloak() {
    if (isInit.value) return isInit.value && keycloak.authenticated

    isInit.value = await (async () => {
      await keycloak.init({
        onLoad: 'check-sso',
        pkceMethod: 'S256',
        silentCheckSsoRedirectUri:
          window.location.origin + '/silent-check-sso.html',
      })

      return true
    })()

    return isInit.value && keycloak.authenticated
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

