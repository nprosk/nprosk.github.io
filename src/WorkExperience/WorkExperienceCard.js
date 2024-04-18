import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

export default function WorkExperienceCard({ company, position, duration, description, logo }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      mb={4}
      maxW="500px"
      mx="auto"
      height={"425px"}
    >
      <VStack spacing={4} align="center">
        <Image src={logo} alt={`${company} logo`} objectFit={'cover'} maxW={"400px"} maxH={"100px"}/>
        <Heading as="h3" size="md" textAlign="center">
          {position} at {company}
        </Heading>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          {duration}
        </Text>
        <Text textAlign="center">{description}</Text>
      </VStack>
    </Box>
  );
}