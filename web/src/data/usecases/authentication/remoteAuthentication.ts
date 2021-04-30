import { AuthenticationParams } from '../../../domain/usecases/authentication';
import { HttpPostClient } from '../../protocols/http/httpPostClient'
class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostCliente: HttpPostClient
    ) { }

    async auth(params: AuthenticationParams): Promise<void> {
        await this.httpPostCliente.post({
            url: this.url,
            body: params
        })
    }
}
export default RemoteAuthentication;