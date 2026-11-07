import CtaPanel from '../components/sections/CtaPanel'
import HeroSection from '../features/overview/HeroSection'
import SectionNav from '../features/overview/SectionNav'
import TracksSection from '../features/overview/TracksSection'
import OutcomeTable from '../features/overview/OutcomeTable'
import FormatsSection from '../features/overview/FormatsSection'
import JourneySection from '../features/overview/JourneySection'
import StartSection from '../features/overview/StartSection'

export default function Overview() {
  return (
    <>
      <HeroSection />
      <SectionNav />
      <TracksSection />
      <OutcomeTable />
      <FormatsSection />
      <JourneySection />
      <StartSection />
      <CtaPanel />
    </>
  )
}