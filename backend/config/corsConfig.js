// corsConfig.js
const cors = require('cors');

const corsOptions = {
  origin: true, // Allow all origins for development purposes
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

module.exports = cors(corsOptions);
