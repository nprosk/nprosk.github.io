import "./App.css";
import {
  Box,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import ColorMode from "./ColorMode";
import Projects from "./Projects/Projects";
import Intro from "./HeadBanner/Intro";
import AboutMe from "./AboutMe/AboutMe";

function App() {
  const theme = extendTheme({ colorscheme: "gray" });

  return (
    <ChakraProvider theme={theme}>
      <Box className="use-sedan">
        <Box id="header" className="header">
          <Intro />
        </Box>
        <Box id="projects" className="projects">
          <Projects />
        </Box>
        <Box id="about-me" className="about-me">
          <AboutMe/>
        </Box>
      </Box>
      <ColorMode />
    </ChakraProvider>
  );
}

export default App;
