import { Download, Phone, Mail, Facebook, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Section from '@/components/Section'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="pt-8 bg-gradient-to-br from-white to-red-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Image */}
          <div className="relative">
            {/* Semi-circular Image */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-l-full flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-gray-500">
                  <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <p className="text-sm">Profile Photo</p>
                  <p className="text-xs">Replace with actual photo</p>
                </div>
              </div>
              
              {/* Red Border Line */}
              <div className="absolute right-0 top-0 w-1 h-full bg-red-500" />
            </div>

            {/* Red Chevron Arrows */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 border-r-2 border-b-2 border-red-500 rounded-br-lg transform rotate-45"
                />
              ))}
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="space-y-12">
            {/* About Me Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-red-500">About Me</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-red-500 leading-tight">
                ABOUT
              </h1>
              <p className="text-lg text-gray-800 leading-relaxed">
                Xin chào! Tôi là Đoàn Phước Trường Hải, năm nay tôi 21 tuổi, sinh sống và làm việc tại Đà Nẵng, 
                hiện tôi đang làm Videographer và Graphic Designer.
              </p>
            </div>

            {/* Experiences Section */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-red-500 leading-tight">
                EXPERIENCES
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="pb-6 border-l-2 border-red-500 pl-6">
                    <h4 className="font-semibold text-gray-800">Present</h4>
                    <p className="text-sm text-gray-600">Freelancer</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="pb-6 border-l-2 border-red-500 pl-6">
                    <h4 className="font-semibold text-gray-800">2024 - Present</h4>
                    <p className="text-sm text-gray-600">CTV Media / FPT University Da Nang</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="pb-6 border-l-2 border-red-500 pl-6">
                    <h4 className="font-semibold text-gray-800">2023 - Present</h4>
                    <p className="text-sm text-gray-600">Video Editor & Director / Tiktok FPT University Da Nang</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="pb-6 border-l-2 border-red-500 pl-6">
                    <h4 className="font-semibold text-gray-800">2023 - 2024</h4>
                    <p className="text-sm text-gray-600">Media Leader / CLB FU-DEVER, Media Leader / CLB FGD, Media Leader / CLB Rhythm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom Sections */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-red-500 leading-tight">
              CONTACT
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-800">036.460.5132</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-800">Truonghai.Work@Gmail.Com</span>
              </div>
                             <div className="flex items-center space-x-3">
                 <Globe className="w-5 h-5 text-red-500" />
                 <span className="text-gray-800">Behance.Com/Crison</span>
               </div>
              <div className="flex items-center space-x-3">
                <Facebook className="w-5 h-5 text-red-500" />
                <span className="text-gray-800">Facebook.Com/Hiiicris3</span>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-red-500 leading-tight">
              EDUCATION
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">2022 - Present</h4>
                <p className="text-gray-600">FPT University Da Nang</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-red-500 leading-tight">
              SKILLS
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {[
                { name: 'CapCut', icon: '🎬' },
                { name: 'Ps', icon: '🖼️' },
                { name: 'Lr', icon: '📸' },
                { name: 'Ae', icon: '✨' },
                { name: 'Pr', icon: '🎥' },
                { name: 'Ai', icon: '🎨' },
                { name: 'Link', icon: '🔗' },
                { name: 'Star', icon: '⭐' }
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="w-16 h-16 bg-black border-2 border-white rounded-lg flex flex-col items-center justify-center text-white"
                >
                  <div className="text-lg">{skill.icon}</div>
                  <div className="text-xs font-bold">{skill.name}</div>
                </div>
              ))}
            </div>
            
            {/* Download CV Button */}
            <div className="pt-6">
              <Button variant="outline" size="lg" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4">
                <Download className="w-5 h-5 mr-2 text-red-500" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
} 