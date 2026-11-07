import Container from '../../components/ui/Container'
import { outcomes } from './content'

export default function OutcomeTable() {
  return (
    <section className="pb-20">
      <Container>
        <h2 className="text-3xl font-bold leading-[1.12] lg:text-4xl">
          From an interest to something you can show.
        </h2>

        <div className="mt-8 overflow-hidden rounded-table border border-line">
          <div className="hidden grid-cols-[250px_448px_1fr] gap-7 border-b border-line bg-surface px-6 py-4 text-[13px] font-medium text-body md:grid">
            <span>Pathway</span>
            <span>What you can practice</span>
            <span>A possible outcome</span>
          </div>

          <div className="divide-y divide-line">
            {outcomes.map((row) => (
              <div
                key={row.pathway}
                className="grid gap-2 px-6 py-6 md:grid-cols-[250px_448px_1fr] md:gap-7"
              >
                <p className="text-lg font-medium">{row.pathway}</p>
                <p className="leading-[1.55] text-body">
                  <span className="mr-2 text-[13px] font-medium md:hidden">Practice:</span>
                  {row.practice}
                </p>
                <p className="leading-[1.55] text-body">
                  <span className="mr-2 text-[13px] font-medium md:hidden">Outcome:</span>
                  {row.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[13px] text-body">
          Illustrative learning outcomes. Topics and opportunities are shared through community updates.
        </p>
      </Container>
    </section>
  )
}