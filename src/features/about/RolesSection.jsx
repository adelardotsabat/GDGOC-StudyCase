import { getRoles } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import DataState from '../../components/ui/DataState'
import Eyebrow from '../../components/ui/Eyebrow'
import Skeleton from '../../components/ui/Skeleton'

function RolesSkeleton() {
  return (
    <div className="flex w-full flex-col gap-4">
      {[1, 2, 3].map((n) => (
        <Skeleton key={n} className="h-24" />
      ))}
    </div>
  )
}

export default function RolesSection() {
  const { data, loading, error, retry } = useFetch(getRoles)

  return (
    <section className="pt-12 pb-24">
      <Container className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-24">
        <div className="flex flex-col items-start gap-5">
          <Eyebrow>People, not labels</Eyebrow>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            There’s more than one way to contribute.
          </h2>
          <p className="text-lg leading-[1.55] text-body">
            You can be learning one day and helping someone else the next. A community grows
            through both.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8">
          <DataState
            loading={loading}
            error={error}
            data={data}
            onRetry={retry}
            skeleton={<RolesSkeleton />}
            emptyMessage="Ways to get involved are not available right now."
          >
            {(roles) => (
              <ul className="w-full">
                {roles.map((role) => (
                  <li key={role.id} className="border-b border-line py-6 first:pt-0">
                    <h3 className="text-[28px] leading-[1.12] font-bold">{role.title}</h3>
                    <p className="mt-3 text-[17px] leading-[1.55] text-body">{role.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </DataState>

          <Button to="/contact" variant="link">
            Let’s talk about getting involved
          </Button>
        </div>
      </Container>
    </section>
  )
}