import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Section from '@/components/Section'

const testimonials = [
  {
    id: 1,
    name: 'Mr. Nghia Nguyen',
    role: 'Client',
    company: 'Creative Agency',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rating: 4,
    avatar: '/assets/avatars/nghia-nguyen.jpg'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Working with Truong Hai was an absolute pleasure. They delivered a beautiful, responsive website that exceeded our expectations.',
    rating: 5,
    avatar: '/assets/avatars/sarah.jpg'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartupXYZ',
    content: 'Truong Hai transformed our vision into reality with a stunning e-commerce platform. Their technical expertise and creative problem-solving skills helped us launch ahead of schedule.',
    rating: 5,
    avatar: '/assets/avatars/michael.jpg'
  }
]

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className="text-lg text-red-500">Testimonial</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <div className="w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          What My <span className="text-red-500">Clients</span> Say
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Testimonial - Left */}
        <div className="lg:col-span-1 space-y-6">
          {/* Large Quote Marks */}
          <div className="text-8xl text-gray-200 font-serif leading-none">
            "66
          </div>
          
          {/* Client Info */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-800">Mr. Nghia Nguyen</h3>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
          
          {/* Testimonial Text */}
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Main Client Photo - Center */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="w-64 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-gray-500">
              <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👔</span>
              </div>
              <p className="text-sm">Mr. Nghia Nguyen</p>
              <p className="text-xs">Client Photo</p>
            </div>
          </div>
        </div>

        {/* Additional Client Photos - Right */}
        <div className="lg:col-span-1 space-y-6">
          {/* Top Photo */}
          <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-xl">👩</span>
              </div>
              <p className="text-xs">Client Photo</p>
            </div>
          </div>
          
          {/* Bottom Photo */}
          <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-xl">👨</span>
              </div>
              <p className="text-xs">Client Photo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
        <div className="bg-white p-6 rounded-2xl border border-gray-200">
          <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
          <div className="text-gray-600">Client Satisfaction</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200">
          <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
          <div className="text-gray-600">Projects Completed</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200">
          <div className="text-3xl font-bold text-red-500 mb-2">25+</div>
          <div className="text-gray-600">Happy Clients</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200">
          <div className="text-3xl font-bold text-red-500 mb-2">5+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
      </div>
    </Section>
  )
} 