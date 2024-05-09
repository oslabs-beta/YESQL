// require dot env
const dotenv = require('dotenv');
dotenv.config();
const {Pool} = require('pg');

let pool;

let information;

const connectDb = async (...credentials) => {

  information = credentials;

  if (!pool) {
    try {
      if (credentials.length === 1) {
        pool = new Pool({
          connectionString: credentials[0],
        });
      } else {
        pool = new Pool({
          user: credentials[0],
          host: credentials[1],
          database: credentials[2],
          port: credentials[3],
        });
      }

      return pool;
      // connect to the database because this method is not needed and caused
      // issues when making query calls from dbQuery.
      // await pool.connect();
      // execute a query
      // const res = await pool.query('SELECT * FROM people');

      console.log('connected to database'); // access the rows

      // release the client back to the pool

    // await pool.end();
    } catch (error) {
      console.log(error);
      pool = null;
    }
  }
};

// connectDb()

module.exports = {
  connectDb,
  query: (text, params, callback) => {
    console.log(information)
    connectDb(information)
    return pool.query(text, params, callback);
  },
};
