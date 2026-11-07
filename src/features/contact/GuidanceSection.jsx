import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import Eyebrow from '../../components/ui/Eyebrow'
import { tips } from './content'

export default function GuidanceSection() {
  return (
    <section className="border-t border-line py-14 lg:py-[72px]">
      <Container className="grid gap-10 lg:grid-cols-[420px_1fr] lg:gap-20">
        <div className="flex flex-col items-start gap-5">
          <Eyebrow>A little guidance</Eyebrow>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-[40px]">
            Help us understand your idea.
          </h2>
          <Button to="/overview" variant="link">
            Explore the programs first
          </Button>
        </div>

        <ul className="flex flex-col gap-[26px]">
          {tips.map((tip) => (
            <li key={tip.id} className="flex flex-col gap-2.5 border-b border-line pb-[26px]">
              <h3 className="text-[21px] leading-[1.12] font-bold">{tip.title}</h3>
              <p className="leading-[1.55] text-body">{tip.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}