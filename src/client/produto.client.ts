import axios, { AxiosInstance } from "axios"

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 02/07/2022
 * @version 1.0.0
 */
export class ProdutoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/produtos',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async excluir(token: string, id: number): Promise<void> {
		try {
			return (await this.axiosClient.delete(`/excluir?token=${token}&id=${id}`)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}
}