import { Box, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

const StyledTextField = styled(TextField)({
  width: "100%",
});

const AddMetricsForm = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <StyledTextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
      <StyledTextField
        sx={{ marginTop: 3 }}
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
    </Box>
  );
};

export default AddMetricsForm;
