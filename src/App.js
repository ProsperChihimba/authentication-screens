import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Main from './components/main';
import Verify from './components/Verify';
import Login from './components/login';
import ForgotPass from './components/forgotPass';
import CheckEmail from './components/checkEmail';
import Success from './components/success';

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Main /> },
    { path: "/verify-email", element: <Verify /> },
    { path: "/forgot-password", element: <ForgotPass /> },
    { path: "/email-sent", element: <CheckEmail /> },
    { path: "/success", element: <Success /> },
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <ChakraProvider>
        <AppWrapper />
      </ChakraProvider>
    </Router>
  );
}

export default App;
