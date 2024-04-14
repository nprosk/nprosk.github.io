import React from "react";
import { Container, Tab, TabList, TabPanels, Tabs, Text, useColorMode } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

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
      title: "Sportlight",
      description:
        "Created a sport highlight website with user management functionality using Next.js, Bootstrap, Mongoose, and RESTful APIs.",
      githubLink:
        "https://github.com/shanejpark/sportlight",
    },
    {
      title: "Culinary Crafting",
      description: "A",
      githubLink: "https://github.com/RaeAlbus/Culinary-Crafting",
    }
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
    <Container maxW="xl" align='center' my={'20vh'}>
      <Text fontSize={{base: '2xl', md: '3xl'}} mb="4">Projects</Text>
      <Tabs align='center' variant='soft-rounded' colorScheme="gray" onChange={(index) => (setSelectedProject(Number(index)))}>
        <TabList>
          {projects.map(projectTabsMapFunction)}
        </TabList>
        <TabPanels>
        {projects.map(projectBodyMapFunction)}
        </TabPanels>
      </Tabs>
    </Container>
    </>
  );
};

export default Projects;
