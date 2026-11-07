import Container from '../../components/ui/Container'
import { promises } from './content'

export default function PromiseStrip() {
  return (
    <div className="border-y border-line">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-[26px]">
        {promises.map((p) => (
          <p key={p.label} className="flex items-center gap-3 text-lg font-medium">
            <span className={`size-2 ${p.color}`} aria-hidden="true" />
            {p.label}
          </p>
        ))}
      </Container>
    </div>
  )
}