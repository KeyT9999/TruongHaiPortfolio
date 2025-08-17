import { Link } from 'react-router-dom'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardHeader className="p-0">
        <Link to={`/projects/${project.slug}`}>
          <div className="relative overflow-hidden">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>
      </CardHeader>
      
      <CardContent className="p-6">
        <Link to={`/projects/${project.slug}`}>
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </Link>
        <CardDescription className="text-muted-foreground mb-4">
          {project.shortDesc}
        </CardDescription>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{project.year}</span>
          </div>
          
          <div className="flex space-x-2">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="View demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="View repository"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
} 