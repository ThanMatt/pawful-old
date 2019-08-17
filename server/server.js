const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();
require('./config/passport');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));
app.use(helmet());

const uri = process.env.ATLAS_URI; //!! Create a .env file for this
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.once('open', () => {
  readyStates = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'];
  console.log(`MongoDB Status: ${readyStates[mongoose.connection.readyState]}`);
})

const usersRoute = require('./routes/users');

app.use('/users', usersRoute);

app.listen(port, () => {
  console.log(`Listening to port ${port}!`)
})
