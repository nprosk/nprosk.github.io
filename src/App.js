import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { AboutMe } from './HeadBanner/AboutMe';

function App() {
  document.body.style.backgroundColor = '#7EA2AA';

  return (
    <ChakraProvider>
      <Box className='use-sedan'>
        <AboutMe />
      </Box>
    </ChakraProvider>
  );
}

export default App;
