const userController = {};
const connectDb = require("../database.js")
userController.connect = async (req, res, next) => {
    const user = req.body.user;
    const host = req.body.PGHOST;
    const database= req.body.PGDATABASE;
    const port = req.body.PGPORT;
    try {
        await connectDb(user, host, database, port);
        res.locals.connected = true; 
        return next();
    } catch (error) {
        console.log(error); 
        return next(error);
    }
} 

module.exports = userController;