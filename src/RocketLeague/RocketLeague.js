import { Box, Text } from "@chakra-ui/react";
import MediaCarousel from "./MediaCarousel";

export default function RocketLeague() {
  const mediaItems = [
    {
      type: "image",
      url: "./RocketLeague/pic1.jpg",
      alt: "Action Shot",
      caption: "During the Boost on the Beach LAN in Myrtle Beach, SC",
    },
    {
      type: "image",
      url: "./RocketLeague/pic2.jpg",
      alt: "Action Shot",
      caption: "During the Boost on the Beach LAN in Myrtle Beach, SC",
    },
    {
      type: "image",
      url: "./RocketLeague/pic3.jpg",
      alt: "Individul Player Shot",
      caption: "During the Boost on the Beach LAN in Myrtle Beach, SC",
    },
    {
      type: "image",
      url: "./RocketLeague/pic4.jpg",
      alt: "Team Picture",
      caption: "During the Boost on the Beach LAN in Myrtle Beach, SC",
    },
    {
      type: "video",
      url: "./RocketLeague/vid1.mp4",
      caption: "Team passing play during a tournament match",
    },
    {
      type: "video",
      url: "./RocketLeague/vid2.mp4",
      caption: "Beautiful assist to a teammate during a tournament match",
    },
  ];

  return (
    <>
      <Box w={"100%"} align="center" my={'20vh'}>
        <Text fontSize={30} as={"b"}>
          Rocket League
        </Text>
        <MediaCarousel mediaItems={mediaItems} />
      </Box>
    </>
  );
}