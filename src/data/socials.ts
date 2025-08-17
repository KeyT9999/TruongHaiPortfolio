export type Social = {
  name: string
  url: string
  icon: string
  platform: 'github' | 'linkedin' | 'twitter' | 'dribbble' | 'behance' | 'instagram' | 'email'
}

export const socials: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/username',
    icon: 'github',
    platform: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: 'linkedin',
    platform: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/username',
    icon: 'twitter',
    platform: 'twitter'
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/username',
    icon: 'dribbble',
    platform: 'dribbble'
  },
  {
    name: 'Behance',
    url: 'https://behance.net/username',
    icon: 'behance',
    platform: 'behance'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/username',
    icon: 'instagram',
    platform: 'instagram'
  },
  {
    name: 'Email',
    url: 'mailto:hello@example.com',
    icon: 'mail',
    platform: 'email'
  }
]

export const getSocialByPlatform = (platform: Social['platform']): Social | undefined => {
  return socials.find(social => social.platform === platform)
} 