import { InternalServerError, MethodNotAllowedError } from "infra/errors";

function onMatchHandler(request, response) {
  const publicErrorObject = new MethodNotAllowedError();
  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

function onErrorHandler(error, request, response) {
  const publicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  });
  console.log(publicErrorObject);

  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

const controller = {
  errorsHandlers: {
    onNoMatch: onMatchHandler,
    onError: onErrorHandler,
  },
};
export default controller;
