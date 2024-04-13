import React from 'react';
import { Box, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <Box align='center'>
      <Link href="https://github.com/nprosk" isExternal mr={4}>
        <Icon as={FaGithub} boxSize={8} className='social-icons'/>
      </Link>
      <Link href="https://linkedin.com/in/nicolas-proskauer-valerio" isExternal>
        <Icon as={FaLinkedin} boxSize={8} className='social-icons'/>
      </Link>
    </Box>
  );
};

export default SocialLinks;
