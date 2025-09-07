import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200">
      <div className="px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Socials */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Happy Trails
            </h3>
            <p className="mb-4 text-gray-300">
              Making your travel dreams come true since 2005. Explore the world
              with confidence and create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-coral-200 hover:text-coral-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-coral-200 hover:text-coral-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-coral-200 hover:text-coral-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-coral-200 hover:text-coral-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Destinations", "Travel Packages", "About Us", "Contact"].map(
                (link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-coral-200 hover:text-coral-400"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-coral-500 mr-2 mt-0.5" />
                <span className="text-coral-200">
                  123 Travel Street, Cityville, Country, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-coral-500 mr-2" />
                <span className="text-coral-200">1-800-TRAVEL</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-coral-500 mr-2" />
                <span className="text-coral-200">info@happytrails.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="mb-4 text-coral-200">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-sand-50 border-none text-blue-900 placeholder:text-blue-500"
              />
              <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-coral-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coral-200 text-sm">
            &copy; {new Date().getFullYear()} Happy Trails. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-coral-200 hover:text-coral-400 text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-coral-200 hover:text-coral-400 text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
