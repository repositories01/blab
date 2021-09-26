import { SignUpController } from './signup'
import { IEmailValidator } from '../protocols/email-validator'

const makeSut = (): SignUpController => {

  class EmailValidatorSub implements IEmailValidator {
    isValid(email: string): boolean {
      return true
    }
  }
  const emailValidator = new EmailValidatorSub()
  return new SignUpController(emailValidator)


}

describe('SignUp Controller', () => {
  it("should returns a 400 status code with name is no provider", () => {
    const sut = makeSut()

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
    const sut = makeSut()

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
  it("should returns a 400 status code if invalid email is provided", () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        name: 'any-name',
        email: 'invalidemail',
        password: 'any-password',
        passwordConfirm: 'any-password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing params: email'))

  })
})