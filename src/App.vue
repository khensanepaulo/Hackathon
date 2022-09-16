<template>

  <div class="column">
    <div class="columns is-12 menu-top"
      style="background-color: rgb(54 15 81);border-bottom-style: solid; border-color: black; font-family: fantasy; font-size: 20px; color: rgb(170 115 33);">
      Candidato

      <div id="navbarBasicExample" class="navbar-menu" style="margin-left: 85%;">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" style="color: aliceblue; font-family: initial; font-size: 13px;">
              Saiba Mais
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
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