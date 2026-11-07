import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import Eyebrow from '../../components/ui/Eyebrow'

export default function StartSection() {
  return (
    <section id="start" className="scroll-mt-28 bg-sun-tint py-14">
      <Container className="grid gap-8 lg:grid-cols-[400px_1fr] lg:gap-24">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>Start where you are</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.12] lg:text-4xl">
            New to tech?
            <br />
            That’s a starting point, too.
          </h2>
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="text-lg leading-[1.55] text-body">
            You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re
            curious about. If you’re unsure, tell us what interests you and we can start a conversation.
          </p>
          <Button to="/contact" variant="link">
            Ask about getting started
          </Button>
        </div>
      </Container>
    </section>
  )
}