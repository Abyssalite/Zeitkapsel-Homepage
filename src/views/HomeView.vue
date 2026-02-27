<script setup lang="ts">
</script>

<template>
  <div class="background">
    <div class="select-box">
      <a href="https://zeitkapsel.iosse.de/elab" rel="nofollow">
        <div class="link-wrapper">
          <h2>eLabFTW</h2>
          <img src="../assets/elabftw-logo-only.svg" alt="elabftw">
        </div>
      </a>

      <a href="https://zeitkapsel.iosse.de/git" rel="nofollow">
        <div class="link-wrapper">
          <h2>Gitea</h2> 
          <img src="../assets/gitea-logo.svg" alt="elabftw">

        </div>
      </a>

      <a href="https://zeitkapsel.iosse.de/jupyter" rel="nofollow">
        <div class="link-wrapper">
          <h2>JupyterLab</h2> 
          <img src="../assets/jupyter-logo.svg" alt="elabftw">

        </div>
      </a>

      <a href="https://app.element.io/#/login" rel="nofollow">
        <div class="link-wrapper">
          <h2>Element</h2> 
          <img src="../assets/element.png" alt="elabftw">

        </div>
      </a>

      <a href="https://zeitkapsel.iosse.de/auth" rel="nofollow">
        <div class="link-wrapper">
          <h2>Keycloak</h2> 
          <img src="../assets/Keycloak_Logo.png" alt="elabftw">

        </div>
      </a>

      <a href="https://zeitkapsel.iosse.de/dev" rel="nofollow">
        <div class="link-wrapper">
          <h2>Cockpit</h2> 
          <img src="../assets/cockpit.png" alt="elabftw">

        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.select-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 80px 100px;
}

.select-box a{
  margin: 20px;
  height: 250px;
  width: 300px;

img {
    width: 200px;
    height: 200px;
  }
}

.link-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

</style>
