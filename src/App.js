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
import ScrollToElementBtn from "./Utils/ScrollToElementBtn";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import WorkExperience from "./WorkExperience/WorkExperience";
import RocketLeague from "./RocketLeague/RocketLeague";

function App() {
  const theme = extendTheme({ colorscheme: "gray" });

  return (
    <ChakraProvider theme={theme}>
      <Box className="use-sedan">
        <Box id="header" className="header">
          <Intro />
        </Box>
        <Box id="about-me" className="about-me">
          <AboutMe/>
        </Box>
        <Box id="projects" className="projects">
          <Projects />
        </Box>
        <Box id="work-experience" className="work-experience">
          <WorkExperience/>
        </Box>
        <Box id="rocket-league" className="rocket-league">
          <RocketLeague/>
        </Box>
      </Box>
      <ScrollToElementBtn scrollTo='header' icon={MdOutlineKeyboardArrowUp} position="105vh" />
      <ScrollToElementBtn scrollTo='projects' icon={MdOutlineKeyboardArrowDown} position="190vh" />
      <ScrollToElementBtn scrollTo='about-me' icon={MdOutlineKeyboardArrowUp} position="205vh" />
      <ScrollToElementBtn scrollTo='work-experience' icon={MdOutlineKeyboardArrowDown} position="290vh" />
      <ScrollToElementBtn scrollTo='projects' icon={MdOutlineKeyboardArrowUp} position="305vh" />
      <ScrollToElementBtn scrollTo='rocket-league' icon={MdOutlineKeyboardArrowDown} position="390vh" />
      <ScrollToElementBtn scrollTo='work-experience' icon={MdOutlineKeyboardArrowUp} position="405vh" />
      <ColorMode />
    </ChakraProvider>
  );
}

export default App;
