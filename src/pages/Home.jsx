import CtaPanel from '../components/sections/CtaPanel'
import HeroSection from '../features/home/HeroSection'
import PromiseStrip from '../features/home/PromiseStrip'
import CommunityIntro from '../features/home/CommunityIntro'
import TracksPreview from '../features/home/TracksPreview'
import FormatsPreview from '../features/home/FormatsPreview'
import ProjectPossibility from '../features/home/ProjectPossibility'
import GettingStarted from '../features/home/GettingStarted'
import BelongingBanner from '../features/home/BelongingBanner'
import FaqSection from '../features/home/FaqSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PromiseStrip />
      <CommunityIntro />
      <TracksPreview />
      <FormatsPreview />
      <ProjectPossibility />
      <GettingStarted />
      <BelongingBanner />
      <FaqSection />
      <CtaPanel />
    </>
  )
}