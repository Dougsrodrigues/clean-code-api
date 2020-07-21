import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError, InvalidParamError } from '../errors/index';
import { badRequest, serverError } from '../helpers/http-helper';
import { Controller } from '../protocols/controllers';
import { EmailValidator } from '../protocols/email-validator';

class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation',
      ];

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const isValid = this.emailValidator.isValid(httpRequest.body.email);

      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }

      return badRequest(new Error('SignUp Gerenic Error'));
    } catch (error) {
      return serverError();
    }
  }
}

export default SignUpController;
