"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ATDSoftwareLanding() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "services",
        "work",
        "testimonial",
        "pricing",
        "faq",
      ];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "/placeholder.svg",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Project 2",
      image: "/placeholder.svg",
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: "Project 3",
      image: "/placeholder.svg",
      link: "https://example.com/project3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <header className="sticky top-0 z-50 bg-white bg-opacity-10 backdrop-blur-md shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-6">
            {[
              "hero",
              "about",
              "services",
              "work",
              "testimonial",
              "pricing",
              "faq",
            ].map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === section
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-200"
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="py-32 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-75"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">
              Welcome to ATD Software
            </h1>
            <p className="text-2xl mb-8 animate-fade-in-up animation-delay-300">
              Innovative Solutions for Your Business
            </p>
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors duration-300 text-lg py-6 px-10 rounded-full animate-fade-in-up animation-delay-600"
            >
              Explore Our Services
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-blue-600 opacity-25"></div>
        </section>

        <section
          id="about"
          className="py-20 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <Image
                  src="/placeholder.svg"
                  alt="About ATD Software"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-2xl hover:shadow-yellow-300/50 transition-shadow duration-300"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <p className="text-xl mb-6 leading-relaxed">
                  ATD Software is a leading provider of innovative software
                  solutions. We specialize in creating cutting-edge applications
                  that help businesses thrive in the digital age.
                </p>
                <p className="text-xl leading-relaxed">
                  Our team of expert developers and designers are committed to
                  delivering high-quality, tailored solutions that meet the
                  unique needs of each client.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Web Development", "Mobile Apps", "Cloud Solutions"].map(
                (service, index) => (
                  <Card
                    key={index}
                    className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hover:shadow-xl transition-shadow duration-300 border-none"
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-yellow-400">
                        {service}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="py-20 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-yellow-400">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors duration-300">
                        View Project
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonial" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Client Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "John Doe",
                  company: "ABC Corp",
                  text: "ATD Software delivered an exceptional product that exceeded our expectations.",
                },
                {
                  name: "Jane Smith",
                  company: "XYZ Inc",
                  text: "Working with ATD Software was a pleasure. Their team is professional and highly skilled.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-yellow-400">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-white opacity-75">
                      {testimonial.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="py-20 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "$99/mo",
                  features: ["Feature 1", "Feature 2", "Feature 3"],
                },
                {
                  name: "Pro",
                  price: "$199/mo",
                  features: [
                    "Feature 1",
                    "Feature 2",
                    "Feature 3",
                    "Feature 4",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "All Features",
                    "Priority Support",
                    "Custom Integration",
                  ],
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-yellow-400">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-white text-xl">
                      {plan.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-lg">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors duration-300">
                      Choose Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-2xl mx-auto"
            >
              {[
                {
                  question: "What services does ATD Software offer?",
                  answer:
                    "ATD Software offers a wide range of services including web development, mobile app development, and cloud solutions.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on the scope and complexity. We work closely with our clients to establish realistic timelines for each project.",
                },
                {
                  question:
                    "Do you offer ongoing support after project completion?",
                  answer:
                    "Yes, we offer various support and maintenance packages to ensure your software continues to perform optimally after launch.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-white border-opacity-20"
                >
                  <AccordionTrigger className="text-lg hover:text-yellow-400 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-opacity-75">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-3xl font-bold mb-2">ATD Software</h3>
              <p className="text-lg">Innovative Solutions for Your Business</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-yellow-400 transition-colors duration-300" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-yellow-400 transition-colors duration-300" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-yellow-400 transition-colors duration-300" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-yellow-400 transition-colors duration-300" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6 hover:text-yellow-400 transition-colors duration-300" />
              </Link>
            </div>
          </div>
          <div className="text-center mb-8">
            <p className="mb-2 text-lg">Contact Us:</p>
            <p className="flex items-center justify-center text-lg">
              <Mail className="mr-2" /> info@atdsoftware.com
            </p>
            <p className="flex items-center justify-center text-lg">
              <Phone className="mr-2" /> +1 (123) 456-7890
            </p>
          </div>
          <div className="flex justify-center space-x-4 text-sm text-gray-400">
            <Link
              href="/privacy-policy"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
