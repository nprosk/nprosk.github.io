import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

function ColorMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack position={'fixed'} right={'5%'} top={'5%'}>
            {colorMode === 'light' ? (<Icon as={FaMoon}></Icon>) : (<Icon as={FaSun}></Icon>)}
            <Switch colorScheme="gray" isChecked={colorMode === 'dark'} onChange={toggleColorMode}></Switch>
        </HStack>
    );
}

export default ColorMode;