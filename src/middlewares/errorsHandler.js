import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
  if (error.type === "conflictError") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === "notFound") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === "incompleteData") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "unprocessableEntity") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "destinationError" || "doesntExist") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send("Sorry, something went wrong 😢");
}
