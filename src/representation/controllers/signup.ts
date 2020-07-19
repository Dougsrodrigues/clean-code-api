import { HttpResponse, HttpRequest } from '../protocols/http';
import MissingParamError from '../errors/missing-param-error';
import badRequest from '../helpers/http-helper';

class SignuUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    return badRequest(new MissingParamError('email'));
  }
}

export default SignuUpController;
