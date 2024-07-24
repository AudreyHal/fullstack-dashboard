"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useState } from "react";

import { styled } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import AddMetricsModal from "@/src/components/sections/AddMetrics/AddMetricsModal";
import SummarySection from "@/src/components/sections/SummarySection";

const StyledContainer = styled(Container)({
  backgroundColor: "white",
  borderRadius: 5,
  marginTop: 5,
});

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledContainer maxWidth="lg">
        <SummarySection />
      </StyledContainer>
      <StyledContainer
        maxWidth="lg"
        sx={{
          marginTop: 5,
          padding: 5,
          height: 600,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <Button variant="contained" sx={{}} onClick={() => setOpen(true)}>
            Add Metrics
          </Button>
          <AddMetricsModal open={open} handleClose={() => setOpen(false)} />
        </Box>
        <LineChart
          xAxis={[{ data: [0, 10, 20, 30, 50, 80, 100] }]}
          series={[
            {
              data: [10, 2, 5.5, 2, 8.5, 1.5, 50],
            },
          ]}
          // width={'100%'}
          // height={300}
        />
      </StyledContainer>
    </>
  );
}
