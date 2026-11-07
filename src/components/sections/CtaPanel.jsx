import Button from '../ui/Button'
import Container from '../ui/Container'
import Eyebrow from '../ui/Eyebrow'

export default function CtaPanel() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col gap-8 rounded-panel bg-brand-tint p-6 sm:p-8 md:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-xl flex-col gap-3 md:gap-[18px]">
            <Eyebrow>Your next chapter</Eyebrow>
            <h2 className="text-3xl font-bold leading-[1.12] md:text-4xl lg:text-[44px]">
              Bring your curiosity.
              <br />
              We’ll build from there.
            </h2>
            <p className="text-base leading-[1.55] text-body md:text-lg">
              Find a learning track, meet a collaborator, or start a conversation.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 lg:pr-8">
            <Button to="/overview">Explore the overview</Button>
            <Button to="/contact" variant="link">
              Talk to the community
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}