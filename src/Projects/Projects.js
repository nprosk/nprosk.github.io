import React from "react";
import { Box, Container, Icon, Tab, TabList, TabPanels, Tabs, Text, useColorMode } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import scrollToElement from "../Utils/ScrollToElement";

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(0);
  const {colorMode} = useColorMode();

  const projects = [
    {
      title: "CoveyArcade",
      description:
        "The Arcade in Covey.Town introduces a dynamic and engaging space within the platform. Users can take breaks during virtual meetings to enjoy these games, fostering team bonding and providing a recreational outlet. The addition of a ticket booth enhances the experience, allowing users to earn virtual tickets by winning games. These tickets can be exchanged at the ticket booth for a variety of cosmetic items that can be equipped and shown off to others.",
      githubLink:
        "https://github.com/neu-cs4530/spring24-project-s24-group-506",
      demoLink: "https://spring24-project-s24-group-506.onrender.com/",
    },
    {
      title: "Not CoveyArcade",
      description:
        "something else",
      githubLink:
        "https://github.com/neu-cs4530/spring24-project-s24-group-506",
      demoLink: "https://spring24-project-s24-group-506.onrender.com/",
    },
  ];

  const projectTabsMapFunction = (project, index) => {
    const color = colorMode === 'light' ? "black" : "white";
    return (
      <Tab mx={4} key={index} color={color}>{project.title}</Tab>
    );
  };

  const projectBodyMapFunction = (project, index) => {
    return (
      <ProjectCard key={index} {...project} currentIndex={selectedProject} myIdx={index} />
    );
  };

  return (
    <>
    <Box w={'100%'} align='center' my={8}>
      <Icon as={MdOutlineKeyboardArrowUp} boxSize={8} onClick={() => scrollToElement('header')} />
    </Box>
    <Container maxW="xl" align='center'>
      <Text fontSize="3xl" mb="4">Projects</Text>
      <Tabs align='center' variant='soft-rounded' colorScheme="gray" onChange={(index) => (setSelectedProject(Number(index)))}>
        <TabList>
          {projects.map(projectTabsMapFunction)}
        </TabList>
        <TabPanels>
        {projects.map(projectBodyMapFunction)}
        </TabPanels>
      </Tabs>
    </Container>
    <Box w={'100%'} align='center' my={8}>
      <Icon as={MdOutlineKeyboardArrowDown} boxSize={8} onClick={() => scrollToElement('about-me')} />
    </Box>
    </>
  );
};

export default Projects;
