<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthenticateStore } from './stores/authenticate'

const router = useRouter();
const auth = useAuthenticateStore();

function back() {
  router.replace({ path: '/' })
}
</script>

<template>
    <header>
      <img alt="Zeitkapsel logo" class="logo" src="@/assets/logo.svg" width="300px" height="125px" />
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/service">Service</RouterLink>
          <RouterLink to="/static">Static</RouterLink>
        </nav>
        <span class="control-box">
          <button @click="back">Back</button>
          <button @click="auth.logout">Logout</button>
        </span>
      </div>
    </header>

  <RouterView class="router" />

</template>

<style scoped>
.control-box {
  position: absolute;
  top: 10px;
  right: 20px;
  height: 30px;
}

.control-box button {
  font-size: 16px;
  font-weight: bold;
  margin: 6px;
  background: none;
  border: none;
  color: var(--color-text);
}

.control-box button:hover {
  color: #00bd7e;
}

.logo {
  color: chartreuse;
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

@media (min-width: 100px) {
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

@media (max-width: 800px) {
  .logo {
    width: 200px;
  }
}
</style>
