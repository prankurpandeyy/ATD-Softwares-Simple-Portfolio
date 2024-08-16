import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Projects() {
  const [gitData, setGitData] = useState([]);
  useEffect(() => {
    function getDataFromGithub() {
      const data = axios
        .get("https://api.github.com/orgs/atdsoftwares/repos")
        .then((response) => {
          console.log(response.data);
          setGitData(response.data);
        });
    }
    getDataFromGithub();
  }, []);

  return (
    <div>
      <Container id="projects" maxW="container.lg" py={8}>
        <Heading as="h2" size="xl" mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {gitData.map((item) => (
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{item.full_name}</Heading>
              <Text mt={4}>Description of project 1.</Text>
              <HStack spacing={4} mt={4}>
                <Button
                  as="a"
                  href={item.html_url}
                  target="_blank"
                  colorScheme="teal"
                >
                  Github
                </Button>
                <Button
                  as="a"
                  href={item.homepage}
                  target="_blank"
                  colorScheme="blue"
                >
                  Demo
                </Button>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}
