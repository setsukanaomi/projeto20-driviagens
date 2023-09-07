import httpStatus from "http-status";
import { incompleteData } from "../errors/incomplete.js";
import citiesService from "../services/cities.services.js";

export async function postCity(req, res) {
  const { body } = req;
  const { name } = body;

  if (!name) throw incompleteData();

  await citiesService.createCity(name);
  res.sendStatus(httpStatus.CREATED);
}
