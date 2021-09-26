import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  it("should returns a 400 status code with name is no provider", () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'any-email',
        password: 'any-password',
        passwordConfirm: 'any-password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing params: name'))

  })

  it("should returns a 400 status code with name is no provider", () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        name: 'any-name',
        password: 'any-password',
        passwordConfirm: 'any-password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing params: email'))

  })
})