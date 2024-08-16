import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "./testimonial.css";
function Testimonials() {
  const testimonials = [
    {
      clientName: "John Doe",
      clientPosition: "CEO, Tech Innovators",
      testimonial:
        "ATD Softwares exceeded our expectations. Their team delivered a custom software solution that perfectly aligned with our business needs. Highly recommend!",
      clientImage: "https://example.com/john-doe.jpg",
    },
    {
      clientName: "Jane Smith",
      clientPosition: "Founder, Green Earth",
      testimonial:
        "Working with ATD Softwares was a pleasure. Their expertise in web development helped us launch our eco-friendly online store on time and within budget.",
      clientImage: "https://example.com/jane-smith.jpg",
    },
    {
      clientName: "Michael Johnson",
      clientPosition: "CTO, FinTech Solutions",
      testimonial:
        "The mobile app developed by ATD Softwares has significantly improved our user engagement. The team's attention to detail and professionalism were top-notch.",
      clientImage: "https://example.com/michael-johnson.jpg",
    },
    {
      clientName: "Emily Davis",
      clientPosition: "Marketing Director, Bright Future",
      testimonial:
        "ATD Softwares helped us revamp our website with a modern design that reflects our brand identity. The project was smooth, and the results were fantastic.",
      clientImage: "https://example.com/emily-davis.jpg",
    },
    {
      clientName: "David Wilson",
      clientPosition: "Product Manager, HealthFirst",
      testimonial:
        "ATD Softwares' team was instrumental in developing a custom software solution that streamlined our operations. Their ongoing support is invaluable.",
      clientImage: "https://example.com/david-wilson.jpg",
    },
    {
      clientName: "Sophia Martinez",
      clientPosition: "Owner, Cafe Delight",
      testimonial:
        "Our new mobile app, developed by ATD Softwares, has transformed how we interact with our customers. The process was seamless, and the outcome was exceptional.",
      clientImage: "https://example.com/sophia-martinez.jpg",
    },
  ];

  return (
    <div>
      <Container id="testimonials" maxW="container.lg" py={8}>
        <Heading as="h2" size="xl" mb={4}>
          Testimonials
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {testimonials.map((test) => (
            <Box p={5} shadow="md" borderWidth="1px">
              <Text>{test.testimonial}</Text>
              <Text fontWeight="bold">-{test.clientName}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default Testimonials;
