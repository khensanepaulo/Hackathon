<template>

    <div class="columns">
        <div class="column is-2" style="background-color: #480FD9; ">

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

                    <div class="control column is-12">
                        <label class="label">Nome Completo</label>
                        <input class="input" type="text" v-model="candidato.nome" placeholder="nome completo">
                    </div>

                    <div class="control column is-12">
                        <label class="label">CPF</label>
                        <input class="input" type="text" v-model="candidato.cpf" placeholder="CPF">
                    </div>

                    <div class="control column is-12">
                        <label class="label">Data de Nascimento</label>
                        <input class="input" type="date" v-model="candidato.dataNascimento">
                    </div>

                    <div class="control column is-12">
                        <label class="label">Email</label>
                        <input class="input" type="text" v-model="candidato.email" placeholder="email">
                    </div>

                    <div class="control column is-12">
                        <label class="label">Telefone</label>
                        <input class="input" type="text" v-model="candidato.telefone" placeholder="telefone">
                    </div>

                    <div class="control column is-12">
                        <label class="label">Referência</label>
                        <input class="input" type="text" v-model="candidato.referencia" placeholder="Ex: LinkeInd">
                    </div>

                    <div class="file is-info has-name" style="margin-top: 15px; margin-left: 15px;">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                                <span class="file-label">
                                    Currículo
                                </span>
                            </span>
                            <span class="file-name">
                                Seleccione um ficheiro
                            </span>
                        </label>
                    </div>

                </div>

                <div class="field column is-4" style="margin-left: 70%;">
                    <div class="columns">
                        <div class="column is-offset-4 is-8">
                            <router-link to="/formulario" class="button is-success is-fullwidth is-large"> Próximo
                                passo
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
import {CandidatoModel} from '@/model/candidato.model'
import {CandidatoClient} from '@/client/candidato.client'
import { NotificacaoModel } from '@/model/notificacao.model'
import { Vue } from 'vue-class-component'


export default class MenuView extends Vue { 

    public candidato: CandidatoModel = new CandidatoModel(); 
    public candidatoClient: CandidatoClient = new CandidatoClient();
    public notification : NotificacaoModel = new NotificacaoModel()


    public onClickCadastrar(): void {
            
            this.candidatoClient.cadastrar(this.candidato)
                .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Especialidade Cadastrada com sucesso!!!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                })
        }

        public onClickFecharNotificacao(): void {
            this.notification = new NotificacaoModel()
        }
        private onClickLimpar(): void {
            this.candidato = new CandidatoModel()
        }
}

</script>