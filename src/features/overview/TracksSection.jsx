import { useSearchParams } from 'react-router-dom'
import { getTracks } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import Asset from '../../components/ui/Asset'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import DataState from '../../components/ui/DataState'
import SectionHeader from '../../components/ui/SectionHeader'
import Skeleton from '../../components/ui/Skeleton'
import { trackMeta } from './content'

function TrackCard({ track, selected }) {
  const meta = trackMeta[track.id] ?? { label: track.tagline, tint: 'bg-surface' }

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-card border bg-white ${
        selected ? 'border-brand ring-2 ring-brand' : 'border-line'
      }`}
    >
      {/* Frame ilustrasi Figma 400x232. PNG @2x dipasang di (0,0) dengan lebar = lebar PNG/2 dibagi 400,
          jadi ikut membesar/mengecil proporsional dengan lebar card. */}
      <div className={`relative aspect-[400/232] ${meta.tint}`}>
        <Asset
          name={`track-${track.id}`}
          alt=""
          className={`absolute left-0 top-0 h-auto max-w-none ${meta.art ?? ''}`}
          fallback={<span className="text-6xl" aria-hidden="true">{track.icon}</span>}
        />
      </div>

      <div className="relative flex flex-1 flex-col gap-[18px] p-7">
        <p className="text-[11px] font-medium uppercase text-brand-text">{meta.label}</p>
        <h3 className="text-[28px] font-bold leading-[1.12]">{track.name}</h3>
        <p className="leading-[1.55] text-body">{track.description}</p>

        <div className="mt-auto flex flex-col gap-[18px] border-t border-line pt-[18px]">
          <p className="text-[13px] leading-[1.5] text-body">{track.skills.join(' · ')}</p>
          {selected && (
            <p className="text-sm leading-[1.5]">
              <span className="font-medium">What you’ll do: </span>
              {track.what_you_do}
            </p>
          )}
          <Button to={selected ? '/overview' : track.explore_link} variant="link">
            {selected ? 'Clear selection' : 'Explore this track'}
          </Button>
        </div>
      </div>
    </article>
  )
}

function TracksSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((n) => (
        <Skeleton key={n} className="h-[480px]" />
      ))}
    </div>
  )
}

export default function TracksSection() {
  const { data, loading, error, retry } = useFetch(getTracks)
  const [params] = useSearchParams()
  const selectedId = params.get('track')

  return (
    <section id="tracks" className="scroll-mt-28 pt-20 pb-16">
      <Container>
        <SectionHeader
          label="Explore your interests"
          title={
            <>
              Three ways in.
              <br />
              Plenty of ways forward.
            </>
          }
          description="These pathways are starting points, not boxes. Follow one deeply or bring different skills together."
        />

        <div className="mt-9">
          <DataState
            loading={loading}
            error={error}
            data={data}
            onRetry={retry}
            skeleton={<TracksSkeleton />}
            emptyMessage="No learning tracks are available right now."
          >
            {(tracks) => (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tracks.map((track) => (
                  <TrackCard key={track.id} track={track} selected={track.id === selectedId} />
                ))}
              </div>
            )}
          </DataState>
        </div>
      </Container>
    </section>
  )
}