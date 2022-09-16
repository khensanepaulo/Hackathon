<template>
    <div class="columns">
        <div class="column is-2" style="background-color: #452c84; height: 613px;">

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
                            {{testePersonalidade.pergunta}}
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
import { CandidatoModel } from '@/model/candidato.model'
import { CandidatoClient } from '@/client/candidato.client'
import { TestePersonalidade } from '@/model/teste-personalidade.model'
import { TestePersonalidadeClient } from '@/client/testePersonalidade.client'
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

export default class PassoView extends Vue {

    public notificacaoModel: NotificacaoModel = new NotificacaoModel()
    public candidato: CandidatoModel = new CandidatoModel()
    public candidatoClient = new CandidatoClient()
    public testePersonalidade = new TestePersonalidade()
    public testePersonalidadeClient = new TestePersonalidadeClient()
    private pageRequest: PageRequest = new PageRequest()
    private pageResponse: PageResponse<TestePersonalidade> = new PageResponse()
    public testeList: TestePersonalidade[] = []

    public mounted(): void {
        this.testePersonalidadeClient = new TestePersonalidadeClient()
        this.listarTeste()
    }
    private listarTeste(): void {
        this.testePersonalidadeClient.listar()
            .then(
                success => {
                    this.testeList = this.pageResponse.content
                },
                error => console.log(error)
            )
    }

    public onClickFecharNotificacao(): void {
        this.notificacaoModel = new NotificacaoModel()
    }
}
</script>