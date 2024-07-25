import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Metric from '../models/Metric';

// Post a new metric
export const postMetric = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, value } = req.body;

  try {
    const metric = new Metric({ name, value, timestamp: new Date(), userId: req.user.id });
    await metric.save();
    res.status(201).json(metric);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get all metrics
export const getAllMetrics = async (req: Request, res: Response) => {
  try {
    const metrics = await Metric.find();
    res.json(metrics);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get average metrics per minute/hour/day for all users
export const getAverageMetrics = async (req: Request, res: Response) => {
  const calculateAverage = async (periodFormat: string) => {
    const result = await Metric.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: periodFormat, date: '$timestamp' } },
          averageValue: { $avg: '$value' }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    return result.map((item) => item.averageValue);
  };

  try {
    const averages = {
      minute: await calculateAverage('%Y-%m-%dT%H:%M'),
      hour: await calculateAverage('%Y-%m-%dT%H'),
      day: await calculateAverage('%Y-%m-%d')
    };

    // Return latest averages rounded to an integer
    res.json({
      minute: averages.minute.length > 0 ? Math.round(averages.minute[averages.minute.length - 1]) : 0,
      hour: averages.hour.length > 0 ? Math.round(averages.hour[averages.hour.length - 1]) : 0,
      day: averages.day.length > 0 ? Math.round(averages.day[averages.day.length - 1]) : 0
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
