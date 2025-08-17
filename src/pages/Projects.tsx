import { useState, useMemo } from 'react'
import { Search, ChevronDown, Filter, Eye, Download } from 'lucide-react'
import { projects, getAllTags } from '@/data/projects'
import { ProjectCard } from '@/features/project/ProjectCard'
import { Button } from '@/components/ui/Button'

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedApplications, setSelectedApplications] = useState<string[]>([])
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(true)
  const allTags = getAllTags()

  const applications = [
    'Adobe Photoshop',
    'Adobe Lightroom Classic', 
    'Adobe Illustrator',
    'Capcut',
    'Figma',
    'Davinci Resolve',
    'Adobe Premiere',
    'Adobe After Effect'
  ]

  const projectTypes = [
    'Personal Project',
    'Freelance Project', 
    'Assignment',
    'Others'
  ]

  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(project =>
        selectedTags.some(tag => project.tags.includes(tag))
      )
    }

    // Filter by applications (if project has application info)
    if (selectedApplications.length > 0) {
      filtered = filtered.filter(project =>
        selectedApplications.some(app => 
          project.tags.some(tag => 
            tag.toLowerCase().includes(app.toLowerCase().replace('adobe ', ''))
          )
        )
      )
    }

    // Filter by project types
    if (selectedProjectTypes.length > 0) {
      // This would need to be added to project data structure
      // For now, we'll skip this filter
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }, [selectedTags, selectedApplications, selectedProjectTypes, searchQuery])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const toggleApplication = (app: string) => {
    setSelectedApplications(prev =>
      prev.includes(app)
        ? prev.filter(a => a !== app)
        : [...prev, app]
    )
  }

  const toggleProjectType = (type: string) => {
    setSelectedProjectTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const clearAllFilters = () => {
    setSelectedTags([])
    setSelectedApplications([])
    setSelectedProjectTypes([])
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen">
      {/* Red Header Section */}
      <section className="bg-red-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            {/* Decorative Elements */}
            <div className="absolute top-16 left-16 w-6 h-6 border-2 border-dashed border-white rounded-full opacity-60" />
            <div className="absolute top-20 right-32 w-8 h-8 border-r-4 border-b-4 border-white rounded-bl-full opacity-60" />
            
            <h1 className="text-6xl lg:text-7xl font-black mb-4">
              MY PROJECT
            </h1>
            <p className="text-xl opacity-90">
              Explore my creative portfolio and latest works
            </p>
          </div>
        </div>
        
        {/* Wavy Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              fill="#fdf2f8"
            />
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.71,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              fill="#fdf2f8"
            />
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="#fdf2f8"
            />
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <div className="flex items-center bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  {/* Dropdown */}
                  <div className="flex items-center space-x-3 border-r border-gray-300 pr-4">
                    <span className="text-gray-700 font-medium">All Items</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  
                  {/* Search Input */}
                  <div className="flex-1 flex items-center pl-4">
                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Sort by:</span>
                <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-700">
                  <option>Popular</option>
                  <option>Latest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-gray-600">
              My Project {'>>'} All Items
            </div>
            <div className="text-gray-600">
              {filteredProjects.length} projects found
            </div>
          </div>

          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            {showFilters && (
              <div className="w-64 flex-shrink-0">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  {/* Hide Filters Button */}
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6 w-full"
                  >
                    <Filter className="w-4 h-4" />
                    <span>Hide Filters</span>
                  </button>

                  {/* Categories Filter */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                    <div className="space-y-3">
                      {allTags.map((tag) => (
                        <label key={tag} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => toggleTag(tag)}
                            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                          />
                          <span className="text-gray-700">{tag}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Application Used Filter */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Used</h3>
                    <div className="space-y-3">
                      {applications.map((app) => (
                        <label key={app} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedApplications.includes(app)}
                            onChange={() => toggleApplication(app)}
                            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                          />
                          <span className="text-gray-700">{app}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Type of Project Filter */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Type of Project</h3>
                    <div className="space-y-3">
                      {projectTypes.map((type) => (
                        <label key={type} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedProjectTypes.includes(type)}
                            onChange={() => toggleProjectType(type)}
                            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                          />
                          <span className="text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Clear Filters Button */}
                  {(selectedTags.length > 0 || selectedApplications.length > 0 || selectedProjectTypes.length > 0) && (
                    <Button
                      onClick={clearAllFilters}
                      variant="outline"
                      size="sm"
                      className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      Clear All Filters
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Main Content - Project Grid */}
            <div className="flex-1">
              {/* Show Filters Button (when hidden) */}
              {!showFilters && (
                <div className="mb-6">
                  <Button
                    onClick={() => setShowFilters(true)}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Show Filters
                  </Button>
                </div>
              )}

              {/* Projects Grid */}
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <div key={project.slug} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">{project.title}</span>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-4">
                            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                              <Eye className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                              <Download className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-4">
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-red-500 uppercase tracking-wide">
                            {project.tags[0] || 'Project'}
                          </div>
                          <h3 className="font-bold text-gray-800 text-lg leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {project.shortDesc}
                          </p>
                        </div>

                        {/* Project Meta */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{project.year}</span>
                            <div className="flex space-x-2">
                              {project.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search terms</p>
                  <Button
                    onClick={clearAllFilters}
                    variant="outline"
                    className="mt-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 