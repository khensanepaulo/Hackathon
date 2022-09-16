<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="columns">
        <div class="column is-2" style="background-color: #452c84; height: auto;">

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
                <div class="field column is-6" style="width: 100%; display: grid; grid-template-columns: auto auto auto;">
                    <div class="control field column is-10" v-for="item in testeList">
                        <label style=" font-weight:bolder;"> Marque o que mais o identifica</label>
                        <div  v-for="termo in item" :key="termo.id"> 
                        <label class="radio column is-12" style="margin-left: 8px">
                            <input type="radio" :name="termo.pergunta" >
                            {{termo.termo}}
                        </label>
                        </div>
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

export default class FormularioList extends Vue {

    public notificacaoModel: NotificacaoModel = new NotificacaoModel()
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
        this.notificacaoModel = new NotificacaoModel()
    }
}
</script>