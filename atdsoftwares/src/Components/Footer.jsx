import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const socialMediaButtons = [
    {
      name: "Facebook",
      icon: "FaFacebook",
      url: "https://www.facebook.com/prankurpandeyy",
    },
    {
      name: "Twitter",
      icon: "FaTwitter",
      url: "https://www.twitter.com/yourprofile",
    },
    {
      name: "LinkedIn",
      icon: "FaLinkedin",
      url: "https://www.linkedin.com/in/prankurpandeyy",
    },
    {
      name: "Instagram",
      icon: "FaInstagram",
      url: "https://www.instagram.com/prankurpandeyy",
    },
    {
      name: "GitHub",
      icon: "FaGithub",
      url: "https://www.github.com/prankurpandeyy",
    },
  ];

  return (
    <div>
      <Box as="footer" bg="teal.500" py={4}>
        <VStack>
          <HStack spacing={4}>
            {socialMediaButtons.map((buttons) => (
              <IconButton
                as="a"
                href={buttons.url}
                target={"_blank"}
                colorScheme="whiteAlpha"
                icon={buttons.icon}
              />
            ))}
          </HStack>
          <Text color="white">&copy; 2024 ATD Softwares</Text>
        </VStack>
      </Box>
    </div>
  );
}
