import passengersRepository from "../repositories/passengers.repository.js";

async function createPassenger(passenger) {
  return passengersRepository.insertPassenger(passenger);
}

async function getPassengersTravels(name) {
  if (name) {
    const passengersTravels =
      await passengersRepository.getPassengersTravelsByName(name);
    return passengersTravels;
  }

  if (!name) {
    const passengersTravels = passengersRepository.getPassengersTravels();
    return passengersTravels;
  }
}

const passengersService = {
  createPassenger,
  getPassengersTravels,
};

export default passengersService;
