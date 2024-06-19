// creating a users table in a database

import { Client } from "pg";

// const client = new Client({
//   connectionString:
//     "postgresql://neondb_owner:NG9f1CRUrcvl@ep-quiet-water-a5iniks9.us-east-2.aws.neon.tech/neondb?sslmode=require",
// });

// async function createUserTable() {
//   await client.connect();
//   const result = await client.query(`
//     CREATE TABLE users(
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) UNIQUE NOT NULL,
//     created_At TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     )
//         `);

//   console.log(result);
// }

// createUserTable();

async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    connectionString:
      "postgresql://neondb_owner:NG9f1CRUrcvl@ep-quiet-water-a5iniks9.us-east-2.aws.neon.tech/neondb?sslmode=require ",
  });

  try {
    await client.connect();

    const insertQuery =
      "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";

    const values = ["raman", "oj@gmai.com", "passwo222"];

    const res = await client.query(insertQuery, values);

    console.log("Insertion success: ", res);
  } catch (err) {
    console.error("error during insertion: ", err);
  } finally {
    await client.end();
  }
}

insertData("username5", "user5@example.com", "user_password").catch(
  console.error
);
