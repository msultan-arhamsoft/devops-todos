const path = require('path');
// import .env variables
require('dotenv').config();
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.TODO_PORT,
  mongo: {
    uri: process.env.MONGO_URI,
  }
};
