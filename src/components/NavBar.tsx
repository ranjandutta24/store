import { HStack, Image, Text } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";

interface Props {}
export const NavBar = ({}: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
