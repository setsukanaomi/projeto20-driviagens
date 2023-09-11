import httpStatus from "http-status";
import { incompleteData } from "../errors/incomplete.js";
import citiesService from "../services/cities.services.js";
import passengersService from "../services/passengers.services.js";

export async function postPassenger(req, res) {
  const { body } = req;
  const { firstName, lastName } = body;

  if (!firstName || !lastName) throw incompleteData();

  await passengersService.createPassenger({ firstName, lastName });

  res.sendStatus(httpStatus.CREATED);
}

export async function getPassengersTravels(req, res) {
  const { name } = req.query;
  const passengersTravels = await passengersService.getPassengersTravels(name);
  res.send(passengersTravels);
}
