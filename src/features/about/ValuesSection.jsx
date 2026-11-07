import { getValues } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import Asset from '../../components/ui/Asset'
import Container from '../../components/ui/Container'
import DataState from '../../components/ui/DataState'
import SectionHeader from '../../components/ui/SectionHeader'
import Skeleton from '../../components/ui/Skeleton'

// Warna aksen mengikuti token Figma, dipetakan lewat id dari API
const accent = {
  'stay-curious': 'bg-brand',
  'make-room': 'bg-g-red',
  'learn-by-building': 'bg-g-yellow',
  'give-something-back': 'bg-g-green',
}

const iconAsset = {
  'stay-curious': 'home-icon-study',
  'make-room': 'home-icon-share',
  'learn-by-building': 'home-icon-hands-on',
  'give-something-back': 'value-give-something-back',
}

function ValuesSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((n) => (
        <Skeleton key={n} className="h-56" />
      ))}
    </div>
  )
}

export default function ValuesSection() {
  const { data, loading, error, retry } = useFetch(getValues)

  return (
    <section className="pt-[88px] pb-12">
      <Container>
        <SectionHeader
          className="max-w-4xl"
          label="What guides us"
          title="Good technology starts with good company."
        />

        <div className="mt-10">
          <DataState
            loading={loading}
            error={error}
            data={data}
            onRetry={retry}
            skeleton={<ValuesSkeleton />}
            emptyMessage="Our values are not available right now."
          >
            {(values) => (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((v) => (
                  <article
                    key={v.id}
                    className="flex flex-col gap-5 rounded-card border border-line p-7"
                  >
                    <span
                      className={`h-1 w-9 rounded-[2px] ${accent[v.id] ?? 'bg-brand'}`}
                      aria-hidden="true"
                    />
                    <Asset
                      name={iconAsset[v.id] ?? `value-${v.id}`}
                      alt=""
                      className="size-6"
                      fallback={<span className="text-2xl" aria-hidden="true">{v.icon}</span>}
                    />
                    <h3 className="text-2xl leading-[1.12] font-bold">{v.title}</h3>
                    <p className="leading-[1.55] text-body">{v.description}</p>
                  </article>
                ))}
              </div>
            )}
          </DataState>
        </div>
      </Container>
    </section>
  )
}