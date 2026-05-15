<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthenticateStore } from './stores/authenticate'
import { ref } from 'vue';

const router = useRouter();
const auth = useAuthenticateStore();

function back() {
  router.replace({ path: '/' })
}

const gitdUrl = ref(import.meta.env.VITE_GIT_URL)

</script>

<template>
    <header>
      <img alt="Zeitkapsel logo" class="logo" src="@/assets/logo.svg" />
      <div class="wrapper">
        <nav>
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/">Service</RouterLink>
          <RouterLink to="/stats">Stats</RouterLink>
        </nav>
        <div class="control-box">
          <a :href="gitdUrl" 
            title="code repository"         
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg width="70" height="70" viewBox="0 0 250 250">
              <path
                id="triangle"
                d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" 
              />
              <g transform="translate(180 -20) scale(0.5) rotate(45)">
                <path
                  fill="#E24329"
                  d="M234.415,153.53322,207.08594,51.04787a7.99994,7.99994,0,0,0-15.22022-.74756L170.228,108H85.772L64.13477,50.3008a8.00014,8.00014,0,0,0-15.22071.74707L21.585,153.53322a12.02834,12.02834,0,0,0,4.76416,12.958l94.82031,65.645a11.94608,11.94608,0,0,0,5.45264,2.03467,3.97163,3.97163,0,0,0,.71924.07275c.02734,0,.05517-.00683.08252-.00732.19214.00879.384.02148.57617.02148s.384-.01269.57617-.02148c.02735.00049.05518.00732.08252.00732a3.95865,3.95865,0,0,0,.71826-.07275,11.9487,11.9487,0,0,0,5.45362-2.03467l94.82031-65.645A12.02834,12.02834,0,0,0,234.415,153.53322ZM199.35645,53.1094,213.9939,108H178.772ZM128,220.60891,88.77173,116h78.45654ZM56.644,53.1094,77.228,108H42.00635ZM29.31445,155.59426,39.87305,116H80.228l39.53784,105.43457-88.863-61.52051A4.01148,4.01148,0,0,1,29.31445,155.59426Zm195.78272,4.31982-88.863,61.52051L175.772,116H216.1272l10.55835,39.59424A4.01148,4.01148,0,0,1,225.09717,159.91408Z" 
                />
              </g>
            </svg>
          </a>
          <span>
            <button @click="back">Back</button>
            <button @click="auth.logout">Logout</button>
          </span>
        </div>
      </div>
    </header>

  <RouterView class="router" />

</template>

<style scoped>
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .control-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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

  .control-box a:hover {
    background-color: #0000 !important;
    g {
        transform: translate(180px, -40px) rotate(45deg) scale(0.6);
    }
  }

  #triangle {
    fill: var(--trig-bg);
  }

  .logo {
    width:300px;
    height:125px;
    transition: 0.5s;
    margin: 0 2rem 0 0;
  }

  .logout {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 30px;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
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

@media (max-width: 800px) {
  .logo {
    width: 200px;
  }
}
</style>
