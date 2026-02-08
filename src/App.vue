<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import keycloak from './keycloak';

function logout() {
  keycloak.logout({ redirectUri: window.location.origin + import.meta.env.VITE_BASE_URL});
}
</script>

<template>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/page1">Page1</RouterLink>
          <RouterLink to="/page2">Page2</RouterLink>
          <RouterLink to="/page3">Page3</RouterLink>
        </nav>
      </div>
    </header>
    <button class="logout" @click="logout">Logout</button>

  <RouterView class="router" />

</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.top-div {
  display: flex;
}

.logout {
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
