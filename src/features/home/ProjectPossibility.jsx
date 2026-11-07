import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import Eyebrow from '../../components/ui/Eyebrow'
import { projectTiles } from './content'

export default function ProjectPossibility() {
  return (
    <section className="py-[88px]">
      <Container className="grid items-center gap-10 lg:grid-cols-[592px_1fr] lg:gap-16">
        <div className="rounded-panel bg-sun-tint p-6 md:p-10">
          <div className="flex items-center justify-between text-[11px] font-medium text-body uppercase">
            <span>Idea → Prototype</span>
            <span className="text-sm text-brand-text" aria-hidden="true">
              &lt;/&gt;
            </span>
          </div>

          <div className="mt-5 rounded-2xl border border-line bg-white p-5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-g-red" />
              <span className="size-2 rounded-full bg-g-yellow" />
              <span className="size-2 rounded-full bg-g-green" />
            </div>
            <h3 className="mt-5 text-[32px] leading-[1.12] font-bold">
              A little less friction.
              <br />A better campus day.
            </h3>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {projectTiles.map((t) => (
                <span key={t.label} className={`rounded-xl px-4 py-3 text-[13px] font-bold ${t.tint}`}>
                  {t.label}
                </span>
              ))}
            </div>
            <p className="mt-5 text-[13px] leading-[1.55] text-body">
              Start with a student need. Build a small, useful solution.
            </p>
          </div>

          <p className="mt-6 text-[11px] text-body uppercase">
            Example project brief • Not a launched product
          </p>
        </div>

        <div className="flex flex-col items-start gap-6">
          <Eyebrow>Build something that matters</Eyebrow>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Your next project could start on campus.
          </h2>
          <p className="text-lg leading-[1.55] text-body">
            What if finding a study partner, sharing resources, or navigating campus felt easier?
            Small, familiar problems can be the beginning of meaningful work.
          </p>
          <p className="text-lg leading-[1.55] text-body">
            Bring research, design, and development together. Try an idea, get feedback, and make
            the next version better.
          </p>
          <Button to="/overview" variant="link">
            Explore project-based learning
          </Button>
        </div>
      </Container>
    </section>
  )
}