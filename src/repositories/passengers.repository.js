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
  CAST(COUNT(t.id) AS INTEGER) AS travels
  FROM
    passengers p
  LEFT JOIN
    travels t ON p.id = t."passengerId"
  GROUP BY
  p.id, p."firstName", p."lastName"
  ORDER BY 
  travels DESC
  LIMIT 10;`);

  return passengersTravels.rows;
}

async function getPassengersTravelsByName(name) {
  console.log(name);
  const passengersTravels = await db.query(
    `SELECT
  p."firstName" || ' ' || p."lastName" AS passenger,
  CAST(COUNT(t.id) AS INTEGER) AS travels
  FROM
    passengers p
  LEFT JOIN
    travels t ON p.id = t."passengerId"
  WHERE   
  p."firstName" || ' ' || p."lastName" ILIKE $1
  GROUP BY
  p.id, p."firstName", p."lastName"
  ORDER BY
  travels DESC
  LIMIT 10`,
    [`%${name}%`]
  );

  return passengersTravels.rows;
}

const passengersRepository = {
  insertPassenger,
  getPassengersTravels,
  getPassengersTravelsByName,
};

export default passengersRepository;
