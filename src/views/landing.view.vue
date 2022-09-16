<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="columns">
        <div class="column is-2" style="background-color: #452c84; height: auto;">

            <div class="column is-12">
                <label class="label" style="color:grey">Dados pessoais</label>

            </div>
            <div class="column is-12">
                <label class="label" style="color:grey">Teste de Personalidade</label>
            </div>
            <div class="column is-12">
                <label class="label" style="color:grey">Teste de Prático</label>
            </div>

        </div>

        <div class="column is-9 conteudo">
            <div class="container">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3" style="padding-top: 39%;">
                            <img src="https://dernegocios.com.br/wp-content/uploads/2019/08/Contabilidade-valuation.jpg"
                                alt="Placeholder image" style="height: 400px">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Logotipo_empresa.png"
                                        alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">Assistente contábil</p>
                                <p class="subtitle is-6">@suaempresa</p>
                            </div>
                        </div>

                        <div class="content">
                            Com mais de 50 mil clientes, atuando em mais de 50 cidades do Brasil, a Contabilizei está
                            mudando a maneira como o micro e pequeno empreendedor gerencia o seu negócio em nosso país.
                            Continuamos a crescer rapidamente, criando novos produtos e proporcionando que o
                            empreendedor seja o contador de sua própria história.
                            Por aqui, somos mais de 1.000 pessoas, todas selecionadas a dedo, e que levam muito a sério
                            o nosso propósito de resolver o problema real brasileiro, trabalhando em busca de soluções
                            inovadoras para facilitar a vida dos nossos clientes.
                            <br>
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>

                <div class="field column is-4" style="margin-left: 70%;">
                    <div class="columns">
                        <div class="column is-offset-4 is-8">
                            <router-link to="/candidato" class="button is-success is-fullwidth is-large"> Prosseguir
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
import { CandidatoModel } from '@/model/candidato.model'
import { CandidatoClient } from '@/client/candidato.client'
import { TestePersonalidade } from '@/model/teste-personalidade.model'
import { TestePersonalidadeClient } from '@/client/testePersonalidade.client'

export default class FormularioList extends Vue {

    public notificacao: NotificacaoModel = new NotificacaoModel()
    public candidato: CandidatoModel = new CandidatoModel()
    public candidatoClient = new CandidatoClient()
    public testePersonalidade = new TestePersonalidade()
    public testePersonalidadeClient = new TestePersonalidadeClient()
    public testeList: TestePersonalidade[] = []

    public mounted(): void {
        this.testePersonalidadeClient = new TestePersonalidadeClient()
        this.listarTeste()
    }
    private listarTeste(): void {
        this.testePersonalidadeClient.listar()
            .then(
                async success => {
                    this.testeList = await success
                },
                error => console.log(error)
            )
    }

    public onClickFecharNotificacao(): void {
        this.notificacao = new NotificacaoModel()
    }

    public onClickSalvar(): void {
        this.testePersonalidadeClient.cadastrar(this.testePersonalidade)
            .then(
                success => {
                    this.notificacao = this.notificacao.new(true, 'notification is-success', 'Especialidade Cadastrada com sucesso!!!')
                    this.onClickLimpar()
                }, error => {
                    this.notificacao = this.notificacao.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                })

    }


    private onClickLimpar(): void {
        this.testePersonalidade = new TestePersonalidade()
    }
}
</script>