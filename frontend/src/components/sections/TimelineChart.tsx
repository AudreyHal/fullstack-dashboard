"use client";
import dynamic from "next/dynamic";
import React from "react";
import "chart.js/auto";
import { format } from "date-fns/format";
//  Lazy load Bar component
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const formatDate = (date: string) => {
  return format(date, "MMM dd, HH:mm");
};

const data = {
  labels: [
    formatDate("2024-07-24T10:15:00"),
    formatDate("2024-07-24T10:16:00"),
    formatDate("2024-07-24T10:17:00"),
  ],
  datasets: [
    {
      label: "Metric Value",
      data: [5, 7, 3],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.1,
    },
  ],
};

const TimelineChart = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      position: "relative",
      paddingBottom: 20,
    }}
  >
    <Bar
      data={data}
      style={{ width: "100%", height: "100%" }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  </div>
);

export default TimelineChart;
