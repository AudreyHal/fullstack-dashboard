import express from "express";
import { check } from "express-validator";
import {
  postMetric,
  getAllMetrics,
  getAverageMetrics,
} from "../controllers/metricsController";

const router = express.Router();

// Post a new metric
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("value", "Value is required").isFloat(),
  ],
  postMetric
);

// Get metrics for all users
router.get("/", getAllMetrics);

// Get average metrics per minute/hour/day for all users
router.get("/averages", getAverageMetrics);

export default router;
