"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState } from "react";
import { styled } from "@mui/material";
import AddMetricsModal from "@/src/components/sections/AddMetrics/AddMetricsModal";
import SummarySection from "@/src/components/sections/SummarySection";
import TimelineChart from "@/src/components/sections/TimelineChart";

const StyledContainer = styled(Container)({
  backgroundColor: "white",
  borderRadius: 5,
  marginTop: 5,
});

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="right" paddingY={2}>
          <Button variant="contained" sx={{}} onClick={() => setOpen(true)}>
            Add Metrics
          </Button>
          <AddMetricsModal open={open} handleClose={() => setOpen(false)} />
        </Box>
      </Container>
      <StyledContainer maxWidth="lg">
        <SummarySection />
      </StyledContainer>
      <StyledContainer
        maxWidth="lg"
        sx={{
          marginTop: 5,
          paddingBottom: 10,
          paddingTop: 10,
          height: 600,
        }}
      >
        <TimelineChart />
      </StyledContainer>
    </>
  );
}
