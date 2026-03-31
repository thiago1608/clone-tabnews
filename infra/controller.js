import {
  InternalServerError,
  MethodNotAllowedError,
  ValidationError,
  NotFoundError,
} from "infra/errors";

function onMatchHandler(request, response) {
  const publicErrorObject = new MethodNotAllowedError();
  response.status(publicErrorObject.status_Code).json(publicErrorObject);
}

function onErrorHandler(error, request, response) {
  if (error instanceof ValidationError || error instanceof NotFoundError) {
    return response.status(error.status_Code).json(error);
  }
  const publicErrorObject = new InternalServerError({
    status_Code: error.status_Code,
    cause: error,
  });
  console.log(publicErrorObject);

  response.status(publicErrorObject.status_Code).json(publicErrorObject);
}

const controller = {
  errorsHandlers: {
    onNoMatch: onMatchHandler,
    onError: onErrorHandler,
  },
};
export default controller;
