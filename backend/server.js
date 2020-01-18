const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// bring routes
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

// app
const app = express();

// cors
if (process.env.NODE_ENV === 'development') {
  app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}

// db
const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
}

const connectWithRetry = () => {
  console.log('MongoDB connection with retry');
  mongoose
    .connect(process.env.DATABASE_LOCAL, mongooseOptions)
    .then(() => {
      console.log('MongoDB is connected');
    })
    .catch(err => {
      handleError(err);
      console.log('MongoDB connection unsuccessful, retry after 5 seconds.');
      setTimeout(connectWithRetry, 5000);
    });
}

connectWithRetry();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// routes middleware
app.use('/api', blogRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);

// routes
app.get('/api', (req, res) => {
  res.json({
    time: Date().toString()
  });
});

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});