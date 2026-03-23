export class InternalServerError extends Error {
  constructor({ cause, status_Code }) {
    super("Um erro interno não esperado aconteceu.", {
      cause,
    });
    this.name = "InternalServerError";
    this.action = "Entre em contato com o suporte.";
    this.status_Code = status_Code || 500;
  }

  toJson() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_Code: this.status_Code,
    };
  }
}

export class ServiceError extends Error {
  constructor({ cause, message }) {
    super(message || "Serviço indisponivel no momento", {
      cause,
    });
    this.name = "ServiceError";
    this.action = "Verifique se o serviço esta disponivel.";
    this.statusCode = 503;
  }

  toJson() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class ValidationError extends Error {
  constructor({ message, action }) {
    super(message || "Um erro de validação ocorreu");
    this.name = "ValidationError";
    this.action = action || "Ajuste os dados enviados e tente novamente.";
    this.status_Code = 400;
  }

  toJson() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_Code: this.status_Code,
    };
  }
}

export class MethodNotAllowedError extends Error {
  constructor() {
    super("Método não permitido para este endpoint");
    this.name = "MethodNotAllowedError";
    this.action = "Verifique se o metodo HTTP é valido para este endpoint";
    this.status_Code = 405;
  }

  toJson() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_Code: this.status_Code,
    };
  }
}
