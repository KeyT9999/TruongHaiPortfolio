import Hero from '@/features/home/Hero'
import About from '@/features/home/About'
import Skills from '@/features/home/Skills'
import Projects from '@/features/home/Projects'
import ClientFeedback from '@/features/home/ClientFeedback'
import Blog from '@/features/home/Blog'
import Testimonials from '@/features/home/Testimonials'
import ContactCta from '@/features/home/ContactCta'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full screen with navigation */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Preview */}
      <Projects />
      
      {/* Client Feedback Section */}
      <ClientFeedback />
      
      {/* Blog Section */}
      <Blog />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Contact CTA */}
      <ContactCta />
    </div>
  )
} 