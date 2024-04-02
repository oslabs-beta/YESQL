const databaseController = {};
const db = require("../database");


databaseController.connect = async (req, res, next) => {
    try {
        //server receives the body from the client, and sends a fetch request to the db
        //console.log('Request Body => ', req.body)
        const { user, host, database, port } = req.body;
        await db.connectDb(user, host, database, port);
        return next();
    } catch (error) {
        console.log(error);
        return next(error);
    };
};

databaseController.query = async (req, res, next) => {
    //Query from server to db to get tables and column names:
    try {
        const tables = await db.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE'`);
        const outputObject = {};
        for (let i = 0; i < tables.rows.length; i++) {
            outputObject.tableName = tables[i];
            const outputArray = [];
            const query = `SELECT column_name FROM information_schema.columns WHERE table_name = '${tables.rows[i].table_name}'`
            const columns = await db.query(query);
            for (let j = 0; j < columns.rows.length; j++) {
                outputArray.push(columns.rows[j].column_name);
            };
            outputObject[tables.rows[i].table_name] = {columns: outputArray};
        };
        // This section is for determining and connectiong foreign and primary keys
        const connections = await db.query('SELECT constraint_name, unique_constraint_name FROM information_schema.referential_constraints');
        for (let i = 0; i < connections.rows.length; i++) {
            const primary = connections.rows[i].unique_constraint_name.slice(0, -3);
            const foreign = connections.rows[i].constraint_name.slice(0, connections.rows[i].constraint_name.search(/(_fk)/gm));
            if (!outputObject[foreign].connections) outputObject[foreign].connections = [primary];
            else outputObject[foreign].connections.push(primary);
        };
        res.locals.tableData = outputObject;
        console.log('Output Object => ', outputObject);
        return next();
    } catch (error) {
        console.log(error);
        return next(error);
    };
};


module.exports = databaseController;