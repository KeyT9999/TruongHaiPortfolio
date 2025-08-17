import { getSkillsByCategory, getTopSkills } from '@/data/skills'
import Section from '@/components/Section'

export default function Skills() {
  const topSkills = getTopSkills(6)
  const frontendSkills = getSkillsByCategory('frontend')
  const backendSkills = getSkillsByCategory('backend')
  const designSkills = getSkillsByCategory('design')

  const expertAreas = [
    { name: 'Photography', percentage: 95, icon: '📷' },
    { name: 'Videography', percentage: 85, icon: '🎥' },
    { name: 'Video Editing', percentage: 90, icon: '🎬' },
    { name: 'Graphics Design', percentage: 88, icon: '🎨' }
  ]

  return (
    <Section id="skills" className="bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          My Expert <span className="text-red-500">Areas</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto italic">
          "Whether Framing Within Templates Or Starting With A Blank Slate, Bring Your Vision To Life With Complete Creative Control And A World Of Cinematic Resources At Your Fingertips."
        </p>
      </div>

      {/* Expert Areas Cards */}
      <div className="relative">
        {/* Navigation Arrows */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12">
          <div className="w-8 h-8 border-l-2 border-b-2 border-gray-400 transform rotate-45 cursor-pointer hover:border-gray-600 transition-colors" />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12">
          <div className="w-8 h-8 border-r-2 border-t-2 border-gray-400 transform rotate-45 cursor-pointer hover:border-gray-600 transition-colors" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertAreas.map((area, index) => (
            <div
              key={area.name}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-pink-200 rounded-full" />
              <div className="absolute top-4 right-4 w-3 h-3 bg-pink-200 transform rotate-45" />
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-pink-200 transform rotate-45" />
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-200" />

              {/* Content */}
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className="text-4xl mb-4">{area.icon}</div>
                
                {/* Title with Percentage */}
                <h3 className="text-xl font-bold text-gray-800">
                  {area.name} ({area.percentage}%)
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                  Praesent libero. Sed cursus ante dapibus diam.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
} 