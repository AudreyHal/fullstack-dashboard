import mongoose from "mongoose";

const metricSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Metric = mongoose.model('Metric', metricSchema);

export default Metric;
