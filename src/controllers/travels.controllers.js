import httpStatus from "http-status";
import { incompleteData } from "../errors/incomplete.js";
import travelsService from "../services/travels.services.js";

export async function postTravel(req, res) {
  const { body } = req;
  const { passengerId, flightId } = body;

  if (!passengerId || !flightId) throw incompleteData();

  await travelsService.createTravel({ passengerId, flightId });

  res.sendStatus(httpStatus.CREATED);
}
