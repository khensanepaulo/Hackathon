<template>
    <div></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

import { NotificacaoModel } from '@/model/notificacao.model'




export default class PassoView extends Vue {

    public notificacaoModel: NotificacaoModel = new NotificacaoModel()
    //public alunoClient: AlunoClient = new AlunoClient()
    // public alunoModel: AlunoModel = new AlunoModel()

    // public onClickSalvar(): void {
    //     this.alunoClient.resposta('S2hlbnNhbmUgUGF1bG8gSm9zc2Fp', this.alunoModel).then(
    //         success => {
    //             this.onClickLimparForm()
    //             this.notificacaoModel = this.notificacaoModel.new(
    //                 true, 'notification is-primary', 'Produto Cadastrado com sucesso.')
    //         },
    //         error => {
    //             this.notificacaoModel = this.notificacaoModel.new(
    //                 true, 'notification is-danger', 'Não foi possivel obter o Próximo Passo!!! Error: ' + error.data)
    //         }
    //     )
    // }

    // public onClickLimparForm(): void {
    //     this.alunoModel = new AlunoModel()
    // }

    public onClickFecharNotificacao(): void {
        this.notificacaoModel = new NotificacaoModel()
    }
}
</script>