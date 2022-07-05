<template>
    <div class="container">
        <div class="notification is-primary">
            <div class="columns">
                <div class="column is-4 size-24">
                    <router-link to="/" class="button">
                        Menu
                    </router-link>
                    Prova - Quarto Projeto
                </div>
                <div class="column is-4 size-24">
                    <strong>Login</strong>
                </div>
                <div class="column is-4 size-24">
                    Boa Sorte!!!
                </div>
            </div>
        </div>

        <div class="columns">
            <div class="column is-offset-3 is-6">
                <p class="title"> Informações para realizar o login </p>
                <lu>
                    <li>Para realizar o login é bem simples.</li>
                    <li>O login retornará um token, salve esse token. </li>
                    <br />
                    <li><b> Login: </b> é composto pelo <u>nome</u> ou <u>nome.segundonome</u> </li>
                    <li><b> Senha: </b> é composto pelo <u>ultimonome2022</u> </li>
                </lu>
            </div>
        </div>

        <div class="columns">
            <div class="column is-offset-3 is-6">
                <hr/>
                <div :class="notificacaoModel.classe" v-if="notificacaoModel.ativo">
                    <button @click="onClickFecharNotificacao()" class="delete"></button>
                    {{ notificacaoModel.mensagem }}
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-3 is-6">
                <input class="input is-primary is-large" v-model="alunoModel.token" type="text" disabled>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-3 is-6">
                <input class="input is-primary" type="text" v-model="alunoModel.login" placeholder="Login">
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-3 is-6">
                <input class="input is-primary" type="password" v-model="alunoModel.senha" placeholder="Senha">
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-3 is-6">
                <button class="button is-fullwidth is-info is-large" @click="onClickGerarToken()"> Gerar Token </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    
    import { Vue } from 'vue-class-component'

    import { AlunoModel } from '@/model/aluno.model'
    import { NotificacaoModel } from '@/model/notificacao.model'
    import { AlunoClient } from '@/client/aluno.client'

    /**
     * @author Eduardo Sganderla
     *
     * @since 1.0.0, 02/07/2022
     * @version 1.0.0
     */
    export default class LoginView extends Vue {

        private alunoClient: AlunoClient = new AlunoClient()
        private notificacaoModel: NotificacaoModel = new NotificacaoModel()
        private alunoModel: AlunoModel = new AlunoModel()
        

        private onClickGerarToken(): void { 
            this.alunoClient.token(this.alunoModel.login, this.alunoModel.senha).then(
                success => {
                    this.alunoModel.token = success

                    this.notificacaoModel = this.notificacaoModel.new(
                        true, 'notification is-primary', 'Token obtido com sucesso!!!')
                }, 
                error => {
                    this.notificacaoModel = this.notificacaoModel.new(
                        true, 'notification is-danger', 'Não foi possivel obter o Token!!! Error: ' + error.data)
                }
            )
        }

        private onClickFecharNotificacao(): void {
            this.notificacaoModel = new NotificacaoModel()
        }
    }

</script>