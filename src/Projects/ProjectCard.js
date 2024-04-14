import React from "react";
import {
  Box,
  Text,
  Link,
  Card,
  CardBody,
  TabPanel,
  SlideFade,
  Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  githubLink,
  demoLink,
  currentIndex,
  myIdx,
}) => {
  return (
    <TabPanel>
      <SlideFade in={currentIndex === myIdx} offsetY="20px">
        <Card
          p="4"
          mb="4"
          size={{ base: "medium", md: "large" }}
          variant="outline"
          shadow={"lg"}
        >
          <CardBody>
            <Text mb="4">{description}</Text>
            <Box display="flex" justifyContent="space-between">
              <Link href={githubLink} isExternal mr={4}>
                <Icon as={FaGithub} boxSize={8} className="social-icons" />
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
