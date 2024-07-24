'use client'
import { getToken, removeToken } from '@/src/utilities/Auth'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation'
import React from 'react'

const TopBar = () => {
  const router = useRouter();
  
  const handleLogOut =()=>{
    removeToken();
    router.push("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position='relative'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome
        </Typography>
        <Button color="inherit" onClick={handleLogOut} >Log Out</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default TopBar