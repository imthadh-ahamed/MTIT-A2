import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { Navbar } from '../features/navigation/components/Navbar';
import { Footer } from '../features/footer/Footer';

export const FaqPage = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This is a sample FAQ page for Multi Shop. Add questions and answers
            here to help your customers.
          </Typography>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
