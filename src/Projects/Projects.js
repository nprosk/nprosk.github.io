import React from "react";
import {
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

  const projects = [
    {
      title: "CoveyArcade",
      description:
        `Integrated new types and game areas into Covey.town's codebase, using objects in the tilemap editable via "Tiled". These areas are dynamically generated upon map loading using Phaser. Players can join and play games using React. Utilized event handlers in React like keypress and onClick for game functionality, and CSS for styling the actual games themselves. Most of the UI elements in the TicketBooth use Chakra/UI components.`,
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
      demoLink: 'https://nprosk.github.io/starfield_simulation/'
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
      <Container maxW="xl" align="center" my={{base: "12vh", md: "20vh"}}>
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
        <Link href="https://github.com/nprosk" isExternal>See more</Link>
      </Container>
    </>
  );
};

export default Projects;
