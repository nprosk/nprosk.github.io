import {
  Box,
  Button,
  Image,
  LightMode,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";
import scrollToElement from "../Utils/ScrollToElement";

export default function Intro() {
  return (
    <>
      <Stack
        direction={{base: "column", md: "row"}}
        spacing={4}
        align={{base: "center", sm: "flex-start"}}
        justify="center"
        mt={20}
      >
        <Image
          objectFit="cover"
          borderRadius="full"
          maxW={{ base: "40%", sm: "200px", md: "300px"}}
          src="pic_of_me.JPG"
          alt="Me in an esports jersey"
        />

        <Stack align={'center'}>
          <Text fontSize="3xl" as="b">
            Nicol&#225;s Proskauer Valerio
          </Text>

          <Text py="2" maxW={{ base: "100%", sm: "200px", 'md': "300px", 'lg': "400px"}}>
            Software Engineer with a passion for esports and gaming. I am a
            rising senior attending Northeastern University.
          </Text>
          <SocialLinks />

          <Link
            href="./Nicolas_Proskauer_Valerio_Resume.pdf"
            download="./Nicolas_Proskauer_Valerio_Resume.pdf"
            className="social-icons"
          >
            <LightMode>
              <Button size={"lg"} width={"200px"}>
                <Text>Resume</Text>
              </Button>
            </LightMode>
          </Link>
        </Stack>
      </Stack>
      <Box w="100%" align="center" mt={{base: 5, sm: 10, md: 20}}>
        <Box>
          <LightMode>
            <Button
              onClick={() => scrollToElement("projects")}
              mx={8}
              size={"lg"}
              className="social-icons"
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToElement("about-me")}
              mx={8}
              size={"lg"}
              className="social-icons"
            >
              About Me
            </Button>
          </LightMode>
        </Box>
      </Box>
    </>
  );
}
