const express = require('express');
const path = require('path');
const app = express();
// const cors = require('cors');
const database = require('./database');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const databaseController = require('./controllers/databaseController.js');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
// app.use(cors());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../frontend/index.html')));

// route for connecting to user's local db:
app.post('/connect', 
    databaseController.connect, 
    databaseController.query,
    (req, res) =>{
    res.status(200).json(res.locals.tableData);
});

//error handling used when return next(error) 

// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || 'Internal Server Error';
//     res.status(status).json({ success: false, message });
//   });

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
  