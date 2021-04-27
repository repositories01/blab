import RemoteAuthentication from './remoteAuthentication'
import { HttpPostClient } from '../../protocols/http/httpPostClient'
describe("RemoteAuthentication", () => {
    it("Should to call HttpPostClient with correct URL", async () => {

        class HttpPostClientSpy implements HttpPostClient {
            url?: string
            async post(url: string): Promise<void> {
                this.url = url
            }
        }
        const url = 'any_url';
        const httpPostClient = new HttpPostClientSpy()
        const systemUnderTest = new RemoteAuthentication(url, httpPostClient)
        await systemUnderTest.auth()
        expect(httpPostClient.url).toBe(url)

    });
});
