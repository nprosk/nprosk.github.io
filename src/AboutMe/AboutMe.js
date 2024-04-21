import { Box, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <>
      <Box w={"100%"} align="center" my={'20vh'}>
        <Text fontSize={30} as={"b"}>
          Who am I?
        </Text>
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '60%', lg: '50%'}} marginTop={8} textAlign="left">
        Age: 20<br/>
          Hometown: Aguadilla, PR<br/>
          Interests: Coding, Rocket League, Beach (shoutout Ken), Listening to Music, Basketball<br/>
          Languages: English, Spanish<br/>
          Involvement: Varsity Esports, Puerto Rican Student Association<br/>
          Proudest Achievement: Presidential Scholar<br/>
        </Text>
      </Box>
    </>
  );
}
