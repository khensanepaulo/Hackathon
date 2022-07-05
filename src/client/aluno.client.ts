import { AlunoModel } from "@/model/aluno.model"
import axios, { AxiosInstance } from "axios"

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 02/07/2022
 * @version 1.0.0
 */
export class AlunoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/alunos',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async token(login: string, senha: string) : Promise<string> {
        try {
            return (await this.axiosClient.get<string>(`/token?login=${login}&senha=${senha}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizar(token: string, alunoModel: AlunoModel) : Promise<any> {
        try {
            return (await this.axiosClient.put(`/resposta?token=${token}`, alunoModel)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}