import { Box, Text, VStack } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <>
      <Box w={"100%"} align="center" my={'20vh'}>
        <Text fontSize={30} as={"b"}>
          Who am I?
        </Text>
        <VStack spacing={4} my={4} >
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '75%', lg: '60%'}} textAlign="left">
        Age: 20
        </Text>
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '75%', lg: '60%'}} textAlign="left">
          Hometown: Aguadilla, PR 🇵🇷
        </Text>
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '75%', lg: '60%'}} textAlign="left">
          Interests: Coding, Beach (shoutout Ken), Listening to Music, Watching Chess YouTubers
        </Text>
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '75%', lg: '60%'}} textAlign="left">
          Sports: Basketball 🏀, Soccer, Football (American)
        </Text>
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '75%', lg: '60%'}} textAlign="left">
          Video Games: Rocket League, Counter-Strike 2, Lethal Company, Overwatch 2, Fortnite, Trackmania
        </Text>
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '75%', lg: '60%'}} textAlign="left">
          Languages: English, Spanish
        </Text>
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '75%', lg: '60%'}} textAlign="left">
          Involvement: Varsity Esports, Puerto Rican Student Association
        </Text>
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '75%', lg: '60%'}} textAlign="left">
          Proudest Achievement: Presidential Scholar 👨‍🎓
        </Text>
        </VStack>
      </Box>
    </>
  );
}
