import { Star } from 'lucide-react'
import Section from '@/components/Section'

const clientFeedback = [
  {
    id: 1,
    name: 'Lê Nho Thiên Phú',
    rating: 4,
    feedback: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Integer Nec Odio. Praesent Libero. Sed Cursus Ante Dapibus Diam. Sed Nisi. Nulla Quis Sem At Nibh Elementum Imperdiet. Duis Sagittis Ipsum. Nullam Rutrum Placerat Urna, Sit Amet Efficitur Nulla Efficitur Ut. Donec Nec Urna Eu Justo Fermentum Consequat.',
    image: '/assets/clients/thien-phu.jpg',
    position: 'Client'
  },
  {
    id: 2,
    name: 'Nguyễn Thùy Vân An',
    rating: 5,
    feedback: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Integer Nec Odio. Praesent Libero. Sed Cursus Ante Dapibus Diam. Sed Nisi. Nulla Quis Sem At Nibh Elementum Imperdiet. Duis Sagittis Ipsum. Nullam Rutrum Placerat Urna, Sit Amet Efficitur Nulla Efficitur Ut. Donec Nec Urna Eu Justo Fermentum Consequat.',
    image: '/assets/clients/van-an.jpg',
    position: 'Client'
  },
  {
    id: 3,
    name: 'Mr. Nghia Nguyen',
    rating: 4,
    feedback: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Integer Nec Odio. Praesent Libero. Sed Cursus Ante Dapibus Diam. Sed Nisi. Nulla Quis Sem At Nibh Elementum Imperdiet. Duis Sagittis Ipsum. Nullam Rutrum Placerat Urna, Sit Amet Efficitur Nulla Efficitur Ut. Donec Nec Urna Eu Justo Fermentum Consequat.',
    image: '/assets/clients/nghia-nguyen.jpg',
    position: 'Client'
  }
]

export default function ClientFeedback() {
  return (
    <Section className="bg-gradient-to-b from-pink-50 to-white py-20">
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
        {/* Left Section - Main Testimonial */}
        <div className="lg:col-span-1 space-y-6">
          {/* Large Quote Marks */}
          <div className="text-8xl text-gray-200 font-serif leading-none">
            "66
          </div>
          
          {/* Client Info */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-800">Lê Nho Thiên Phú</h3>
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
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Integer Nec Odio. 
            Praesent Libero. Sed Cursus Ante Dapibus Diam. Sed Nisi. Nulla Quis Sem 
            At Nibh Elementum Imperdiet. Duis Sagittis Ipsum. Nullam Rutrum Placerat 
            Urna, Sit Amet Efficitur Nulla Efficitur Ut. Donec Nec Urna Eu Justo 
            Fermentum Consequat.
          </p>
        </div>

        {/* Center Section - Main Client Photo */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative group">
            <div className="w-64 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-gray-500">
                <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👔</span>
                </div>
                <p className="text-sm">Lê Nho Thiên Phú</p>
                <p className="text-xs">Client Photo</p>
              </div>
            </div>
            
            {/* Hover Overlay with Rating & Feedback */}
            <div className="absolute inset-0 bg-black/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h4 className="text-xl font-bold mb-3">Lê Nho Thiên Phú</h4>
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed">
                  "Excellent work! Very professional and creative. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Additional Client Photos with Hover Effects */}
        <div className="lg:col-span-1 space-y-6">
          {/* Top Photo */}
          <div className="relative group">
            <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-xl">👩</span>
                </div>
                <p className="text-xs">Nguyễn Thùy Vân An</p>
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h4 className="text-lg font-bold mb-2">Nguyễn Thùy Vân An</h4>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-xs leading-relaxed">
                  "Amazing results! Very satisfied with the project."
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Photo */}
          <div className="relative group">
            <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-xl">👨</span>
                </div>
                <p className="text-xs">Mr. Nghia Nguyen</p>
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h4 className="text-lg font-bold mb-2">Mr. Nghia Nguyen</h4>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-xs leading-relaxed">
                  "Great communication and quality work!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
} 