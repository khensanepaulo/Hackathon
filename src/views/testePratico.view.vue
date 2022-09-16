<template>

    <div class="columns">
        <div class="column is-2" style="background-color: #480FD9; height: 600px;">

            <div class="column is-12">
                <label class="label" style="color:grey">Dados pessoais</label>

            </div>
            <div class="column is-12">
                <label class="label" style="color:grey">Teste de Personalidade</label>
            </div>
            <div class="column is-12">
                <label class="label" style="color:white">>Teste de Prático</label>
            </div>

        </div>

        <div class="column is-9 conteudo">
            <div class="container">
                <div class="field column is-6" style="margin-left: 30%;">

                    <div class="column is-11" style="text-align: center;">
                        <label>Baixe o Teste Prático e após resolver anexe no campo abaixo</label>
                        <a href="test_file.zip" download> Clique aqui</a>
                    </div>


                    <div class="file is-info has-name" style="margin-top: 300px; margin-left: 15px;">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                                <span class="file-label">
                                    Teste Prático
                                </span>
                            </span>
                            <span class="file-name">
                                Seleccione um ficheiro
                            </span>
                        </label>
                    </div>

                </div>

                <div class="field column is-4" style="margin-left: 28%;">
                    <div class="columns">
                        <div class="column is-offset-4 is-8">
                            <router-link to="/formulario" class="button is-success is-fullwidth is-large"> Salvar
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
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
<script lang="ts">
import { Vue } from 'vue-class-component'

export default class MenuView extends Vue { }

</script>