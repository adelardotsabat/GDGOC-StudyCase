import Asset from '../../components/ui/Asset'
import Container from '../../components/ui/Container'

export default function CommitmentBanner() {
  return (
    <section className="bg-sun-tint py-14">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-16">
        <Asset
          name="star-yellow"
          alt=""
          className="size-[72px] shrink-0"
          fallback={<span className="text-6xl text-g-yellow" aria-hidden="true">✦</span>}
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl leading-[1.12] font-bold md:text-[32px]">
            A space to learn. A responsibility to care.
          </h2>
          <p className="max-w-4xl text-lg leading-[1.55] text-body">
            We want every conversation and learning experience to be respectful, inclusive, and
            constructive. Be kind, give credit, and make room for people who are just getting
            started.
          </p>
        </div>
      </Container>
    </section>
  )
}