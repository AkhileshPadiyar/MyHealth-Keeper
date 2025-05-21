import React from 'react';
import { Button, VStack, Text } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

function DownloadSection() {
  return (
    <VStack spacing={4}>
      <Text fontSize="md">Click below to download the application (.zip)</Text>
      <a href="/MyHealthKeeper.zip" download>
        <Button leftIcon={<DownloadIcon />} colorScheme="teal" size="lg">
          Download App
        </Button>
      </a>
    </VStack>
  );
}

export default DownloadSection;
