<script setup lang="ts">
</script>

<template>
  <div class="page">
    <div class="background">
    </div>

    <div class="select-box">
      <a id="elabftw" href="https://zeitkapsel.iosse.de/elab" 
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <div class="link-wrapper">
          <h2>eLabFTW</h2>
          <img src="../assets/elabftw-logo-only.svg" alt="elabftw">
        </div>
      </a>

      <a id="gitea" href="https://zeitkapsel.iosse.de/git"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <div class="link-wrapper">
          <h2>Gitea</h2> 
          <img src="../assets/gitea-logo.svg" alt="gitea">
        </div>
      </a>

      <a id="jupyter" href="https://zeitkapsel.iosse.de/jupyter"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <div class="link-wrapper">
          <h2>JupyterLab</h2> 
          <img src="../assets/jupyter-logo.svg" alt="jupyter">
        </div>
      </a>

      <a id="element" href="https://app.element.io/#/login"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <div class="link-wrapper">
          <h2>Element</h2> 
          <img src="../assets/element.png" alt="element">
        </div>
      </a>

      <a id="keycloak" href="https://zeitkapsel.iosse.de/auth"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <div class="link-wrapper">
          <h2>Keycloak</h2> 
          <img src="../assets/Keycloak_Logo.png" alt="keycloak">
        </div>
      </a>

      <a id="cockpit" href="https://zeitkapsel.iosse.de/dev"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <div class="link-wrapper">
          <h2>Cockpit</h2> 
          <img src="../assets/cockpit.png" alt="cockpit">
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  
  transition: background-color 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.select-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  flex-wrap: wrap;
  margin: 80px 100px;
}

.select-box a{
  margin: 20px;
  height: 260px;
  width: 300px;
  border-radius: 20px;
  background-color: #2222 !important;
    transition: 0.5s;

img {
    margin-top: 5px;
    width: 200px;
    height: 200px;
    transition: background-color 1s cubic-bezier(0.4, 0, 0.2, 1);
    transition: 0.5s;
  }
}

.select-box a:hover {
  background-color: #5555 !important;
  transform: scale(104%);

  img {
      transform: scale(110%);
  }
}

.page:has(#elabftw:hover) .background {
  background-color: #29adb933 !important;
}

.page:has(#gitea:hover) .background {
  background-color: #5f992633 !important;
}

.page:has(#jupyter:hover) .background {
  background-color: #F3772633 !important;
}

.page:has(#element:hover) .background {
  background-color: #0DBD8B33 !important;
}

.page:has(#keycloak:hover) .background {
  background-color: #33C6E933 !important;
}

.page:has(#cockpit:hover) .background {
  background-color: #3465A433 !important;
}

.link-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
