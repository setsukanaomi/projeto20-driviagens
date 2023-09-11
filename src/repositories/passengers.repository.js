import { db } from "../database/database.connection.js";

async function insertPassenger(passenger) {
  const { firstName, lastName } = passenger;

  return db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

async function getPassengersTravels() {
  const passengersTravels = await db.query(`SELECT
  p."firstName" || ' ' || p."lastName" AS passenger,
  COUNT(t.id) AS travels
  FROM
    passengers p
  LEFT JOIN
    travels t ON p.id = t."passengerId"
  GROUP BY
  p.id, p."firstName", p."lastName";`);
  return passengersTravels.rows;
}

async function getPassengersTravelsByName() {}

const passengersRepository = {
  insertPassenger,
  getPassengersTravels,
  getPassengersTravelsByName,
};

export default passengersRepository;
