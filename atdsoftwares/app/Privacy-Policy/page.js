import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-yellow-300 text-black flex flex-col">
      <header className="bg-blue-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <nav className="container mx-auto px-6 py-4">
          <Link href="/">
            <Button className="bg-yellow-300 text-black hover:bg-yellow-400 transition-transform duration-300 uppercase font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-4xl font-black mb-8 uppercase">Privacy Policy</h1>
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
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
              <Phone className="mr-2" /> +1 (123) 456-7890
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
