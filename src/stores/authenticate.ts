import { ref } from 'vue'
import { defineStore } from 'pinia'
import keycloak from "../keycloak";

export const useAuthenticateStore = defineStore('auth', () => {
  const isAuth = ref(false)

  async function initKeycloak() {
    const authenticated = await keycloak.init({
      onLoad: 'login-required',
      pkceMethod: "S256",
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

