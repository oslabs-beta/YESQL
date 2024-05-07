/* eslint-disable max-len */
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const databaseController = require('./controllers/databaseController.js');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')));

app.get('/chart', (req, res) => res.redirect('/'));
app.get('/formpage', (req, res) => res.redirect('/'));
app.post('/testQuery', databaseController.getQueryResults, (req, res) => {
  console.log('hey!', res.locals.testResults);
  res.status(200).json(res.locals.testResults);
});
// app.get('/chart', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')));
// route for connecting to user's local db:
app.post('/connect',
    databaseController.connect,
    databaseController.query,
    (req, res) =>{
      res.status(200).json(res.locals.tableData);
    });

// error handling used when return next(error)

// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || 'Internal Server Error';
//     res.status(status).json({ success: false, message });
//   });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
