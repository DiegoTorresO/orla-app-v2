import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/logoiesfseif.png'; // Tell webpack this JS file uses this image

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="grey">
        <Toolbar>
        <img alt="Logo azarquiel"  src={logo}  height="30px"/>
          <Typography variant="h6" component="div" sx={{ m:'auto'}}>
            Orla para los alumnos del IES Azarquiel
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
