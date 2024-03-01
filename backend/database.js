// require dot env
const dotenv = require("dotenv") 

dotenv.config() 

const { Pool } = require("pg");

const connectDb = async () => {
    try {
        const pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            port: process.env.PGPORT,
        }); 
        // connect to the database 
        await pool.connect(); 
        //execute a query
        const res = await pool.query('SELECT * FROM people'); 

        console.log("connected to database"); // access the rows  

        //release the client back to the pool 

        await pool.end();
    } catch (error) {
        console.log(error)
    }
}
 
connectDb()

module.exports = connectDb;