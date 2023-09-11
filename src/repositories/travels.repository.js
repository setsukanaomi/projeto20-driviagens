import { db } from "../database/database.connection.js";

async function passengerExists(travel) {
  const passengerId = travel;

  const passenger = await db.query(`SELECT * FROM passengers WHERE id=$1;`, [
    passengerId,
  ]);

  return passenger.rows[0];
}

async function flightExists(travel) {
  const flightId = travel;

  const flight = await db.query(`SELECT * FROM flights WHERE id=$1;`, [
    flightId,
  ]);

  return flight.rows[0];
}

async function insertTravel(travel) {
  const { passengerId, flightId } = travel;
  return db.query(
    `INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`,
    [passengerId, flightId]
  );
}

const travelsRepository = {
  passengerExists,
  flightExists,
  insertTravel,
};

export default travelsRepository;
