<script setup lang="ts">
  import { ref } from 'vue';
  const dashboardUrl = ref(import.meta.env.VITE_DASHBOARD_URL)
</script>

<template>
  <div class="frame-wrapper">
      <iframe class="dashboard-frame" :src="dashboardUrl" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
  .frame-wrapper{
    display: flex;
    height: 86vh;

    .dashboard-frame {
      width: 100%;
      height: 100%;
    }
  }
</style>
