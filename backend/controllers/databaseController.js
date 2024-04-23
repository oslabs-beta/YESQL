const databaseController = {};
const db = require('../database');


databaseController.connect = async (req, res, next) => {
  try {
    // server receives the body from the client, and sends a fetch request to the db
    // console.log('Request Body => ', req.body)
    const {user, host, database, port, uri} = req.body;
        uri ? await db.connectDb(uri) : await db.connectDb(user, host, database, port);
        return next();
  } catch (error) {
    console.log(error);
    return next(error);
  };
};

databaseController.query = async (req, res, next) => {
  // Query from server to db to get tables and column names:
  try {
      const tablesAndColumns = await db.query(`SELECT t.table_name, c.column_name 
      FROM information_schema.tables t 
      FULL OUTER JOIN information_schema.columns c 
      ON c.table_name = t.table_name 
      WHERE t.table_schema = 'public' AND t.table_type = 'BASE TABLE'`);
      const outputObject = {};
      for (let i = 0; i < tablesAndColumns.rows.length; i++) {
        if (!outputObject[tablesAndColumns.rows[i].table_name]) outputObject[tablesAndColumns.rows[i].table_name] = {columns: []};
        outputObject[tablesAndColumns.rows[i].table_name].columns.push(tablesAndColumns.rows[i].column_name);
      };
    // This section is for determining and connectiong foreign and primary keys
    const connections = await db.query(`SELECT c.table_name, c.column_name AS primary_key, k.column_name AS foreign_key, c.constraint_name 
    FROM information_schema.referential_constraints r 
    INNER JOIN information_schema.constraint_column_usage c 
    ON r.constraint_name=c.constraint_name 
    INNER JOIN information_schema.key_column_usage k
    ON c.constraint_name=k.constraint_name
    WHERE c.constraint_name LIKE '%/_fk%' ESCAPE '/'`);
    // for (let i = 0; i < connections.rows.length; i++) {
    //   const primary = connections.rows[i].unique_constraint_name.slice(0, -3);
    //   const foreign = connections.rows[i].constraint_name.slice(0, connections.rows[i].constraint_name.search(/(_fk)/gm));
    //   if (!outputObject[foreign].connections) outputObject[foreign].connections = [primary];
    //   else outputObject[foreign].connections.push(primary);
    // };
    const connectionRows = connections.rows;
    for (const row of connectionRows) {
      const foreignTable = row.constraint_name.slice(0, row.constraint_name.search(/(_fk)/gm));
      console.log('Foreign Table => ', foreignTable)
      if (!outputObject[row.table_name].primaryKey) outputObject[row.table_name].primaryKey = row.primary_key;
      if (!outputObject[foreignTable].foreignKey) outputObject[foreignTable].foreignKey = [];
      console.log('Foreign Object 1 => ', outputObject[foreignTable].foreignKey)
      if (!outputObject[row.table_name].connections) outputObject[row.table_name].connections = [];
      outputObject[foreignTable].foreignKey.push(row.foreign_key);
      outputObject[row.table_name].connections.push(foreignTable);
      console.log('Foreign Object => ', outputObject[foreignTable].foreignKey);
    };
    console.log('Output => ', outputObject);
    res.locals.tableData = outputObject;
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  };
};


module.exports = databaseController;
