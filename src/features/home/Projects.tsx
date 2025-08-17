import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { projects } from '@/data/projects'
import Section from '@/components/Section'

const featuredProjects = [
  {
    id: 1,
    title: 'TUỔI THƠ DỮ DỘI',
    subtitle: 'Vân An - Cóc Viết',
    category: 'VIDEO',
    season: 'Summer 2025',
    image: '/assets/projects/tuoi-tho-du-doi.jpg',
    description: 'Phùng Quán - NGUYỄN THÙY VAN AN'
  },
  {
    id: 2,
    title: 'FPT UNIVERSITY DA NANG',
    subtitle: 'Campus Photography',
    category: 'PHOTO',
    season: 'Spring 2025',
    image: '/assets/projects/fpt-danang.jpg',
    description: 'Modern university campus architecture'
  },
  {
    id: 3,
    title: 'ADIDAS ANIMATION',
    subtitle: 'Jungle Adventure',
    category: 'DESIGN',
    season: 'Summer 2025',
    image: '/assets/projects/adidas-animation.jpg',
    description: 'Dynamic jungle scene with wildlife'
  }
]

export default function Projects() {
  return (
    <Section id="projects" className="bg-white py-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className="text-lg text-red-500">My Portfolio</span>
          <div className="w-16 h-0.5 bg-red-500 rounded-full" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Review My Latest <span className="text-red-500">Projects</span>
        </h2>
      </div>

      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
        <Button 
          variant="outline" 
          size="lg" 
          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3"
        >
          All
        </Button>
        <span className="text-gray-800 font-medium px-4">Videography</span>
        <span className="text-gray-800 font-medium px-4">Video Editing</span>
        <span className="text-gray-800 font-medium px-4">Photography</span>
        <span className="text-gray-800 font-medium px-4">Design</span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-gray-200 overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{project.title}</span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="space-y-3">
                {/* Category and Title */}
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-red-500">{project.category}</div>
                  <CardTitle className="text-lg font-bold text-gray-800 leading-tight">
                    {project.title}
                  </CardTitle>
                  <div className="text-sm text-gray-600">{project.subtitle}</div>
                </div>
                
                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <div className="w-full">
                <div className="text-sm text-gray-500">
                  {project.season}
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button asChild size="lg" className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
          <Link to="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Section>
  )
} 