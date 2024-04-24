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
      const tablesAndColumns = await db.query(`SELECT t.table_name, c.column_name, c.data_type
      FROM information_schema.tables t 
      FULL OUTER JOIN information_schema.columns c 
      ON c.table_name = t.table_name 
      WHERE t.table_schema = 'public' AND t.table_type = 'BASE TABLE'`);
      const outputObject = {};
      for (let i = 0; i < tablesAndColumns.rows.length; i++) {
        const columnName = tablesAndColumns.rows[i].column_name;
        const dataType = tablesAndColumns.rows[i].data_type;
        console.log('Data Type => ', dataType)
        if (!outputObject[tablesAndColumns.rows[i].table_name]) outputObject[tablesAndColumns.rows[i].table_name] = {columns: {}};
        outputObject[tablesAndColumns.rows[i].table_name].columns[columnName] = dataType;
      };
    // This section is for determining connections, foreign keys, and primary keys
    const connections = await db.query(`SELECT c.table_name, c.column_name AS primary_key, k.column_name AS foreign_key, c.constraint_name 
    FROM information_schema.constraint_column_usage c 
    INNER JOIN information_schema.key_column_usage k
    ON c.constraint_name=k.constraint_name
    WHERE c.constraint_name LIKE '%/_fk%' ESCAPE '/' OR c.constraint_name LIKE '%/_pk%' ESCAPE '/' `);
    const connectionRows = connections.rows;
    for (const row of connectionRows) {
      let foreignTable;
      row.constraint_name.includes('_fk') ? foreignTable = row.constraint_name.slice(0, row.constraint_name.search(/(_fk)/gm)) : foreignTable = row.constraint_name.slice(0, row.constraint_name.search(/(_pk)/gm))
      console.log('Foreign Table => ', foreignTable)
      if (!outputObject[foreignTable].foreignKey) outputObject[foreignTable].foreignKey = [];
      if (row.primary_key === row.foreign_key) outputObject[row.table_name].primaryKey = row.primary_key;
      if (!outputObject[row.table_name].connections) outputObject[row.table_name].connections = [];
      outputObject[foreignTable].foreignKey.push(row.foreign_key);
      outputObject[row.table_name].connections.push(foreignTable);
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
