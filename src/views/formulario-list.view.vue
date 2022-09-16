<template>
    <div class="columns">
        <div class="column is-2" style="background-color: #480FD9; height: 600px;">

            <div class="column is-12">
                <label class="label" style="color:grey">Dados pessoais</label>

            </div>
            <div class="column is-12">
                <label class="label" style="color:white">>Teste de Personalidade</label>
            </div>
            <div class="column is-12">
                <label class="label" style="color:grey">Teste de Prático</label>
            </div>

        </div>

        <div class="column is-9 conteudo">
            <div class="container">
                <div class="field column is-6">


                    <div class="control field column is-7">
                        <label style=" font-weight:bolder;"> Marque o que mais o identifica</label>
                        <label class="radio column is-12" style="margin-left: 8px">
                            <input type="radio" name="foobar">
                            Foo
                        </label>
                        <label class="radio column is-12">
                            <input type="radio" name="foobar" checked>
                            Bar
                        </label>
                        <label class="radio column is-12">
                            <input type="radio" name="foobar" checked>
                            Bar
                        </label>
                        <label class="radio column is-12">
                            <input type="radio" name="foobar" checked>
                            Bar
                        </label>
                    </div>

                </div>

                <div class="field column is-4" style="margin-left: 70%;">
                    <div class="columns">
                        <div class="column is-offset-4 is-8">
                            <router-link to="/teste" class="button is-success is-fullwidth is-large"> Próximo
                                passo
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { NotificacaoModel } from '@/model/notificacao.model'
import { ProdutoClient } from '@/client/testePersonalidade.client'


export default class PassoView extends Vue {

    public notificacaoModel: NotificacaoModel = new NotificacaoModel()
    public produtoClient: ProdutoClient = new ProdutoClient()

    public mounted(): void {
        this.listarProdutos()
    }

    public listarProdutos(): void {
        this.produtoClient.listar('S2hlbnNhbmUgUGF1bG8gSm9zc2Fp').then(
            success => {
                // this.produtoModelList = success
            },
            error => {
                this.notificacaoModel = this.notificacaoModel.new(
                    true, 'notification is-danger', 'Não foi possivel obter o Próximo Passo!!! Error: ' + error.data)
            }
        )
    }

    public onClickExcluir(id: number): void {
        this.produtoClient.excluir('S2hlbnNhbmUgUGF1bG8gSm9zc2Fp', id).then(
            success => {
                this.notificacaoModel = this.notificacaoModel.new(
                    true, 'notification is-success', 'sucesso')

            },
            error => {
                this.notificacaoModel = this.notificacaoModel.new(
                    true, 'notification is-danger', 'Não foi possivel eliminar' + error.data)
            }
        )
    }

    public onClickFecharNotificacao(): void {
        this.notificacaoModel = new NotificacaoModel()
    }
}
</script>