<template>
    <div class="container">
        <div class="notification is-primary">
            <div class="columns">
                <div class="column is-4 size-24">
                    Prova - Quarto Projeto
                </div>
                <div class="column is-4 size-24">
                    <strong>Menu</strong>
                </div>
                <div class="column is-4 size-24">
                    Boa Sorte!!!
                </div>
            </div>
        </div>

        <div class="columns">
            <div class="column is-offset-3 is-6">
                <router-link to="/login" class="button is-info is-fullwidth is-large">Login</router-link>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-3 is-6">
                <router-link to="/proximos-passos" class="button is-info is-fullwidth is-large">Próximos Passos</router-link>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-4 is-4">
                <hr/>
            </div>
        </div>

        <!-- Adicionar aqui o resto do menu -->
        
        <div class="columns">
            <div class="column is-offset-3 is-6">
                <div class="columns">
                    <div class="column is-6">
                        <router-link to="/produtos-listar" class="button is-info is-fullwidth is-large">Listar Produtos</router-link>
                    </div>
                    <div class="column is-6">
                        <router-link to="/produto-cadastrar" class="button is-info is-fullwidth is-large">Cadastrar Produto</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-3 is-6">
                <router-link to="/responder-pergunta" class="button is-info is-fullwidth is-large">Responder a pergunta</router-link>
            </div>
        </div>

        <div class="columns">
            <div class="column is-offset-4 is-4">
                <hr/>
            </div>
        </div>

        <div class="columns">
            <div class="column is-offset-3 is-6">
                <router-link to="/alunos-listar" class="button is-danger is-fullwidth is-large">Listar Alunos</router-link>
            </div>
        </div>


    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'
    
    /**
     * @author Eduardo Sganderla
     *
     * @since 1.0.0, 02/07/2022
     * @version 1.0.0
     */
    export default class MenuView extends Vue { }

</script>