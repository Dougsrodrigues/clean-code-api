// eslint-disable-next-line import/prefer-default-export
export class ServerError extends Error {
  constructor() {
    super(`Internal server error`);
    this.name = 'ServerError';
  }
}
