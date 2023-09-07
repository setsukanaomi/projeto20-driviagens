import citiesRepository from "../repositories/cities.repository.js";
import { conflictError } from "../errors/conflict.js";

async function createCity(city) {
  const existingCity = await citiesRepository.getCity(city);
  if (existingCity) throw conflictError("Cidade");

  return citiesRepository.insertCity(city);
}

const citiesService = {
  createCity,
};

export default citiesService;
