import {SignUpController} from './signup.controller'
describe('signup controller', () => {
  it('should returns a error if is provided a invalid name', () => {

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
    expect(httpResponse.body).toEqual(new Error('missing params: name'))
  })
  it('should returns a error if is provided a invalid email', () => {

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
    expect(httpResponse.body).toEqual(new Error('missing params: email'))
  })
})
