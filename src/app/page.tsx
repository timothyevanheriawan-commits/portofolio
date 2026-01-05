import { Container } from '@/components/layout/container'
import { Hero } from '@/components/home/hero'
import { SelectedProjects } from '@/components/home/selected-projects'
import { SkillsOverview } from '@/components/home/skills-overview'
import { ContactSection } from '@/components/home/contact-section'

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <SelectedProjects />
      <SkillsOverview />
      <ContactSection />
    </Container>
  )
}