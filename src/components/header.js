import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Monitoramento de Processos
        </Typography>
        <Button color="inherit">Início</Button>
      </Toolbar>
    </AppBar>
  );
}

export default header;
