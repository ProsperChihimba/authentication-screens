import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Main from './components/main';
import Verify from './components/Verify';

function App() {
  return (
    <ChakraProvider>
      <Verify />
    </ChakraProvider>
  );
}

export default App;
