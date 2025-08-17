import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, Calendar, Tag, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { getProjectBySlug } from '@/data/projects'
import Section from '@/components/Section'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug || '')

  if (!project) {
    return (
      <Section className="pt-8 text-center">
        <div className="py-16">
          <h1 className="heading-1 mb-4">Project Not Found</h1>
          <p className="body-large mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </Section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-8">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Project Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="heading-1 mb-4">{project.title}</h1>
              <p className="body-large mb-6">{project.longDesc}</p>
            </div>

            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg border border-border">
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Project Gallery */}
            {project.gallery.length > 1 && (
              <div className="space-y-4">
                <h3 className="heading-3">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.slice(1).map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg border border-border">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 2}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Details Sidebar */}
          <div className="space-y-6">
            {/* Project Links */}
            {(project.links?.demo || project.links?.repo) && (
              <Card>
                <CardHeader>
                  <CardTitle>Project Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.links.demo && (
                    <Button asChild className="w-full justify-between">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.links.repo && (
                    <Button asChild variant="outline" className="w-full justify-between">
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                        <span>View Code</span>
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Project Details */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Year</div>
                    <div className="text-sm text-muted-foreground">{project.year}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Tag className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Technologies</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Responsive design for all devices</li>
                  <li>• Modern web technologies</li>
                  <li>• Performance optimized</li>
                  <li>• Accessibility compliant</li>
                  <li>• SEO friendly</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Interested in this project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss how we can work together on your next project.
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="heading-2">More Projects</h2>
          <p className="body-large">
            Check out some of my other work to see more examples of my skills and experience.
          </p>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
} 