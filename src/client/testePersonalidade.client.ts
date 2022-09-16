import { TestePersonalidade } from "@/model/teste-personalidade.model";
import axios, { AxiosInstance } from "axios"


export class TestePersonalidadeClient {


    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://192.168.107.167:8080/api/testePersonalidade',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async cadastrar(testePersonalidade: TestePersonalidade): Promise<TestePersonalidade> {
        try {
            return (await this.axiosClient.post(`/cadastrar`, testePersonalidade)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async listar(token: string): Promise<TestePersonalidade[]> {
        try {
            return (await this.axiosClient.get<TestePersonalidade[]>(`/listar?token=${token}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async excluir(token: string, id: number): Promise<void> {
        try {
            return (await this.axiosClient.delete(`/excluir?token=${token}&id=${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}