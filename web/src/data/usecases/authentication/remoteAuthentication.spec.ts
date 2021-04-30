import RemoteAuthentication from './remoteAuthentication'
import { HttpPostClientSpy } from '../../test/mockHttpClient'
import { mockAuthentication } from '../../../domain/test/mockAuthentication'


type SystemUnderTestTypes = {
    systemUnderTest: RemoteAuthentication;
    httpPostClientSpy: HttpPostClientSpy;
}

const makeUnderTest = (url: string = 'any_url'): SystemUnderTestTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const systemUnderTest = new RemoteAuthentication(url, httpPostClientSpy)

    return {
        httpPostClientSpy,
        systemUnderTest
    }
}

describe("RemoteAuthentication", () => {

    it("Should to call HttpPostClient with correct URL", async () => {
        const url = 'any_url';
        const { httpPostClientSpy, systemUnderTest } = makeUnderTest(url)
        await systemUnderTest.auth(mockAuthentication())
        expect(httpPostClientSpy.url).toBe(url)

    });



    it("Should to call HttpPostClient with correct body", async () => {
        const { httpPostClientSpy, systemUnderTest } = makeUnderTest()
        await systemUnderTest.auth(mockAuthentication())
        expect(httpPostClientSpy.body).toEqual(mockAuthentication())
    });
});
