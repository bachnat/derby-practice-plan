const { Pool } = require("pg");

// Prefer a single DATABASE_URL when provided; otherwise require discrete env vars.
const databaseUrl = process.env.DATABASE_URL;

let pool;
if (databaseUrl) {
  pool = new Pool({
    connectionString: databaseUrl,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  });
} else {
  const requiredVars = ["PGUSER", "PGPASSWORD", "PGHOST", "PGPORT", "PGDATABASE"];
  const missing = requiredVars.filter((v) => !process.env[v]);
  if (missing.length) {
    throw new Error(`Missing database environment variables: ${missing.join(", ")}`);
  }
  pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    database: process.env.PGDATABASE
  });
}

module.exports = pool;
////this file connects to our database using the 'pg' library