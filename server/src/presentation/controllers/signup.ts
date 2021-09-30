import { IEmailValidator } from '../protocols/email-validator'
export class SignUpController {
  private readonly emailValidator: IEmailValidator

  constructor(emailValidator: IEmailValidator) {
    this.emailValidator = emailValidator
  }

  handle(httpRequest: any): any {

  }
}