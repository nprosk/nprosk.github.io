import { Button, Image, Stack, Text } from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";

export function AboutMe() {
  return (
    <Stack direction={'row'} spacing={4} align='center' justify='center' mt={20}>
      <Image
        objectFit='cover'
        borderRadius='full'
        maxW={{ base: '100%', sm: '300px' }}
        src='pic_of_me.JPG'
        alt='Me in an esports jersey'
      />

      <Stack ml={3} align='center'>
        <Text fontSize='3xl' as='b' align='center' className="onyx-text">Nicolas Proskauer Valerio</Text>

        <Text py='2' maxW={{ base: '100&', sm: '400px'}} align={'center'} className="onyx-text">
          Software Engineer with a passion for esports and gaming. I am a rising senior attending Northeastern University.
        </Text>
        <SocialLinks />

        <a href="./Nicolas_Proskauer_Valerio_Resume.pdf" download="./Nicolas_Proskauer_Valerio_Resume.pdf">
        <Button className="cool-gray" size={'md'} width={'150px'}>
          <Text className="onyx-text">Resume</Text>
        </Button>
        </a>
      </Stack>
    </Stack>
  );
}