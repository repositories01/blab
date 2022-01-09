import {SignUpController} from './signup.controller'
import { MissingParamError } from '../errors/missing-param-error'
import { InvalidParamError } from '../errors/invalid-param-error'
import { EmailValidator } from '../email-validator'


interface SutTypes {
  sut: SignUpController
  emailValidatorStub: EmailValidator
}
const makeSut = (): SutTypes =>{
  class EmailValidatorStub implements EmailValidator{
    isValid(email:string): boolean{
      return true
    }
  }

const emailValidatorStub = new EmailValidatorStub()
const sut = new SignUpController(emailValidatorStub )

return {
sut,
emailValidatorStub 
}

}


describe('signup controller', () => {
  it('should returns a error if is not provided a name', () => {

    const {sut }= makeSut()
    const httpRequest = {
      body:{
      // name: 'any_name',
      email:"email@mail.com",
      password: "any_pass",
      passwordConfirmation: 'passwordConfirmation'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
  it('should returns a error if is not provided a email', () => {

    const {sut }= makeSut()
    const httpRequest = {
      body:{
      name: 'any_name',
      //email:"email@mail.com",
      password: "any_pass",
      passwordConfirmation: 'passwordConfirmation'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
   it('should returns a error if is not provided a password', () => {

    const {sut }= makeSut()
    const httpRequest = {
      body:{
      name: 'any_name',
      email:"email@mail.com",
      //password: "any_pass"
      passwordConfirmation: 'passwordConfirmation'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
   it('should returns a error if is not provided a passwordConfirmation', () => {

    const {sut }= makeSut()
    const httpRequest = {
      body:{
      name: 'any_name',
      email:"email@mail.com",
      password: "any_pass"

      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
    it('should returns a error if an invalid email is provided', () => {

    const {sut, emailValidatorStub }= makeSut()
    const httpRequest = {
      body:{
      name: 'any_name',
      email:"email@mail.com",
      password: "any_pass",
      passwordConfirmation: 'passwordConfirmation'
      }
    }
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValue(false)

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidParamError('email'))
  }) 
})
