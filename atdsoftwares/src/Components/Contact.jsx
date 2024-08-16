import { Container, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <div>
      <Container id="contact" maxW="container.lg" py={8}>
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <Text>
          Email us at{" "}
          <Link href="mailto:your-email@example.com" color="teal.500">
            pprankur@gmail.com
          </Link>{" "}
          or call us at 7580909961
        </Text>
      </Container>
    </div>
  );
}
