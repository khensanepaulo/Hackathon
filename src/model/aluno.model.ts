import { AbstractEntityModel } from "./abstract-entity.model";

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 02/07/2022
 * @version 1.0.0
 */
 export class AlunoModel extends AbstractEntityModel {
    nome!: string
    login!: string
    senha!: string
    token!: string


    buscoToken!: boolean
    cadastrarProduto!: number
    listarProduto!: boolean
    excluirProduto!: boolean
    resposta!: string
}