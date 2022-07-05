/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 02/07/2022
 * @version 1.0.0
 */
 export class NotificacaoModel {
    
    ativo! : boolean
    classe!: string
    mensagem!: string

    public new(ativo: boolean, classe: string, mensagem: string): NotificacaoModel {
        const notificacaoModel : NotificacaoModel = new NotificacaoModel()

        notificacaoModel.ativo = ativo
        notificacaoModel.classe = classe
        notificacaoModel.mensagem = mensagem

        return notificacaoModel
    }
}