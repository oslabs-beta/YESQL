const userController = {};
const db = require("../database")
userController.connect = async (req, res, next) => {
    try {
        const user = req.body.user
        const host = req.body.PGHOST
        const database= req.body.PGDATABASE
        const port = req.body.PGPORT
        await db.connectDb(user, host, database, port);
        // const result = await db.query('SELECT * FROM people');
        console.log(result);
        res.locals.connected = true;
        return next();
    } catch (error) {
        console.log(error);
        return next(error);
    };
} 

module.exports = userController;