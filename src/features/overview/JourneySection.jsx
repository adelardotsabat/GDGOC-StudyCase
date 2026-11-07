import { getJourney } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import Container from '../../components/ui/Container'
import DataState from '../../components/ui/DataState'
import SectionHeader from '../../components/ui/SectionHeader'
import Skeleton from '../../components/ui/Skeleton'

function JourneySkeleton() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((n) => (
        <Skeleton key={n} className="h-40" />
      ))}
    </div>
  )
}

export default function JourneySection() {
  const { data, loading, error, retry } = useFetch(getJourney)

  return (
    <section id="journey" className="scroll-mt-28 py-20">
      <Container>
        <SectionHeader label="Progress, not perfection" title="A journey you can keep building on." />

        <div className="mt-10">
          <DataState
            loading={loading}
            error={error}
            data={data}
            onRetry={retry}
            skeleton={<JourneySkeleton />}
            emptyMessage="The learning journey is not available right now."
          >
            {(steps) => (
              <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[...steps]
                  .sort((a, b) => a.step - b.step)
                  .map((step) => (
                    <li key={step.id} className="flex flex-col gap-4">
                      <span className="text-[38px] font-bold text-brand-text">
                        {String(step.step).padStart(2, '0')}
                      </span>
                      <div className="border-t border-line pt-5">
                        <h3 className="text-[26px] font-bold leading-[1.12]">{step.title}</h3>
                        <p className="mt-3 leading-[1.55] text-body">{step.description}</p>
                      </div>
                    </li>
                  ))}
              </ol>
            )}
          </DataState>
        </div>
      </Container>
    </section>
  )
}