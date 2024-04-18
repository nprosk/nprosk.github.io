import { useState } from "react";
import { VStack, Button, HStack, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"; // Import Chakra UI icons
import WorkExperienceCard from './WorkExperienceCard';

export default function WorkExperienceCarousel({ workExperiences }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workExperiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? workExperiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <VStack spacing={2} align="center">
      <WorkExperienceCard key={currentIndex} {...workExperiences[currentIndex]} />
      <HStack spacing={4}>
        <Button onClick={handlePrev} className="social-icons">
          <Icon as={ChevronLeftIcon} boxSize={6}/>
        </Button>
        <Button onClick={handleNext} className="social-icons">
          <Icon as={ChevronRightIcon} boxSize={6}/>
        </Button>
      </HStack>
    </VStack>
  );
}