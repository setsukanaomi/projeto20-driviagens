import citiesRepository from "../repositories/cities.repository.js";
import travelsRepository from "../repositories/travels.repository.js";
import { doesntExist } from "../errors/doesntExist.js";

async function createTravel(travel) {
  const { passengerId, flightId } = travel;
  const passengerExists = await travelsRepository.passengerExists(passengerId);
  if (!passengerExists) throw doesntExist("Passenger");

  const flightExists = await travelsRepository.flightExists(flightId);
  if (!flightExists) throw doesntExist("Flight");

  return travelsRepository.insertTravel(travel);
}

const travelsService = {
  createTravel,
};

export default travelsService;
