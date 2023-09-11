import { db } from "../database/database.connection.js";

async function insertPassenger(passenger) {
  const { firstName, lastName } = passenger;

  return db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

const passengersRepository = {
  insertPassenger,
};

export default passengersRepository;
