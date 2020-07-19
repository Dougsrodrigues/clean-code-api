import SignuUpController from './signup';
import MissingParamError from '../errors/missing-param-error';

const makeSut = (): SignuUpController => {
  return new SignuUpController();
};

describe('SignUp Controller', () => {
  test('Should  return 400 if no name is provider', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  });
});

describe('SignUp Controller', () => {
  test('Should  return 400 if no email is provider', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  });
});

describe('SignUp Controller', () => {
  test('Should  return 400 if no password is provider', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        passwordConfirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('password'));
  });
});

describe('SignUp Controller', () => {
  test('Should  return 400 if no password confirmation is provider', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError('passwordConfirmation'),
    );
  });
});
