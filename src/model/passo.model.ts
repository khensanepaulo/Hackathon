import { AbstractEntityModel } from "./abstract-entity.model";

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 02/07/2022
 * @version 1.0.0
 */
 export class PassoModel extends AbstractEntityModel {
    index!: number
    titulo!: string
    descricao!: string
    metodo!: string
    url!: string
    parametro!: string
}