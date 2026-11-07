import Container from '../../components/ui/Container'
import Eyebrow from '../../components/ui/Eyebrow'

export default function WhySection() {
  return (
    <section className="bg-surface py-[88px]">
      <Container className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-24">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>Why we come together</Eyebrow>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            A bridge from <span className="text-brand-text">“I wonder”</span> to{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(180deg, #1967d2 58.65%, #6facff 100%)' }}
            >
              “I made this.”
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-xl leading-[1.55] text-title lg:text-2xl">
            Learning feels different when there’s someone to exchange ideas with, a problem you
            care about, and the space to give it a try.
          </p>
          <p className="text-lg leading-[1.55] text-body">
            That’s the spirit of Google Developer Groups on Campus at UGM. We create room for
            students to explore technology, develop practical skills, and learn from one another.
          </p>
          <p className="text-lg leading-[1.55] text-body">
            Our campus is the starting point. The questions we ask and the things we build can
            reach beyond it.
          </p>
        </div>
      </Container>
    </section>
  )
}