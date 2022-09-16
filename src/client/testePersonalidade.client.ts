import { TestePersonalidade } from "@/model/teste-personalidade.model";
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'
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

    public async listar(pageRequest: PageRequest): Promise<PageResponse<TestePersonalidade>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined
                ? '' : pageRequest.sortField},${pageRequest.direction}`
            return (await this.axiosClient.get<PageResponse<TestePersonalidade>>(requestPath,
                {
                    params: { filtros: pageRequest.filter }
                }
            )).data

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