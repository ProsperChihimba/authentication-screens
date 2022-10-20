import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Main from './components/main';
import Verify from './components/Verify';
import Login from './components/login';
import ForgotPass from './components/forgotPass';
import CheckEmail from './components/checkEmail';

function App() {
  return (
    <ChakraProvider>
      <CheckEmail />
    </ChakraProvider>
  );
}

export default App;
