<script setup lang="ts">
  import { ref } from 'vue';
  const dashboardUrl = ref(import.meta.env.VITE_DASHBOARD_URL)
</script>

<template>
  <div class="wrapper">
    <a class="login" id="grafana" href="https://zeitkapsel.iosse.de/grafana/login" 
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
        <img src="../assets/grafana-logo.png" alt="grafana">
    </a>  
    <div class="frame-wrapper">
        <iframe class="dashboard-frame" :src="dashboardUrl" frameborder="0"></iframe>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    position: relative;
  }

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    z-index: 10;  
    width: 100%;
    height: 80px;
    background-color: #111217;
    img {
          height: 80px;

    }
  }

  .login:hover {
    background-color: darkgray;
  }

  .frame-wrapper{
    display: flex;
    height: 86vh;

    .dashboard-frame {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>
