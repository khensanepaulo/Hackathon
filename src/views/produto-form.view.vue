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
                    <strong>Cadastrar Produto</strong>
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

        <div class="columns">
            <div class="column is-offset-3 is-6">
                <label class="label">Nome</label>
                <input class="input" type="text" v-model="produtoModel.nome">
            </div>
        </div>
        
        <div class="columns">
            <div class="column is-offset-3 is-6">
                <label class="label">Descrição</label>
                <input class="input" type="text" v-model="produtoModel.descricao">
            </div>
        </div>

        <div class="columns">
            <div class="column is-offset-3 is-6">
                <label class="label">Preço</label>
                <input class="input" type="text" v-model="produtoModel.preco">
            </div>
        </div>

        <div class="columns">
            <div class="column is-offset-3 is-6">
                <label class="label">Quantidade</label>
                <input class="input" type="text" v-model="produtoModel.quantidade">
            </div>
        </div>

        <div class="columns">
            <div class="column is-offset-3 is-6">
                <button class="button is-fullwidth is-info is-large" @click="onClickSalvar()"> Salvar </button>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'

    import { NotificacaoModel } from '@/model/notificacao.model'
    import { ProdutoClient } from '@/client/produto.client'
    import { ProdutoModel } from '@/model/produto.model'


    /**
     * @author Eduardo Sganderla
     *
     * @since 1.0.0, 02/07/2022
     * @version 1.0.0
     */
    export default class PassoView extends Vue {

        private notificacaoModel: NotificacaoModel = new NotificacaoModel()
        private produtoClient: ProdutoClient = new ProdutoClient()
        private produtoModel: ProdutoModel = new ProdutoModel()

        private onClickSalvar(): void{
            this.produtoClient.cadastrar('RWR1YXJkbyBTZ2FuZGVybGE', this.produtoModel).then(
                success => {
                    this.onClickLimparForm()
                    this.notificacaoModel = this.notificacaoModel.new(
                        true, 'notification is-primary', 'Produto Cadastrado com sucesso.')
                },
                error => {
                    this.notificacaoModel = this.notificacaoModel.new(
                        true, 'notification is-danger', 'Não foi possivel obter o Próximo Passo!!! Error: ' + error.data)
                }
            )
        }

        private onClickLimparForm(): void {
            this.produtoModel = new ProdutoModel()
        }

        private onClickFecharNotificacao(): void {
            this.notificacaoModel = new NotificacaoModel()
        }
    }
</script>