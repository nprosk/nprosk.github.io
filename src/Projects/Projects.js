import React from "react";
import {
  Box,
  Container,
  Link,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(0);
  const { colorMode } = useColorMode();

  const SeeMoreBGColor = {
    light: "black",
    dark: "gray.100",
  };

  const color = colorMode === "light" ? "white" : "black";

  const projects = [
    {
      title: "CoveyArcade",
      description: `Extended Covey.Town with an arcade area featuring real-time Pong and Target Shooting, 
      using WebSockets to communicate between the user and server, 
      rewarding winning players with tickets redeemable for cosmetics in the virtual ticket booth.
      Integrated new types and game areas into Covey.town's codebase.
      Players can join and play games using React, 
      used plain CSS for styling the actual games themselves. Most of the UI elements in the TicketBooth use Chakra/UI components.`,
      githubLink:
        "https://github.com/neu-cs4530/spring24-project-s24-group-506",
      demoLink: "https://spring24-project-s24-group-506.onrender.com/",
    },
    {
      title: "Sportlight",
      description:
        "Created a sport highlight website with user management functionality using Next.js, Bootstrap, Mongoose, and RESTful APIs.",
      githubLink: "https://github.com/shanejpark/sportlight",
    },
    {
      title: "Starfield Simulation",
      description: "Used p5.js to create a starfield simulation.",
      githubLink: "https://github.com/nprosk/starfield_simulation",
      demoLink: "https://nprosk.github.io/starfield_simulation/",
    },
  ];

  const projectTabsMapFunction = (project, index) => {
    const color = colorMode === "light" ? "black" : "white";
    return (
      <Tab mx={4} key={index} color={color}>
        {project.title}
      </Tab>
    );
  };

  const projectBodyMapFunction = (project, index) => {
    return (
      <ProjectCard
        key={index}
        {...project}
        currentIndex={selectedProject}
        myIdx={index}
      />
    );
  };

  return (
    <>
      <Container maxW="xl" align="center" my={{ base: "12vh", md: "20vh" }}>
        <Text fontSize={{ base: "2xl", md: "3xl" }} mb="4">
          Projects
        </Text>
        <Tabs
          align="center"
          variant="soft-rounded"
          colorScheme="gray"
          onChange={(index) => setSelectedProject(Number(index))}
        >
          <TabList>{projects.map(projectTabsMapFunction)}</TabList>
          <TabPanels>{projects.map(projectBodyMapFunction)}</TabPanels>
        </Tabs>
        <Link
          href="https://github.com/stars/nprosk/lists/projects"
          isExternal
        >
          <Box
            as="button"
            height="40px"
            w={"140px"}
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8px"
            borderRadius="20px"
            fontSize="20px"
            fontWeight="semibold"
            bg={SeeMoreBGColor[colorMode]}
            color={color}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
          >
            See More
          </Box>
        </Link>
      </Container>
    </>
  );
};

export default Projects;
