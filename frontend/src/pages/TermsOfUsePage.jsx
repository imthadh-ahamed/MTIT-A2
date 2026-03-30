import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { Navbar } from '../features/navigation/components/Navbar';
import { Footer } from '../features/footer/Footer';

export const TermsOfUsePage = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Terms Of Use
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This is a sample terms of use page for Multi Shop. Replace this
            placeholder text with your actual terms and conditions.
          </Typography>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
