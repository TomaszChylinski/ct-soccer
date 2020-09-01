// require('dotenv').config();
const express = require('express');
var session = require('express-session');
const path = require('path');
const PORT = process.env.PORT || 3001;
const logger = require('morgan');

const cors = require('cors');

const app = express();
app.use(cors());

// Use morgan logger for logging requests
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
} else {
	app.use(express.static('public'));
}

// Define API routes here

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
