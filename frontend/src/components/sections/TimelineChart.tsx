"use client";
import dynamic from "next/dynamic";
import React from "react";
import "chart.js/auto";
import useGetAllMetricsQuery from "@/src/hooks/react-query/Metrics/queries/useGetAllMetricsQuery";
import { formatDate } from "@/src/utilities/Date";
//  Lazy load bar chart component
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const TimelineChart = () => {
  const getAllMetrics = useGetAllMetricsQuery();
  const getAllMetricsData = getAllMetrics.data;

  const data = {
    labels: getAllMetricsData?.map((metric) => formatDate(metric.timestamp)),
    datasets: [
      {
        label: "Metric Value",
        data: getAllMetricsData?.map((metric) => metric.value),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
      },
    ],
  };

  return (
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
};

export default TimelineChart;
