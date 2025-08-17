import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Section from '@/components/Section'

export default function About() {
  return (
    <Section id="about" className="bg-white py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Section - Image and Experience */}
        <div className="relative">
          {/* Experience Badge */}
          <div className="absolute -top-8 -left-8 z-10">
            <div className="bg-red-500 text-white px-6 py-4 rounded-2xl text-center">
              <div className="text-3xl font-bold">3+</div>
              <div className="text-sm">Years Of Experience</div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-gray-500">
                <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <p className="text-sm">Person working on laptop</p>
                <p className="text-xs">Replace with actual photo</p>
              </div>
            </div>
          </div>

          {/* Decorative Arrows */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 space-y-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 border-r-2 border-b-2 border-red-500 rounded-br-lg transform rotate-45"
              />
            ))}
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold text-red-500">About Me</h3>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Main Quote */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              I Don't Just Shoot Scenes— I Design How They
            </h2>
            <div className="space-y-2">
              <h3 className="text-3xl lg:text-4xl font-bold text-red-500">
                Breathe, Move,
              </h3>
              <h3 className="text-3xl lg:text-4xl font-bold text-red-500">
                And Resonate Through The Lens.
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            I Specialize In Visual Storytelling Through Cinematography—Shaping Narrative, 
            Tone, And Emotion Through Light, Lens, And Movement.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-2 h-2 text-white" />
                </div>
                <span className="font-semibold text-gray-800">Cinematography</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-2 h-2 text-white" />
                </div>
                <span className="font-semibold text-gray-800">Lighting Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-2 h-2 text-white" />
                </div>
                <span className="font-semibold text-gray-800">Camera Movement</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-2 h-2 text-white" />
                </div>
                <span className="font-semibold text-gray-800">Visual Storytelling</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-2 h-2 text-white" />
                </div>
                <span className="font-semibold text-gray-800">Mood & Atmosphere</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-2 h-2 text-white" />
                </div>
                <span className="font-semibold text-gray-800">Collaboration & Direction</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button variant="outline" size="lg" className="group border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4">
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <ArrowRight className="w-2 h-2 text-white" />
              </div>
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
} 