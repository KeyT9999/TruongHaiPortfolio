export type Skill = {
  name: string
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 'expert', icon: '⚛️' },
  { name: 'TypeScript', category: 'frontend', level: 'expert', icon: '🔷' },
  { name: 'JavaScript', category: 'frontend', level: 'expert', icon: '🟨' },
  { name: 'HTML5', category: 'frontend', level: 'expert', icon: '🌐' },
  { name: 'CSS3', category: 'frontend', level: 'expert', icon: '🎨' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'expert', icon: '🎯' },
  { name: 'Next.js', category: 'frontend', level: 'advanced', icon: '⚡' },
  { name: 'Vue.js', category: 'frontend', level: 'intermediate', icon: '💚' },
  { name: 'Sass/SCSS', category: 'frontend', level: 'advanced', icon: '💎' },
  { name: 'Framer Motion', category: 'frontend', level: 'advanced', icon: '🎬' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 'advanced', icon: '🟢' },
  { name: 'Express.js', category: 'backend', level: 'advanced', icon: '🚂' },
  { name: 'Python', category: 'backend', level: 'intermediate', icon: '🐍' },
  { name: 'PostgreSQL', category: 'backend', level: 'intermediate', icon: '🐘' },
  { name: 'MongoDB', category: 'backend', level: 'intermediate', icon: '🍃' },
  { name: 'Firebase', category: 'backend', level: 'advanced', icon: '🔥' },
  { name: 'GraphQL', category: 'backend', level: 'intermediate', icon: '🔷' },
  { name: 'REST APIs', category: 'backend', level: 'advanced', icon: '🌐' },

  // Design
  { name: 'Figma', category: 'design', level: 'advanced', icon: '🎨' },
  { name: 'Adobe XD', category: 'design', level: 'intermediate', icon: '✨' },
  { name: 'Sketch', category: 'design', level: 'intermediate', icon: '📱' },
  { name: 'UI/UX Design', category: 'design', level: 'advanced', icon: '🎯' },
  { name: 'Responsive Design', category: 'design', level: 'expert', icon: '📱' },
  { name: 'Design Systems', category: 'design', level: 'advanced', icon: '🎨' },

  // Tools
  { name: 'Git', category: 'tools', level: 'expert', icon: '📚' },
  { name: 'VS Code', category: 'tools', level: 'expert', icon: '💻' },
  { name: 'Webpack', category: 'tools', level: 'intermediate', icon: '📦' },
  { name: 'Vite', category: 'tools', level: 'advanced', icon: '⚡' },
  { name: 'Docker', category: 'tools', level: 'intermediate', icon: '🐳' },
  { name: 'Jest', category: 'tools', level: 'intermediate', icon: '🧪' },
  { name: 'Cypress', category: 'tools', level: 'intermediate', icon: '🌲' },

  // Other
  { name: 'Agile/Scrum', category: 'other', level: 'advanced', icon: '🔄' },
  { name: 'Project Management', category: 'other', level: 'advanced', icon: '📊' },
  { name: 'Team Leadership', category: 'other', level: 'intermediate', icon: '👥' },
  { name: 'Technical Writing', category: 'other', level: 'intermediate', icon: '✍️' }
]

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category)
}

export const getSkillsByLevel = (level: Skill['level']): Skill[] => {
  return skills.filter(skill => skill.level === level)
}

export const getTopSkills = (limit: number = 8): Skill[] => {
  const levelOrder = { expert: 4, advanced: 3, intermediate: 2, beginner: 1 }
  return skills
    .sort((a, b) => levelOrder[b.level] - levelOrder[a.level])
    .slice(0, limit)
} 