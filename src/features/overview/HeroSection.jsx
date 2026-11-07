import Asset from '../../components/ui/Asset'
import Container from '../../components/ui/Container'
import Eyebrow from '../../components/ui/Eyebrow'

export default function HeroSection() {
  return (
    <section className="overflow-x-clip pt-16 pb-14">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>Overview • Programs &amp; learning tracks</Eyebrow>
          <h1 className="text-5xl font-bold leading-[1.08] md:text-6xl lg:text-[72px]">
            Find your spark.
            <br />
            <span className="text-brand-text">Build your own path.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-[1.55] text-body lg:text-[21px]">
            Explore how research, creativity, and development connect. Start with one interest.
            Grow through practice and the people around you.
          </p>
        </div>
        {/* Frame artwork Figma 264x280. PNG @2x (451x496) punya padding glow, jadi dipasang
            absolut dengan offset, bukan di-resize. */}
        <div className="relative mx-auto h-[280px] w-[264px] shrink-0">
          <Asset
            name="hero-overview"
            alt=""
            className="pointer-events-none absolute -left-[157px] -top-[14px] h-auto w-[451px] max-w-none"
          />
        </div>
      </Container>
    </section>
  )
}