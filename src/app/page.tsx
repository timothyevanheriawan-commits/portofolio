import { Container } from '@/components/layout/container'
import { Hero } from '@/components/home/hero'
import { SelectedProjects } from '@/components/home/selected-projects'
import { SkillsOverview } from '@/components/home/skills-overview'
import { ContactSection } from '@/components/home/contact-section'
import { PageTransition } from '@/components/ui/page-transition'
import { SectionDivider } from '@/components/ui/section-divider'
import { Marquee } from '@/components/ui/marquee'
import { Reveal } from '@/components/ui/reveal'

export default function HomePage() {
  return (
    <PageTransition>
      <Container>
        <Hero />
      </Container>

      <Marquee />

      <Container>
        <Reveal>
          <SectionDivider index="01" current="Intro" next="Selected Work" />
          <SelectedProjects />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionDivider index="02" current="Selected Work" next="Capabilities" />
          <SkillsOverview />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionDivider index="03" current="Capabilities" next="Contact" />
          <ContactSection />
        </Reveal>
      </Container>
    </PageTransition>
  )
}
