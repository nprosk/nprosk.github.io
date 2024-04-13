import React from "react";
import {
  Box,
  Text,
  Link,
  Card,
  CardHeader,
  CardBody,
  useDisclosure,
  TabPanel,
  SlideFade,
} from "@chakra-ui/react";

const ProjectCard = ({ title, description, githubLink, demoLink, currentIndex, myIdx }) => {
  return (
    <TabPanel>
      <SlideFade in={currentIndex === myIdx} offsetY="20px">
      <Card p="4" mb="4" shadow={"xl"}>
          <CardBody>
            <Text mb="4">{description}</Text>
            <Box display="flex" justifyContent="space-between">
              <Link href={githubLink} target="_blank" color="blue.500" mr="2">
                GitHub
              </Link>
              {demoLink && (
                <Link href={demoLink} target="_blank" color="blue.500">
                  Demo
                </Link>
              )}
            </Box>
          </CardBody>
        </Card>
      </SlideFade>
    </TabPanel>
  );
};

export default ProjectCard;
