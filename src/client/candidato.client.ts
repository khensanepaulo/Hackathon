import { CandidatoModel } from "@/model/candidato.model"
import axios, { AxiosInstance } from "axios"


export class CandidatoClient {

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

    public async cadastrar(candidatoModel: CandidatoModel): Promise<void> {
        try {
            return (await this.axiosClient.put(`/`, candidatoModel)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizar(token: string, candidatoModel: CandidatoModel): Promise<any> {
        try {
            return (await this.axiosClient.put(`/resposta?token=${token}`, candidatoModel)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}