import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Section from '@/components/Section'

const blogPosts = [
  {
    id: 1,
    title: 'Những khoảnh khắc đáng nhớ tại 7DE Huế',
    domain: 'crison.com',
    image: '/assets/blog/hue-7de.jpg',
    category: 'Travel'
  },
  {
    id: 2,
    title: 'Hành trình lao động cùng Thịnh Suy',
    domain: 'crison.com',
    image: '/assets/blog/thinh-suy.jpg',
    category: 'Work'
  },
  {
    id: 3,
    title: 'Trải nghiệm ẩm thực tại Huế',
    domain: 'crison.com',
    image: '/assets/blog/hue-food.jpg',
    category: 'Food'
  },
  {
    id: 4,
    title: 'Khám phá văn hóa miền Trung',
    domain: 'crison.com',
    image: '/assets/blog/culture.jpg',
    category: 'Culture'
  }
]

export default function Blog() {
  return (
    <Section id="blog" className="bg-white py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Section - Header */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Blog <span className="text-red-500">About</span> Truong Hai
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <Button variant="outline" size="lg" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg">
            View All Blog
          </Button>
        </div>

        {/* Right Section - Blog Grid */}
        <div className="grid grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-gray-200 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Blog Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <div className="text-xs text-gray-500 mb-2 font-mono">{post.domain}</div>
                <CardTitle className="text-sm font-semibold text-gray-800 mb-3 leading-tight">
                  {post.title}
                </CardTitle>
                
                {/* Red Arrow Icon */}
                <div className="flex justify-end">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
} 