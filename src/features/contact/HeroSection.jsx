import Container from '../../components/ui/Container'
import Eyebrow from '../../components/ui/Eyebrow'

export default function HeroSection() {
  return (
    <section className="pt-12 pb-10 lg:pt-[72px] lg:pb-14">
      <Container className="flex flex-col gap-6">
        <Eyebrow>Contact • Let’s connect</Eyebrow>
        <h1 className="text-5xl leading-[1.08] font-bold md:text-6xl lg:text-[72px]">
          Good things start with <span className="text-brand-text">hello.</span>
        </h1>
        <p className="max-w-[770px] text-lg leading-[1.55] text-body lg:text-[22px]">
          A question, a collaboration, or an idea for the community? Tell us what’s on your mind.
        </p>
      </Container>
    </section>
  )
}