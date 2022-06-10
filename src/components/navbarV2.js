import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/logoiesfseif.png'; // Tell webpack this JS file uses this image

export default function NavBarV2({mostrar}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="grey">
        <Toolbar>
        <img alt="Logo azarquiel"  src={logo}  height="30px"/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , ml:5}}>
            Orla para los alumnos del IES Azarquiel
          </Typography>
          <Button color="primary" variant='contained' 
          onClick={() => {
            mostrar(() => {
                window.location.reload()
                return {
                    BasicCard: true,
                    NavBar: true,
                    NavBarV2: false,
                    Selector: false
                };
            });
        }}>Volver al inicio</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
