import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 sm:px-6 lg:px-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start">
              <span className="sr-only">Your Company</span>
              <svg className="h-8 w-auto text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              <span className="ml-2 text-xl font-semibold">EDoc Lanka Limitted.</span>
            </Link>
            <p className="mt-2 text-sm text-center md:text-left">
              Creating calm and beautiful experiences for our customers since 2023.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              {['About', 'Careers', 'Contact', 'Press'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-base hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Serenity Lane, Calmville, CV 12345</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@yourcompany.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}