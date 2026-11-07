import { getFormats } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import Asset from '../../components/ui/Asset'
import Container from '../../components/ui/Container'
import DataState from '../../components/ui/DataState'
import SectionHeader from '../../components/ui/SectionHeader'
import Skeleton from '../../components/ui/Skeleton'
import { formatMeta, formatOrder } from './content'

const rank = (id) => {
  const i = formatOrder.indexOf(id)
  return i === -1 ? formatOrder.length : i
}

function FormatCard({ format }) {
  const meta = formatMeta[format.id] ?? { tint: 'bg-surface', bestFor: '' }

  return (
    <article className="flex gap-5 rounded-card bg-white p-7">
      <div className={`flex size-[52px] shrink-0 items-center justify-center rounded-[14px] ${meta.tint}`}>
        <Asset
          name={`format-${format.id}`}
          alt=""
          className="size-6"
          fallback={<span aria-hidden="true">{format.icon}</span>}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-[27px] font-bold leading-[1.12]">{format.name}</h3>
        <p className="leading-[1.55] text-body">{format.description}</p>
        {meta.bestFor && (
          <p className="text-[13px] font-medium text-brand-text">Best for • {meta.bestFor}</p>
        )}
      </div>
    </article>
  )
}

function FormatsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {[1, 2, 3, 4].map((n) => (
        <Skeleton key={n} className="h-44 bg-white" />
      ))}
    </div>
  )
}

export default function FormatsSection() {
  const { data, loading, error, retry } = useFetch(getFormats)

  return (
    <section id="formats" className="scroll-mt-28 bg-surface py-20">
      <Container>
        <SectionHeader
          label="Ways to learn"
          title={
            <>
              The format changes.
              <br />
              The curiosity stays.
            </>
          }
          description="Explore the kinds of experiences that help you move from understanding to doing."
        />

        <div className="mt-9">
          <DataState
            loading={loading}
            error={error}
            data={data}
            onRetry={retry}
            skeleton={<FormatsSkeleton />}
            emptyMessage="No learning formats are available right now."
          >
            {(formats) => (
              <div className="grid gap-6 md:grid-cols-2">
                {[...formats]
                  .sort((a, b) => rank(a.id) - rank(b.id))
                  .map((format) => (
                    <FormatCard key={format.id} format={format} />
                  ))}
              </div>
            )}
          </DataState>
        </div>
      </Container>
    </section>
  )
}