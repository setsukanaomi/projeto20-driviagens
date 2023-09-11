import { notFound } from "../errors/notFound.js";
import dayjs from "dayjs";
import flightsRepository from "../repositories/flights.repository.js";
import { unprocessableEntity } from "../errors/unprocessableEntity.js";
import { dateDesconvert, dateFormat } from "../utils/dateFormatter.js";
import { datesError, invalidDates } from "../errors/datesError.js";

async function createFlight(flight) {
  const { origin, destination, date } = flight;

  const flightDate = dateDesconvert(date);
  const actualDate = dayjs().format("YYYY-MM-DD");

  if (actualDate > flightDate) throw unprocessableEntity();

  const existingCities = await flightsRepository.citiesExists({
    origin,
    destination,
  });
  if (existingCities.rowCount <= 1) throw notFound();

  return flightsRepository.insertFlight(flight);
}

async function getFlights(origin, destination, biggerDate, smallerDate) {
  if (origin && !destination && !biggerDate && !smallerDate) {
    const flights = await flightsRepository.getFlightsOrigin(origin);
    return flights;
  }

  if (!origin && destination && !biggerDate && !smallerDate) {
    const flights = await flightsRepository.getFlightsDestination(destination);
    return flights;
  }

  if ((biggerDate && !smallerDate) || (!biggerDate && smallerDate))
    throw datesError();

  if (biggerDate && smallerDate) {
    if (!biggerDate || !smallerDate) throw invalidDates();
    const smallerDateDesconvert = dateDesconvert(smallerDate);
    const biggerDateDesconvert = dateDesconvert(biggerDate);
    if (smallerDateDesconvert > biggerDateDesconvert) throw inconsistentDates();
  }

  if (!origin && !destination && biggerDate && smallerDate) {
    const flights = await flightsRepository.getFlightsDate(
      biggerDate,
      smallerDate
    );
    return flights;
  }

  if (origin && destination && biggerDate && smallerDate) {
    const flights = await flightsRepository.getFlightsByAllParams(
      origin,
      destination,
      biggerDate,
      smallerDate
    );
    return flights;
  }

  if (!origin && !destination && !biggerDate && !smallerDate) {
    const flights = await flightsRepository.getFlights();
    return flights;
  }
}

const flightsService = {
  createFlight,
  getFlights,
};

export default flightsService;
