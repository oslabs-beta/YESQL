const { Pool } = require("pg");

const connectDb = async (user, host, database, port) => {
    try {
        const pool = new Pool({
            user,
            host,
            database,
            port,
        }); 
        // connect to the database 
        await pool.connect(); 
        //execute a query
        //const res = await pool.query('SELECT * FROM people'); 

        console.log("connected to database"); 
        //release the client back to the pool 
        await pool.end();
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;