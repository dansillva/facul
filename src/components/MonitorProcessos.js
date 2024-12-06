import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function MonitorProcessos() {
  const [processos, setProcessos] = useState([
    { id: 1, nome: 'Processo 1', status: 'Em andamento' },
    { id: 2, nome: 'Processo 2', status: 'Fechado' },
    { id: 3, nome: 'Processo 3', status: 'Em andamento' },
  ]);

  const alterarStatus = (id) => {
    setProcessos(processos.map(processo => 
      processo.id === id ? { ...processo, status: processo.status === 'Em andamento' ? 'Fechado' : 'Em andamento' } : processo
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {processos.map((processo) => (
            <TableRow key={processo.id}>
              <TableCell>{processo.id}</TableCell>
              <TableCell>{processo.nome}</TableCell>
              <TableCell>{processo.status}</TableCell>
              <TableCell>
                <Button 
                  variant="contained" 
                  color={processo.status === 'Em andamento' ? 'success' : 'error'} 
                  onClick={() => alterarStatus(processo.id)}
                >
                  {processo.status === 'Em andamento' ? 'Fechar' : 'Reabrir'}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MonitorProcessos;
