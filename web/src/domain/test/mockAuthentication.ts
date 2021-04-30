import { AuthenticationParams } from '../usecases/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
    email: 'any@email.com',
    password: '123456'
})