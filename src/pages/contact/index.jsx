import React from 'react';
import { Grid, Box, Typography, Link, TextField, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './styles.css';

export const Contact = () => {
  return (
    <Grid container className="contact-container">
      <Grid item xs={12} marginTop={18}>
        <Box p={2} className="fadeInAnimation">
          <Typography variant="h3" className="contact-title">
            Contate-nos
          </Typography>
        </Box>
      </Grid>
      <Grid container item xs={12} display="flex" flexDirection="row" gap={10} justifyContent="center">
      <Grid item xs={12} md={5} height="100%">
        <Box display="flex" flexDirection="column" alignItems="center" className="contact-info-box" height="100%" padding="32px">
          <Typography variant="h4" className="contact-info-title">
            Fale com nossos vendedores:
          </Typography>
          <Box mb={4} display="flex" flexDirection="row" alignItems="center" gap={4} marginTop="auto" marginBottom="auto">
            <Link href="https://wa.me/5519995721301" target="_blank" className="contact-link">
              <WhatsAppIcon className="contact-link-icon" />
              CRISTIANO
            </Link>
            <Link href="https://wa.me/5519995721085" target="_blank" className="contact-link">
              <WhatsAppIcon className="contact-link-icon" />
              JOSE ANTONIO
            </Link>
            <Link href="https://wa.me/5519999725528" target="_blank" className="contact-link">
              <WhatsAppIcon className="contact-link-icon" />
              JULIO CESAR
            </Link>
          </Box>
        </Box>
      </Grid>


      <Grid item xs={6} md={5} className="fadeInAnimation" width="100% !important" maxWidth="100% !important">
        <Grid item xs={6} md={6} display="flex" justifyContent="center"  width="100% !important"maxWidth="100%  !important">
          <Box p={4} className="contact-form-box"  width="100% !important" maxWidth="100%  !important">
            <Typography variant="h4" className="contact-info-title">
              Entre em Contato Via Email
            </Typography>
            <TextField fullWidth label="Nome" margin="normal" variant="outlined" />
            <TextField fullWidth label="Email" margin="normal" variant="outlined" />
            <TextField fullWidth label="Mensagem" margin="normal" variant="outlined" multiline rows={4} />
            <Button variant="contained" className="contact-form-button">
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>
      </Grid>
    </Grid>
  );
};
