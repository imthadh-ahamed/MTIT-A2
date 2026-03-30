import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { Navbar } from '../features/navigation/components/Navbar';
import { Footer } from '../features/footer/Footer';

export const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This is a sample privacy policy page for Multi Shop. You can customize this
            content later with your actual privacy policy text.
          </Typography>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
