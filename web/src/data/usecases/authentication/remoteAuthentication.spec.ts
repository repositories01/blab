import RemoteAuthentication from './remoteAuthentication'
import { HttpPostClientSpy } from '../../test/mockHttpClient'


describe("RemoteAuthentication", () => {

    it("Should to call HttpPostClient with correct URL", async () => {
        const url = 'any_url';
        const httpPostClient = new HttpPostClientSpy()
        const systemUnderTest = new RemoteAuthentication(url, httpPostClient)
        await systemUnderTest.auth()
        expect(httpPostClient.url).toBe(url)

    });
});
