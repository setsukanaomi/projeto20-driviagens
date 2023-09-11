import passengersRepository from "../repositories/passengers.repository.js";

async function createPassenger(passenger) {
  return passengersRepository.insertPassenger(passenger);
}

async function getPassengersTravels() {
  return passengersRepository.getPassengersTravels();
}

const passengersService = {
  createPassenger,
  getPassengersTravels,
};

export default passengersService;
