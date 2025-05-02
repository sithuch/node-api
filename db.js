// import postgres from 'postgres'

// const connectionString = process.env.DATABASE_URL
// const sql = postgres(connectionString)

// export default sql

const postgres = require('postgres');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString);

export default sql;
