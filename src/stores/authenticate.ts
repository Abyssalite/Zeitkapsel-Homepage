import { ref } from 'vue'
import { defineStore } from 'pinia'
import keycloak from "../keycloak";

export const useAuthenticateStore = defineStore('auth', () => {
  const isAuth = ref(false)
  const isInit = ref(false)

  async function initKeycloak() {
    if (isInit.value) return isInit.value

    isInit.value = true
    isAuth.value = await keycloak.init({
      onLoad: 'login-required',
      pkceMethod: 'S256',
    })

    return isInit.value
  }

  async function login() {
    keycloak.login({
      redirectUri: window.location.href,
    });
      isAuth.value = keycloak.authenticated ?? false
    
    return
  }

  async function logout() {
    keycloak.logout({
      redirectUri: window.location.origin,
    });
    isAuth.value = keycloak.authenticated ?? false
    
    return
  }

  function getIsAuth() {
  return isAuth || (keycloak.authenticated ?? false);
}

  return { keycloak, initKeycloak, login, logout, getIsAuth }
})

