import CtaPanel from '../components/sections/CtaPanel'
import HeroSection from '../features/about/HeroSection'
import WhySection from '../features/about/WhySection'
import ValuesSection from '../features/about/ValuesSection'
import RolesSection from '../features/about/RolesSection'
import CommitmentBanner from '../features/about/CommitmentBanner'

export default function About() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ValuesSection />
      <RolesSection />
      <CommitmentBanner />
      <CtaPanel />
    </>
  )
}