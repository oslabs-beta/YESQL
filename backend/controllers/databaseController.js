const databaseController = {};
const db = require("../database");


databaseController.connect = async (req, res, next) => {
    try {
        console.log('Request Body => ', req.body)
        const { user, host, database, port } = req.body;
        await db.connectDb(user, host, database, port);
        // const result = await db.query('SELECT * FROM people');
        // console.log(result);
        res.locals.connected = true;
        return next();
    } catch (error) {
        console.log(error);
        return next(error);
    };
};

databaseController.query = async (req, res, next) => {
    try {
        const tables = await db.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE'`);
        const outputObject = {};
        for (let i = 0; i < tables.rows.length; i++) {
            const outputArray = [];
            const query = `SELECT column_name FROM information_schema.columns WHERE table_name = '${tables.rows[i].table_name}'`
            const columns = await db.query(query);
            for (let i = 0; i < columns.rows.length; i++) {
                outputArray.push(columns.rows[i].column_name);
            };
            outputObject[tables.rows[i].table_name] = outputArray;
        };
        res.locals.tableData = outputObject;
        return next();
    } catch (error) {
        console.log(error);
        return next(error);
    };
};

module.exports = databaseController;