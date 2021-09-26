import { IEmailValidator } from '../protocols/email-validator'
export class SignUpController {
  private readonly emailValidator: IEmailValidator

  constructor(emailValidator: IEmailValidator) {
    this.emailValidator = emailValidator
  }

  handle(httpRequest: any): any {

    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing params: name')
      }

    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing params: email')
      }

    }
  }
}