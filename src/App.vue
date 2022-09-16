<template>

  <div class="column">
    <div class="columns is-12 menu-top" style="background-color: #8102DB; border-bottom-style:1px solid #FFF">
      Candidato
    </div>
  </div>
  <div class="column is-12">
    <router-view> </router-view>
  </div>

</template>

<style lang="scss">
@import "~bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.conteudo {
  margin-top: 30px;
}

.menu-top {
  background: hsl(0, 0%, 29%);
  padding: 15px;
  color: white;
}
</style>