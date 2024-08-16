import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <div>
      <Container id="about" maxW="container.lg" py={8}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text>
          ATD Softwares provides top-notch services in web development, custom
          software development, mobile app development, technical writing, data
          analysis, and Google My Business. Our experienced team is dedicated to
          delivering high-quality solutions tailored to your needs.
        </Text>
      </Container>
    </div>
  );
}
