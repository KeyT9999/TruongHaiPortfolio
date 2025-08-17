import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Section from '@/components/Section'

export default function ContactCta() {
  return (
    <Section className="py-20">
      {/* Main CTA Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-50 to-pink-50 border border-red-100">
        {/* Background Image Placeholder */}
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">📷</span>
            </div>
            <p className="text-sm">Photographer Image</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 p-12">
          {/* Spacer for image */}
          <div className="lg:col-span-1" />
          
          {/* Text Content */}
          <div className="lg:col-span-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Have Any Projects In Mind?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get In Touch
            </p>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg"
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
} 