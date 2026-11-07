import Asset from '../../components/ui/Asset'
import Container from '../../components/ui/Container'

export default function BelongingBanner() {
  return (
    <section className="bg-leaf-tint py-16">
      <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-16">
        <Asset
          name="star-green"
          alt=""
          className="size-[100px] shrink-0"
          fallback={<span className="text-7xl text-g-green" aria-hidden="true">✦</span>}
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl leading-[1.12] font-bold md:text-[40px]">
            Different majors. Different starting points.
            <br />A place for all of them.
          </h2>
          <p className="text-lg leading-[1.55] text-body">
            You don’t have to be the most experienced person in the room. Curiosity, kindness, and
            a willingness to learn are a good place to start.
          </p>
        </div>
      </Container>
    </section>
  )
}