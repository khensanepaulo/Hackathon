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
                    <strong>Próximos Passos</strong>
                </div>
                <div class="column is-4 size-24">
                    Boa Sorte!!!
                </div>
            </div>
        </div>

        <div class="columns" v-if="notificacaoModel.ativo">
            <div class="column is-offset-3 is-6">
                <div :class="notificacaoModel.classe">
                    <button @click="onClickFecharNotificacao()" class="delete" ></button>
                    {{ notificacaoModel.mensagem }}
                </div>
            </div>
        </div>

        <div v-if="passoModel.index === undefind">
            <div class="columns">
                <div class="column is-offset-3 is-6">
                    <p class="title"> Insirá o token para buscar o próximo passo </p>
                </div>
            </div>
            <div class="columns">
                <div class="column is-offset-3 is-6">
                    <input class="input is-primary is-large" v-model="alunoModel.token" type="text">
                </div>
            </div>
            <div class="columns">
                <div class="column is-offset-3 is-6">
                    <button class="button is-fullwidth is-info is-large" @click="onClickProximoPasso()"> Próximo Passo </button>
                </div>
            </div>
        </div>

        <div v-if="passoModel.index !== undefind">
            <div class="columns">
                <div class="column is-offset-3 is-6">
                    <label class="label">Título</label>
                    <input class="input" type="text" v-model="passoModel.titulo" disabled>
                </div>
            </div>
            <div class="columns">
                <div class="column is-offset-3 is-6">
                    <label class="label">Método</label>
                    <input class="input" type="text" v-model="passoModel.metodo" disabled>
                </div>
            </div>
            <div class="columns">
                <div class="column is-offset-3 is-6">
                    <label class="label">URL</label>
                    <input class="input" type="text" v-model="passoModel.url" disabled>
                </div>
            </div>
            <div class="columns">
                <div class="column is-offset-3 is-6">
                    <label class="label">Parâmetro</label>
                    <input class="input" type="text" v-model="passoModel.parametro" disabled>
                </div>
            </div>
            <div class="columns">
                <div class="column is-offset-3 is-6">
                    <label class="label">Descrição</label>
                    <textarea class="input textarea" type="text" v-model="passoModel.descricao" disabled> </textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'

    import { AlunoModel } from '@/model/aluno.model'
    import { PassoModel } from '@/model/passo.model'
    import { NotificacaoModel } from '@/model/notificacao.model'
    import { PassoClient } from '@/client/passo.client'

    /**
     * @author Eduardo Sganderla
     *
     * @since 1.0.0, 02/07/2022
     * @version 1.0.0
     */
    export default class PassoView extends Vue {

        private passoClient: PassoClient = new PassoClient()
        private notificacaoModel: NotificacaoModel = new NotificacaoModel()
        private alunoModel: AlunoModel = new AlunoModel()
        private passoModel: PassoModel = new PassoModel()


        private onClickProximoPasso(): void{
            this.passoClient.proximoPasso(this.alunoModel.token).then(
                success => {
                    this.passoModel = success 
                },
                error => {
                    this.notificacaoModel = this.notificacaoModel.new(
                        true, 'notification is-danger', 'Não foi possivel obter o Próximo Passo!!! Error: ' + error.data)
                }
            )
        }

        private onClickFecharNotificacao(): void {
            this.notificacaoModel = new NotificacaoModel()
        }
    }
</script>