import express, { Express } from 'express';
import mongoose from 'mongoose';
import corsConfig from './config/corsConfig';
import registerRoutes from './routes/register';
import loginRoutes from './routes/login';
import metricRoutes from './routes/metrics';
import authenticate  from './middleware/authenticate';

const app: Express = express();
const port: number = parseInt(process.env.PORT || '3002', 10);

// Middleware
app.use(corsConfig);
app.use(express.json());

// Routes
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/metrics', authenticate, metricRoutes);

// Connects to MongoDB and starts the server
mongoose.connect('mongodb+srv://Mongo:Mongo123@metricscluster.yaqpfk6.mongodb.net/Metrics-API?retryWrites=true&w=majority&appName=MetricsCluster'
).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err: Error) => {
  console.error('Error connecting to MongoDB', err);
});
