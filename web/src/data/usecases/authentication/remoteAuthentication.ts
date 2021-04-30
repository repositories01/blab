import { HttpPostClient } from '../../protocols/http/httpPostClient'
class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostCliente: HttpPostClient
    ) { }

    async auth(): Promise<void> {
        await this.httpPostCliente.post({url: this.url})
    }
}
export default RemoteAuthentication;