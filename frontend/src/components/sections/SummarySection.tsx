import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import SummaryCard from "../reusable/SummaryCard";
import useGetMetricsAveragesQuery from "@/src/hooks/react-query/Metrics/queries/useGetMetricsAveragesQuery";

const SummarySection = () => {
  const averages = useGetMetricsAveragesQuery();
  const averagesData = averages.data;

  return (
    <Box flexGrow={1} padding={ "42px 10px" }>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <SummaryCard value={averagesData?.minute} text={"Latest per minute average"} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <SummaryCard value={averagesData?.hour} text={"Latest hourly average"} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <SummaryCard value={averagesData?.day} text={"Latest daily average"} />
          </Grid>      
      </Grid>
    </Box>
  );
};

export default SummarySection;
