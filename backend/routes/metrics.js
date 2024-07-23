const express = require('express');
const { check, validationResult } = require('express-validator');
const Metric = require('../models/Metric');
const router = express.Router();

// Post a new metric
router.post(
    '/',
    [
      check('name', 'Name is required').not().isEmpty(),
      check('value', 'Value is required').isFloat(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { name, value } = req.body;
  
      try {
        const metric = new Metric({ name, value, timestamp: new Date(), userId: req.user.id });
        await metric.save();
        res.json(metric);
      } catch (err) {
        res.status(500).send('Server error');
      }
    }
  );
  

// Get all metrics for a user
router.get('/', async (req, res) => {
  try {
    const metrics = await Metric.find();
    res.json(metrics);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


// Get average metrics per minute/hour/day for all users
router.get('/average', async (req, res) => {
    const calculateAverage = async (periodFormat) => {
      return await Metric.aggregate([
        {
          $group: {
            _id: { $dateToString: { format: periodFormat, date: '$timestamp' } },
            averageValue: { $avg: '$value' }
          }
        },
        { $sort: { _id: 1 } }
      ]);
    };
  
    try {
      const averages = {
        minute: await calculateAverage('%Y-%m-%dT%H:%M'),
        hour: await calculateAverage('%Y-%m-%dT%H'),
        day: await calculateAverage('%Y-%m-%d')
      };
  
      res.json(averages);
    } catch (err) {
      res.status(500).send('Server error');
    }
  });
  

module.exports = router;

//@todo: move to controller
