import { db } from "../database/database.connection.js";
import { dateDesconvert } from "../utils/dateFormatter.js";

async function insertFlight(flight) {
  const { origin, destination, date } = flight;
  const postgresDate = dateDesconvert(date);
  return db.query(
    `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
    [origin, destination, postgresDate]
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

async function getFlights() {
  const flights =
    await db.query(`SELECT flights.id, c1.name AS origin, c2.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') as date FROM flights
  JOIN cities AS c1 ON flights.origin = c1.id
  JOIN cities AS c2 ON flights.destination = c2.id
  ORDER BY date ASC;`);
  return flights.rows;
}

async function getFlightsOrigin(origin) {
  const flights = await db.query(
    `SELECT flights.id, c1.name AS origin, c2.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') as date FROM flights
  JOIN cities AS c1 ON flights.origin = c1.id
  JOIN cities AS c2 ON flights.destination = c2.id
  WHERE c1.name = $1
  ORDER BY date ASC;`,
    [origin]
  );
  return flights.rows;
}

async function getFlightsDestination(destination) {
  console.log(destination);
  const flights = await db.query(
    `SELECT flights.id, c1.name AS origin, c2.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') as date FROM flights
  JOIN cities AS c1 ON flights.origin = c1.id
  JOIN cities AS c2 ON flights.destination = c2.id
  WHERE c2.name = $1
  ORDER BY date ASC;`,
    [destination]
  );
  return flights.rows;
}

async function getFlightsDate(biggerDate, smallerDate) {
  const postgresBiggerDate = dateDesconvert(biggerDate);
  const postgresSmallerDate = dateDesconvert(smallerDate);
  const flights = await db.query(
    `SELECT flights.id, c1.name AS origin, c2.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') as date FROM flights
  JOIN cities AS c1 ON flights.origin = c1.id
  JOIN cities AS c2 ON flights.destination = c2.id
  WHERE flights.date BETWEEN $1 AND $2
  ORDER BY date ASC;`,
    [postgresSmallerDate, postgresBiggerDate]
  );
  return flights.rows;
}

async function getFlightsByAllParams(
  origin,
  destination,
  biggerDate,
  smallerDate
) {
  const postgresBiggerDate = dateDesconvert(biggerDate);
  const postgresSmallerDate = dateDesconvert(smallerDate);
  const flights = await db.query(
    `SELECT flights.id, c1.name AS origin, c2.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') as date FROM flights
  JOIN cities AS c1 ON flights.origin = c1.id
  JOIN cities AS c2 ON flights.destination = c2.id
  WHERE c1.name = $1
  AND c2.name =  $2
  AND flights.date BETWEEN $3 AND $4
  ORDER BY date ASC;`,
    [origin, destination, postgresSmallerDate, postgresBiggerDate]
  );
  return flights.rows;
}

const flightsRepository = {
  insertFlight,
  citiesExists,
  getFlights,
  getFlightsOrigin,
  getFlightsDestination,
  getFlightsDate,
  getFlightsByAllParams,
};

export default flightsRepository;
