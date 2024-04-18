import { useState } from "react";
import { VStack, Button, HStack, Icon, Image, Box, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function MediaCarousel({ mediaItems }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <VStack spacing={2} align="center">
      {mediaItems[currentIndex].type === "image" ? (
        <Image src={mediaItems[currentIndex].url} alt={mediaItems[currentIndex].alt} maxH={'400px'} objectFit="cover" />
      ) : (
        <Box maxH="400px">
          <video key={currentIndex} controls style={{ maxHeight: "400px", width: "100%" }}>
            <source src={mediaItems[currentIndex].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      )}
      <Text>{mediaItems[currentIndex].caption}</Text>
      <HStack spacing={4}>
        <Button onClick={handlePrev}>
          <Icon as={ChevronLeftIcon} boxSize={6} />
        </Button>
        <Button onClick={handleNext}>
          <Icon as={ChevronRightIcon} boxSize={6} />
        </Button>
      </HStack>
    </VStack>
  );
}