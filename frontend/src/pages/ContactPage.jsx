import React from 'react';
import { Container, Stack, TextField, Typography, Button } from '@mui/material';
import { Navbar } from '../features/navigation/components/Navbar';
import { Footer } from '../features/footer/Footer';

export const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Stack spacing={3} maxWidth={600} mx="auto">
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Have questions about Multi Shop? Send us a message using the form below.
          </Typography>
          <TextField fullWidth label="Name" variant="outlined" />
          <TextField fullWidth label="Email" variant="outlined" />
          <TextField fullWidth label="Message" multiline minRows={4} variant="outlined" />
          <Button type="button" variant="contained">Send Message</Button>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
