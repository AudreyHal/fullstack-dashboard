import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import React from 'react'
import SummaryCard from '../reusable/SummaryCard'


const SummarySection = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "42px 10px" }}>
    <Grid container spacing={2}>
      {[1, 2, 3].map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <SummaryCard />
        </Grid>
      ))}
    </Grid>
  </Box>
  )
}

export default SummarySection