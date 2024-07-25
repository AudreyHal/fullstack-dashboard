

import cors, { CorsOptions } from 'cors';

// cross-origin resource sharing (CORS) options 
const corsOptions: CorsOptions = {
  origin: true, // Allow all origins for development purposes
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

export default cors(corsOptions);
