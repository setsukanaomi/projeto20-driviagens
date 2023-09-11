import httpStatus from "http-status";
import { incompleteData } from "../errors/incomplete.js";
import flightsService from "../services/flights.services.js";
import { sameDestinationError } from "../errors/sameDestination.js";

export async function postFlight(req, res) {
  const { body } = req;
  const { origin, destination, date } = body;

  if (!origin || !destination || !date) throw incompleteData();
  if (origin === destination) throw sameDestinationError();

  await flightsService.createFlight({ origin, destination, date });

  res.sendStatus(httpStatus.CREATED);
}

export async function getFlights(req, res) {
  const { origin, destination } = req.query;
  const dateBigger = req.query["bigger-date"];
  const dateSmaller = req.query["smaller-date"];

  const flights = await flightsService.getFlights(
    origin,
    destination,
    dateBigger,
    dateSmaller
  );
  res.send(flights);
}
