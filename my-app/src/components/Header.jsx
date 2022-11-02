import React from "react";

import { Flex, Heading, Box, VStack, Spacer } from "@chakra-ui/layout";
function Header() {
  return (
    <div className="Header">
      <div className="logo">Gaet</div>
      <ul className="Subpages">
        <li>About</li>
        <li>Discover</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
