import { Box, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

const StyledTextField = styled(TextField)({
  width: "100%",
});

const AddMetricsForm = () => {
  const handleSubmit =(e)=>{
    console.log(e.target)
  }
  return (
    <Box sx={{ width: "100%" }} component={"form"} onSubmit={handleSubmit}>
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
      <button >Create</button>
    </Box>
  );
};

export default AddMetricsForm;
