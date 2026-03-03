<script setup lang="ts">
  import { ref } from 'vue';
  const docsUrl = ref(import.meta.env.VITE_DOCS_URL)
</script>

<template>
  <div class="page">
      <div class="docs-wrapper">    
        <zero-md v-if="docsUrl" :src="docsUrl"></zero-md>
        <zero-md v-else src="src/components/docs/zeitkapsel.md"></zero-md>
      </div>
  </div>
</template>

<style scoped>
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
  } 

  .docs-wrapper {
    display: flex;
    width: 90%;
    border-radius: 20px;
    filter: drop-shadow(10px 10px 4px rgb(15, 15, 15));

    justify-content: center;
    align-items: center;
    background-color: #0d1117 !important;
    padding: 60px 10px;

    zero-md {
      width: 90%;
    }
  }
</style>
