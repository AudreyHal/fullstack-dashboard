"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Typography } from "@mui/material";
import AddMetricsModal from "@/src/components/sections/AddMetrics/AddMetricsModal";
import SummarySection from "@/src/components/sections/SummarySection";
import TimelineChart from "@/src/components/sections/TimelineChart";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container maxWidth="lg" sx={{paddingY: 3}}>
        <Box display="flex" justifyContent="right" paddingY={2}>
          <Button variant="contained" sx={{}} onClick={() => setOpen(true)}>
            Add Metrics
          </Button>
          <AddMetricsModal open={open} handleClose={() => setOpen(false)} />
        </Box>
        <SummarySection />
        <Typography variant="h2" fontSize={18} fontWeight={600} marginTop={5} color={'#121212'}>Activity Timeline</Typography>
        <TimelineChart />
      </Container>
    </>
  );
}
