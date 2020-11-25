const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// bodyParser Middleware;
app.use(bodyParser.json());

// DB  Configuration
const db = require('./config/keys.js').mongoURI;

// coonect to mongodb;
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on ${port}`));
