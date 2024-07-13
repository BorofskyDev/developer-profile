import Hero from '@/components/sections/main/hero/Hero'
import About from '@/components/sections/main/about/About'
import Skills from '@/components/sections/main/skills/Skills'
import Projects from '@/components/sections/main/projects/Projects'

export const metadata = {
  title: 'Henry Chevy | Data Analyst & Data Developer',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  )
}
