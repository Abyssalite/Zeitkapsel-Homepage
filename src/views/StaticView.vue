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
        <img src="../assets/grafana.png" alt="grafana">
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
    overflow: hidden;
    position: absolute;
    top: 10px;
    right: 20px;
    
    z-index: 10;  
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: none;
    img {
      height: 80px;
    }
  }

  .login:hover {
    background-color: #F05A2833;
  }

  .frame-wrapper{
    display: flex;
    height: 100%;
    overflow: hidden;

    .dashboard-frame {
      width: 100%;
      height: calc(100vh - 125px);
      display: block;
    }
  }
  @media (max-width: 814px) {
    .login {
      top: -80px;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    img {
      height: 60px;
    }
    }
  }
</style>
