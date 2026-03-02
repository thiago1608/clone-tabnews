export class InternalServerError extends Error {
  constructor({ cause }) {
    super("Um erro interno não esperado aconteceu.", {
      cause,
    });
    this.name = "InternalServerError";
    this.cause = cause;
  }

  toJson() {
    return {
      name: this.name,
      message: this.message,
    };
  }
}
