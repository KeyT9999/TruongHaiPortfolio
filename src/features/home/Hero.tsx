import { Link } from 'react-router-dom'
import { ArrowRight, Download, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 via-pink-50 to-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dashed red arc above "HELLO I'M" */}
        <div className="absolute top-32 left-16 w-24 h-24 border-2 border-dashed border-red-500 rounded-full opacity-60" />
        
        {/* Red curved arrow pointing to the right */}
        <div className="absolute top-40 left-64 w-16 h-16 border-l-4 border-b-4 border-red-500 rounded-bl-full opacity-60" />
        
        {/* Red outlined diamond below text */}
        <div className="absolute top-96 left-20 w-8 h-8 border-2 border-red-500 transform rotate-45 opacity-60" />
        
        {/* Red outlined pentagon in top right */}
        <div className="absolute top-16 right-32 w-12 h-12 border-2 border-red-500 opacity-60">
          <div className="w-full h-full bg-transparent transform rotate-45" />
        </div>
        
        {/* Dot pattern background */}
        <div className="absolute right-0 top-0 w-96 h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-8 text-left">
            {/* Greeting */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-700 flex items-center gap-3">
                HELLO I'M
                <span className="text-3xl">👋</span>
              </h2>
            </div>

            {/* Name */}
            <h1 className="text-6xl lg:text-7xl font-black text-gray-800 leading-tight">
              TRUONG HAI
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 max-w-lg leading-relaxed">
              I focus on digital experiences through visual storytelling—making them intuitive, 
              emotionally engaging, and visually purposeful, like a well-composed frame that 
              speaks without words.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                How I Work
              </Button>
            </div>
          </div>

          {/* Right Section - Person Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Person Image Placeholder */}
              <div className="w-80 h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for the person image */}
                <div className="text-center text-gray-500">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <p className="text-sm">Person Image</p>
                  <p className="text-xs">Replace with actual photo</p>
                </div>
                
                {/* Camera prop placeholder */}
                <div className="absolute bottom-8 left-8 w-16 h-8 bg-green-800 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">📷</span>
                </div>
              </div>

              {/* Decorative curved line extending from camera */}
              <div className="absolute bottom-4 left-16 w-32 h-32 border-l-2 border-red-500 rounded-full opacity-60 transform -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 