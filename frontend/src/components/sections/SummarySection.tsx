import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import SummaryCard from "../reusable/SummaryCard";
import useGetMetricsAveragesQuery from "@/src/hooks/react-query/Metrics/queries/useGetMetricsAveragesQuery";

const SummarySection = () => {
  const averages = useGetMetricsAveragesQuery();
  const averagesData = averages.data;

  return (
    <Box sx={{ flexGrow: 1, padding: "42px 10px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <SummaryCard value={averagesData?.day} text={"daily average"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SummarySection;
