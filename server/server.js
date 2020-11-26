import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import db from './config/keys.js';
import itemRoutes from './routes/items.js';

const app = express();

// bodyParser Middleware;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// items routes
app.use('/items/', itemRoutes);
// DB  Configuration

// coonect to mongodb;
mongoose
  .connect(db.mongoURI, { useFindAndModify: false })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on ${port}`));
