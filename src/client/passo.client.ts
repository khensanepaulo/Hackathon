import axios, { AxiosInstance } from "axios"
import { PassoModel } from "@/model/passo.model"

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 02/07/2022
 * @version 1.0.0
 */
export class PassoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/passos',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async proximoPasso(token: string) : Promise<PassoModel> {
        try {
            return (await this.axiosClient.get<PassoModel>(`/proximo?token=${token}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}