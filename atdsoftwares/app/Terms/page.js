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

export default function TermsAndConditions() {
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
        <h1 className="text-4xl font-black mb-8 uppercase">
          Terms and Conditions
        </h1>
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using ATD Software's services, you accept and agree
            to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on ATD Software's website for
            personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on ATD Software's website are provided on an 'as is'
            basis. ATD Software makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
          <p>
            In no event shall ATD Software or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on ATD Software's website, even if
            ATD Software or a ATD Software authorized representative has been
            notified orally or in writing of the possibility of such damage.
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
              <Phone className="mr-2" /> +91-7580909961
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
