import { ref } from 'vue'
import { defineStore } from 'pinia'
import keycloak from "../keycloak";

export const useAuthenticateStore = defineStore('auth', () => {
  const isAuth = ref(false)

  function initKeycloak() {
    const authenticated = keycloak.init({
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      silentCheckSsoRedirectUri:
        window.location.origin + '/silent-check-sso.html',
    })
    return authenticated
  }

  function login() {
    isAuth.value = true
    return keycloak.login({
      redirectUri: window.location.href,
    })
  }

  function logout() {
    return keycloak.logout({
      redirectUri: window.location.origin,
    })
  }

  return { isAuth, keycloak, initKeycloak, login, logout }
})

