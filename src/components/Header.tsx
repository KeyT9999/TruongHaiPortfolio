import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Monitor, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/classNames'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Project', href: '/projects' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">X</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">CRISON</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'text-gray-800 font-medium transition-colors',
                    isActive
                      ? 'text-red-500'
                      : 'hover:text-red-500'
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="hidden sm:flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme('light')}
                className={cn(
                  'h-8 w-8 p-0',
                  theme === 'light' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                )}
              >
                <Sun className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme('system')}
                className={cn(
                  'h-8 w-8 p-0',
                  theme === 'system' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                )}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme('dark')}
                className={cn(
                  'h-8 w-8 p-0',
                  theme === 'dark' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                )}
              >
                <Moon className="h-4 w-4" />
              </Button>
            </div>

            {/* CTA Button */}
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Let's Talk
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="md:hidden h-10 w-10 p-0"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 rounded-b-lg shadow-lg">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                      isActive
                        ? 'text-red-500 bg-red-50'
                        : 'text-gray-800 hover:text-red-500 hover:bg-gray-50'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 