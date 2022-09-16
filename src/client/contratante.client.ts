import { ContratanteModel } from "@/model/contratante.model"
import axios, { AxiosInstance } from "axios"


export class AlunoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://192.168.107.167:8080/api/alunos',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async token(login: string, senha: string): Promise<string> {
        try {
            return (await this.axiosClient.get<string>(`/token?login=${login}&senha=${senha}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
    public async resposta(token: string, alunoModel: ContratanteModel): Promise<string> {
        try {
            return (await this.axiosClient.put(`/resposta?token=${token}`, alunoModel)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizar(token: string, alunoModel: ContratanteModel): Promise<any> {
        try {
            return (await this.axiosClient.put(`/resposta?token=${token}`, alunoModel)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}