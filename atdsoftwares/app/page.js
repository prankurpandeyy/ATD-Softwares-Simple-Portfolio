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
    <div className="min-h-screen bg-yellow-300 text-black">
      <header className="sticky top-0 z-50 bg-blue-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
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
                  className={`text-sm font-bold uppercase transition-transform duration-300 ${
                    activeSection === section
                      ? "bg-yellow-300 text-black border-2 border-black transform translate-x-[-2px] translate-y-[-2px]"
                      : "text-white hover:bg-yellow-300 hover:text-black"
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="py-32 bg-pink-400 border-b-4 border-black"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-6xl font-black mb-4 uppercase">
              Welcome to ATD Software
            </h1>
            <p className="text-2xl mb-8 font-bold">
              Innovative Solutions for Your Business
            </p>
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-blue-500 text-white hover:bg-blue-600 transition-transform duration-300 text-lg py-6 px-10 uppercase font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]"
            >
              Explore Our Services
            </Button>
          </div>
        </section>

        <section
          id="about"
          className="py-20 bg-green-400 border-b-4 border-black"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-12 uppercase">About Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <Image
                  src="/placeholder.svg"
                  alt="About ATD Software"
                  width={500}
                  height={300}
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <p className="text-xl mb-6 font-bold">
                  ATD Software is a leading provider of innovative software
                  solutions. We specialize in creating cutting-edge applications
                  that help businesses thrive in the digital age.
                </p>
                <p className="text-xl font-bold">
                  Our team of expert developers and designers are committed to
                  delivering high-quality, tailored solutions that meet the
                  unique needs of each client.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="py-20 bg-purple-400 border-b-4 border-black"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-12 uppercase">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Web Development", "Mobile Apps", "Cloud Solutions"].map(
                (service, index) => (
                  <Card
                    key={index}
                    className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl font-black uppercase">
                        {service}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold">
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
          className="py-20 bg-orange-400 border-b-4 border-black"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-12 uppercase">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-black uppercase">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="border-2 border-black"
                    />
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-transform duration-300 uppercase font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                        View Project
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonial"
          className="py-20 bg-red-400 border-b-4 border-black"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-12 uppercase">
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
                  className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-black uppercase">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-lg font-bold">
                      {testimonial.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg italic font-bold">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="py-20 bg-cyan-400 border-b-4 border-black"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-12 uppercase">
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
                  className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-black uppercase">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-xl font-bold">
                      {plan.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-lg font-bold">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-transform duration-300 uppercase font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                      Choose Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-lime-400 border-b-4 border-black">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-12 uppercase">
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
                  className="border-4 border-black mb-4"
                >
                  <AccordionTrigger className="text-lg font-black uppercase hover:bg-yellow-300 px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white p-4 font-bold">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 border-t-4 border-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-3xl font-black uppercase mb-2">
                ATD Software
              </h3>
              <p className="text-lg font-bold">
                Innovative Solutions for Your Business
              </p>
            </div>
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map(
                (Icon, index) => (
                  <Link key={index} href="#" aria-label={Icon.name}>
                    <Icon className="h-8 w-8 hover:text-yellow-300 transition-colors duration-300" />
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="text-center mb-8">
            <p className="mb-2 text-lg font-bold">Contact Us:</p>
            <p className="flex items-center justify-center text-lg font-bold">
              <Mail className="mr-2" /> info@atdsoftware.com
            </p>
            <p className="flex items-center justify-center text-lg font-bold">
              <Phone className="mr-2" />+91-7580909961
            </p>
          </div>
          <div className="flex justify-center space-x-4 text-sm font-bold">
            <Link
              href="/Privacy-Policy"
              className="hover:text-yellow-300 transition-colors duration-300 uppercase"
            >
              Privacy Policy
            </Link>
            <Link
              href="/Terms"
              className="hover:text-yellow-300 transition-colors duration-300 uppercase"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
