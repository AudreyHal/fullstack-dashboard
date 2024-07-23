"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SummarySection from "./components/sections/SummarySection";
import { useState } from "react";
import AddMetricsModal from "./components/sections/AddMetrics/AddMetricsModal";
import { styled } from "@mui/material";

const StyledContainer = styled(Container)({
  backgroundColor: "white",
  borderRadius: 5,
  marginTop: 5,
});

export default function Home() {
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
      </StyledContainer>
    </>
  );
}
