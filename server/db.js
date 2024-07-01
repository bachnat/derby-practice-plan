const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "psql",
    host: "localhost",
    port: 5432,
    database: "practiceplans"
});

module.exports = pool;
////this files connects to our database using the 'pg' library