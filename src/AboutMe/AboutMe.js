import { Box, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <>
      <Box w={"100%"} align="center" my={'20vh'}>
        <Text fontSize={30} as={"b"}>
          Who am I?
        </Text>
        <Text fontSize={{base: 16, lg: 20}} w={{base: '90%', md: '60%', lg: '50%'}} marginTop={8}>
          My name is Nico and I'm a third year student at Northeastern pursuing
          a BS in Computer Science with a minor in Game Design. I'm passionate
          about programming in a variety of languages such as Java, Python,
          JavaScript/TypeScript, and C++. I also enjoy applying my prior
          experience representing Puerto Rico in Olympiad Math to my work. What
          I'm focused on currently is in Software Engineering, but I'd also be
          interested in Game Design/Development and other areas that have to do
          with gaming and software. I'm looking for a company where I can
          collaborate with a team and learn new skills quickly by asking
          questions. Outside of school, some of my hobbies include playing video
          games, specifically Rocket League, sports, going to the beach, and
          listening to new music.
        </Text>
      </Box>
    </>
  );
}
