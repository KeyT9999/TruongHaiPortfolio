import { socials } from '@/data/socials'
import { Github, Linkedin, Twitter, Mail, Instagram, Facebook } from 'lucide-react'
import { cn } from '@/lib/classNames'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  instagram: Instagram,
  facebook: Facebook,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left - Copyright */}
          <div className="text-gray-800 font-medium">
            Created By ChuHai.
          </div>

          {/* Center - Social Media */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 hover:bg-red-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 hover:bg-red-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 hover:bg-red-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              Terms & Condition
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 