import passengersRepository from "../repositories/passengers.repository.js";

async function createPassenger(passenger) {
  return passengersRepository.insertPassenger(passenger);
}

const passengersService = {
  createPassenger,
};

export default passengersService;
