import { db } from "../database/database.connection.js";

async function insertCity(city) {
  return db.query(`INSERT INTO cities (name) VALUES ($1);`, [city]);
}

async function getCity(targetCity) {
  console.log(targetCity);

  const city = await db.query(`SELECT * FROM cities WHERE name=$1;`, [
    targetCity,
  ]);
  return city.rows[0];
}

const citiesRepository = {
  insertCity,
  getCity,
};

export default citiesRepository;
