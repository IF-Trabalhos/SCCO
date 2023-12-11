import React from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

const RegisterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de registro aqui
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} justifyContent="center">
        {/* Identificação */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Identificação
            </Typography>
            <TextField label="Nome" fullWidth margin="normal" />
            <TextField label="E-mail" type="email" fullWidth margin="normal" />
            <TextField label="Senha" type="password" fullWidth margin="normal" />
          </Paper>
        </Grid>

        {/* Endereço */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Endereço
            </Typography>
            <TextField label="Rua" fullWidth margin="normal" />
            <TextField label="Cidade" fullWidth margin="normal" />
            <TextField label="CEP" fullWidth margin="normal" />
          </Paper>
        </Grid>

        {/* Contato */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <TextField label="Telefone" fullWidth margin="normal" />
            <TextField label="Celular" fullWidth margin="normal" />
          </Paper>
        </Grid>

        {/* Botão de envio */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Registrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
