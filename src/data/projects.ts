export type Project = {
  slug: string
  title: string
  shortDesc: string
  longDesc: string
  cover: string
  gallery: string[]
  tags: string[]
  year: number
  links?: {
    demo?: string
    repo?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    shortDesc: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration',
    longDesc: 'Built a comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, secure payment processing with Stripe, and an admin dashboard. The platform includes responsive design, real-time inventory updates, and comprehensive order management.',
    cover: '/assets/projects/ecommerce-cover.jpg',
    gallery: [
      '/assets/projects/ecommerce-1.jpg',
      '/assets/projects/ecommerce-2.jpg',
      '/assets/projects/ecommerce-3.jpg',
      '/assets/projects/ecommerce-4.jpg'
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'Stripe', 'MongoDB'],
    year: 2024,
    links: {
      demo: 'https://demo-ecommerce.example.com',
      repo: 'https://github.com/username/ecommerce-platform'
    }
  },
  {
    slug: 'task-management-app',
    title: 'Task Management Application',
    shortDesc: 'A collaborative task management tool with real-time updates and team features',
    longDesc: 'Developed a feature-rich task management application that enables teams to collaborate on projects efficiently. Features include real-time updates, drag-and-drop task organization, team collaboration tools, progress tracking, and comprehensive reporting dashboards.',
    cover: '/assets/projects/task-app-cover.jpg',
    gallery: [
      '/assets/projects/task-app-1.jpg',
      '/assets/projects/task-app-2.jpg',
      '/assets/projects/task-app-3.jpg'
    ],
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    year: 2024,
    links: {
      demo: 'https://task-app.example.com',
      repo: 'https://github.com/username/task-management-app'
    }
  },
  {
    slug: 'portfolio-website',
    title: 'Creative Portfolio Website',
    shortDesc: 'A modern, responsive portfolio website showcasing creative work and projects',
    longDesc: 'Designed and developed a stunning portfolio website that highlights creative work, projects, and professional experience. Features include smooth animations, responsive design, dark/light theme toggle, and optimized performance for excellent user experience.',
    cover: '/assets/projects/portfolio-cover.jpg',
    gallery: [
      '/assets/projects/portfolio-1.jpg',
      '/assets/projects/portfolio-2.jpg'
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    year: 2024,
    links: {
      demo: 'https://portfolio.example.com',
      repo: 'https://github.com/username/portfolio-website'
    }
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    shortDesc: 'A beautiful weather application with location-based forecasts and interactive maps',
    longDesc: 'Created an intuitive weather dashboard that provides current conditions, hourly forecasts, and 7-day predictions. Features include location-based weather data, interactive weather maps, customizable widgets, and push notifications for severe weather alerts.',
    cover: '/assets/projects/weather-cover.jpg',
    gallery: [
      '/assets/projects/weather-1.jpg',
      '/assets/projects/weather-2.jpg',
      '/assets/projects/weather-3.jpg'
    ],
    tags: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    year: 2023,
    links: {
      demo: 'https://weather.example.com',
      repo: 'https://github.com/username/weather-dashboard'
    }
  },
  {
    slug: 'social-media-app',
    title: 'Social Media Platform',
    shortDesc: 'A social networking application with real-time messaging and content sharing',
    longDesc: 'Built a comprehensive social media platform featuring user profiles, content sharing, real-time messaging, friend connections, and content discovery algorithms. The platform includes advanced privacy controls, content moderation tools, and analytics dashboards.',
    cover: '/assets/projects/social-cover.jpg',
    gallery: [
      '/assets/projects/social-1.jpg',
      '/assets/projects/social-2.jpg',
      '/assets/projects/social-3.jpg',
      '/assets/projects/social-4.jpg'
    ],
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    year: 2023,
    links: {
      demo: 'https://social.example.com',
      repo: 'https://github.com/username/social-media-app'
    }
  },
  {
    slug: 'fitness-tracker',
    title: 'Fitness Tracking Application',
    shortDesc: 'A comprehensive fitness tracking app with workout planning and progress analytics',
    longDesc: 'Developed a feature-rich fitness tracking application that helps users monitor workouts, track nutrition, and visualize progress over time. Features include workout planning, exercise library, progress charts, goal setting, and social sharing capabilities.',
    cover: '/assets/projects/fitness-cover.jpg',
    gallery: [
      '/assets/projects/fitness-1.jpg',
      '/assets/projects/fitness-2.jpg',
      '/assets/projects/fitness-3.jpg'
    ],
    tags: ['React Native', 'TypeScript', 'Firebase', 'Chart.js'],
    year: 2023,
    links: {
      demo: 'https://fitness.example.com',
      repo: 'https://github.com/username/fitness-tracker'
    }
  }
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter(project => project.tags.includes(tag))
}

export const getAllTags = (): string[] => {
  const tags = projects.flatMap(project => project.tags)
  return [...new Set(tags)].sort()
} 