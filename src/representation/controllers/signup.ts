import { HttpResponse, HttpRequest } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';
import badRequest from '../helpers/http-helper';
import { Controller } from '../protocols/controllers';

class SignuUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
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

    return badRequest(new MissingParamError('SignUp Gerenic Error'));
  }
}

export default SignuUpController;
