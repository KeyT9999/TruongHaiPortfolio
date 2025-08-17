import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/ThemeProvider'
import RootLayout from '@/layouts/RootLayout'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import ProjectDetail from '@/pages/ProjectDetail'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App 