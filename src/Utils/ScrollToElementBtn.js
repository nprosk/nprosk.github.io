import { Box, Button, Icon } from "@chakra-ui/react";
import scrollToElement from "./ScrollToElement";

export default function ScrollToElementBtn({scrollTo, icon}) {
    return (
        <Box w={"100%"} align="center" my={{base: '0', sm: '0', md: '8'}}>
        <Button onClick={() => scrollToElement(scrollTo)} variant={'ghost'} size='lg' className="social-icons">
        <Icon
            as={icon}
            boxSize={8}
          />
        </Button>
    </Box>
    )
}