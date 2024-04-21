import { Box, Text } from "@chakra-ui/react";
import MediaCarousel from "./MediaCarousel";

export default function RocketLeague() {
  const mediaItems = [
    {
      type: "image",
      url: "./RocketLeague/pic4.jpg",
      alt: "Team Picture",
      caption: "Team picture during the Boost on the Beach LAN tournament in Myrtle Beach, SC",
    },
    {
      type: "image",
      url: "./RocketLeague/pic1.jpg",
      alt: "Action Shot",
      caption: "Action shot of me during the Boost on the Beach LAN tournament in Myrtle Beach, SC",
    },
    {
      type: "image",
      url: "./RocketLeague/pic2.jpg",
      alt: "Action Shot",
      caption: "Action shot of me during the Boost on the Beach LAN tournament in Myrtle Beach, SC",
    },
    {
      type: "image",
      url: "./RocketLeague/pic3.jpg",
      alt: "Individul Player Shot",
      caption: "Individual player shot of me during the Boost on the Beach LAN tournament in Myrtle Beach, SC",
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
      <Box w={"100%"} align="center" my={'12vh'}>
        <Text fontSize={30} as={"b"}>
          Rocket League
        </Text>
        <Text fontSize={16} w={{base: '90%', md: '75%', lg: '60%'}} mb={6}>
        From starting out on the lowest club team freshman year to finally making varsity in my junior year, my journey through Rocket League has been a steady climb. It wasn't always easy – there were plateaus and setbacks along the way. After becoming a varsity sub sophomore year, I thought I had my shot at the main team, but a new grad student proved too tough to beat in tryouts. Instead of giving up, I kept grinding. Finally, next semester, my perseverance paid off, and I earned my spot on the varsity team. Through it all, some of my closest friendships have formed, making Rocket League not just a game, but a cornerstone of my college experience.
        </Text>
        <MediaCarousel mediaItems={mediaItems} />
      </Box>
    </>
  );
}