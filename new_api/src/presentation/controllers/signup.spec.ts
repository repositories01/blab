import {SignUpController} from './signup.controller'
import { MissingParamError } from '../errors/missing-param-error'
describe('signup controller', () => {
  it('should returns a error if is not provided a name', () => {

    const sut = new SignUpController()
    const httpRequest = {
      body:{
      // name: 'any_name',
      email:"email@mail.com",
      password: "any_pass"
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
  it('should returns a error if is not provided a email', () => {

    const sut = new SignUpController()
    const httpRequest = {
      body:{
      name: 'any_name',
      //email:"email@mail.com",
      password: "any_pass"
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
   it('should returns a error if is not provided a password', () => {

    const sut = new SignUpController()
    const httpRequest = {
      body:{
      name: 'any_name',
      email:"email@mail.com",
      //password: "any_pass"
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})
