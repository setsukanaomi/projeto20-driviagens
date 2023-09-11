import { notFound } from "../errors/notfound.js";
import dayjs from "dayjs";
import flightsRepository from "../repositories/flights.repository.js";
import { unprocessableEntity } from "../errors/unprocessableEntity.js";

async function createFlight(flight) {
  const { origin, destination, date } = flight;

  const actualDate = dayjs().format("DD-MM-YYYY");
  const flightDate = dayjs(date, "DD-MM-YYYY");

  if (!flightDate.isAfter(actualDate)) throw unprocessableEntity();

  const existingCities = await flightsRepository.citiesExists({
    origin,
    destination,
  });
  if (existingCities.rowCount <= 1) throw notFound();

  return flightsRepository.insertFlight(flight);
}

const flightsService = {
  createFlight,
};

export default flightsService;
