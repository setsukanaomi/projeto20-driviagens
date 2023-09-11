import { db } from "../database/database.connection.js";

async function insertFlight(flight) {
  const { origin, destination, date } = flight;
  return db.query(
    `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
    [origin, destination, date]
  );
}

async function citiesExists(cities) {
  const { origin, destination } = cities;

  const citiesExists = await db.query(
    `SELECT * FROM cities WHERE id=$1 OR id=$2;`,
    [origin, destination]
  );
  return citiesExists;
}

const flightsRepository = {
  insertFlight,
  citiesExists,
};

export default flightsRepository;
