//外部からのimport
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
//内部からのimport
import theme from './theme/theme';
import { Router } from './router/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
