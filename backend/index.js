const express = require('express');
const mongoose = require('mongoose');
const corsConfig = require('./config/corsConfig');
const registerRoutes = require('./routes/register');;
const loginRoutes = require('./routes/login');
const metricRoutes = require('./routes/metrics')
const { authenticate } = require('./middleware/authenticate');

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(corsConfig);
app.use(express.json());

// Routes
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/metrics', authenticate, metricRoutes);


//@todo: move to env
mongoose.connect('mongodb+srv://Mongo:Mongo123@metricscluster.yaqpfk6.mongodb.net/Metrics-API?retryWrites=true&w=majority&appName=MetricsCluster', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("connected");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
});