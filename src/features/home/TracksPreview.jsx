import { getTracks } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import DataState from '../../components/ui/DataState'
import SectionHeader from '../../components/ui/SectionHeader'
import { TrackCard, TracksSkeleton } from '../overview/TracksSection'

export default function TracksPreview() {
  const { data, loading, error, retry } = useFetch(getTracks)

  return (
    <section className="pt-4 pb-[88px]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            label="Find your starting point"
            title={
              <>
                Many interests.
                <br />
                One shared journey.
              </>
            }
            description="Follow what excites you. Explore a track, then connect the dots with others."
          />
          <Button to="/overview" variant="link">
            See the overview
          </Button>
        </div>

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
                  <TrackCard key={track.id} track={track} />
                ))}
              </div>
            )}
          </DataState>
        </div>
      </Container>
    </section>
  )
}