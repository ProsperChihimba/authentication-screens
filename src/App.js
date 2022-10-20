import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Main from './components/main';
import Verify from './components/Verify';
import Login from './components/login';
import ForgotPass from './components/forgotPass';

function App() {
  return (
    <ChakraProvider>
      <ForgotPass />
    </ChakraProvider>
  );
}

export default App;
