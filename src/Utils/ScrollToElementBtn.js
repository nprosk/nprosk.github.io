import { Box, Button, Icon } from "@chakra-ui/react";
import scrollToElement from "./ScrollToElement";

export default function ScrollToElementBtn({scrollTo, icon, position}) {
    return (
        <Box w={"100%"} align="center" position='absolute' top={position}>
        <Button onClick={() => scrollToElement(scrollTo)} variant={'ghost'} size='lg' className="social-icons">
        <Icon
            as={icon}
            boxSize={8}
          />
        </Button>
    </Box>
    )
}