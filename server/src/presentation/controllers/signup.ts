import { IEmailValidator } from '../protocols/email-validator'
import { Controller } from '../protocols'
export class SignUpController implements Controller {
  private readonly emailValidator: IEmailValidator

  constructor(emailValidator: IEmailValidator) {
    this.emailValidator = emailValidator
  }

  handle(httpRequest: any): any {

  }
}