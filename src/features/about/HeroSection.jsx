import Asset from '../../components/ui/Asset'
import Container from '../../components/ui/Container'
import Eyebrow from '../../components/ui/Eyebrow'

export default function HeroSection() {
  return (
    <section className="py-12 lg:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_464px] lg:gap-16">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>About GDGoC UGM</Eyebrow>
          <h1 className="text-5xl leading-[1.08] font-bold md:text-6xl lg:text-[72px]">
            Built by students.
            <br />
            <span className="text-brand-text">For what’s next.</span>
          </h1>
          <p className="max-w-[720px] text-lg leading-[1.55] text-body lg:text-[22px]">
            We’re a community of learners and makers at Universitas Gadjah Mada, connected by
            curiosity and the belief that technology can do good.
          </p>
          <p className="text-xs text-body uppercase">Universitas Gadjah Mada • 2026/2027</p>
        </div>

        <div className="relative mx-auto aspect-[464/400] w-full max-w-[464px] overflow-hidden rounded-panel bg-brand-tint">
          <Asset name="hero-about" alt="" className="absolute inset-0 size-full object-cover" />
        </div>
      </Container>
    </section>
  )
}