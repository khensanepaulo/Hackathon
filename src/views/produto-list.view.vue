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
                    <strong>Lista de Produtos</strong>
                </div>
                <div class="column is-4 size-24">
                    Boa Sorte!!!
                </div>
            </div>
        </div>

        <div class="columns" v-if="notificacaoModel.ativo">
            <div class="column is-12">
                <div :class="notificacaoModel.classe">
                    <button @click="onClickFecharNotificacao()" class="delete" ></button>
                    {{ notificacaoModel.mensagem }}
                </div>
            </div>
        </div>

        <table class="table is-striped is-fullwidth">
            <thead>
                <tr class="has-background-primary">
                    <th class="has-text-white" >Nome</th>
                    <th class="has-text-white">Descrição</th>
                    <th class="has-text-white">Preço</th>
                    <th class="has-text-white">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in produtoModelList" :key="item.id">
                    <th>{{ item.nome }}</th>
                    <th>{{ item.descricao }}</th>
                    <th>{{ item.preco }}</th>
                    <th>{{ item.quantidade }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { Vue } from 'vue-class-component'

    import { NotificacaoModel } from '@/model/notificacao.model'
    import { ProdutoClient } from '@/client/produto.client'
    
    /**
     * @author Eduardo Sganderla
     *
     * @since 1.0.0, 02/07/2022
     * @version 1.0.0
     */
    export default class PassoView extends Vue {

        private notificacaoModel: NotificacaoModel = new NotificacaoModel()
        private produtoClient: ProdutoClient = new ProdutoClient()
        //private produtoModelList: ProdutoModel[] = []

        public mounted(): void {
            this.listarProdutos()
        }

        private listarProdutos(): void {
            // this.produtoClient.listar('RWR1YXJkbyBTZ2FuZGVybGE').then(
            //     success => {
            //         this.produtoModelList = success
            //     },
            //     error => {
            //         this.notificacaoModel = this.notificacaoModel.new(
            //             true, 'notification is-danger', 'Não foi possivel obter o Próximo Passo!!! Error: ' + error.data)
            //     }
            // )
        }

        // private onClickExcluir(id: number): void { 
            
        // }

        private onClickFecharNotificacao(): void {
            this.notificacaoModel = new NotificacaoModel()
        }
    }
</script>