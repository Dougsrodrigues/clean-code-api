import { HttpResponse, HttpRequest } from '../protocols/http';

class SignuUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name'),
      };
    }

    return {
      statusCode: 400,
      body: new Error('Missing param: email'),
    };
  }
}

export default SignuUpController;
