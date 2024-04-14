import { Box, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <>
      <Box w={"100%"} align="center" my={'20vh'}>
        <Text fontSize={30} as={"b"}>
          Who am I?
        </Text>
      </Box>
    </>
  );
}
