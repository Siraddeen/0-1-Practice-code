"use strict";
// creating a users table in a database
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
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
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:NG9f1CRUrcvl@ep-quiet-water-a5iniks9.us-east-2.aws.neon.tech/neondb?sslmode=require ",
        });
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
            const values = ["raman", "oj@gmai.com", "passwo222"];
            const res = yield client.query(insertQuery, values);
            console.log("Insertion success: ", res);
        }
        catch (err) {
            console.error("error during insertion: ", err);
        }
        finally {
            yield client.end();
        }
    });
}
insertData("username5", "user5@example.com", "user_password").catch(console.error);
