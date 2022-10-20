import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Main from './components/main';
import Verify from './components/Verify';
import Login from './components/login';

function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
