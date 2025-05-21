import React from 'react';
import { Box, Heading, Text, Container } from '@chakra-ui/react';
import DownloadSection from '../components/DownloadSection';

function App() {
  return (
    <Box minHeight="100vh" bg="gray.50" py={10}>
      <Container maxW="xl" centerContent>
        <Heading as="h1" size="xl" mb={4}>
          Smart Healthcare App
        </Heading>
        <Text fontSize="lg" mb={8} textAlign="center">
          Download our federated learning-based healthcare monitoring app.
        </Text>
        <DownloadSection />
      </Container>
    </Box>
  );
}

export default App;
