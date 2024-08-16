import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <div>
      <Flex as="header" bg="teal.500" p={4} justifyContent="space-between">
        <Heading size="md" color="white">
          ATD Softwares
        </Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white" href="#about">
            About
          </Button>
          <Button variant="link" color="white" href="#projects">
            Projects
          </Button>
          <Button variant="link" color="white" href="#pricing">
            Pricing
          </Button>
          <Button variant="link" color="white" href="#testimonials">
            Testimonials
          </Button>
          <Button variant="link" color="white" href="#contact">
            Contact
          </Button>
        </HStack>
      </Flex>
    </div>
  );
}
