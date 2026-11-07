import Container from '../../components/ui/Container'
import SectionHeader from '../../components/ui/SectionHeader'
import { firstSteps } from './content'

export default function GettingStarted() {
  return (
    <section className="pt-2 pb-[88px]">
      <Container>
        <SectionHeader
          label="Make your first move"
          title={
            <>
              You don’t need to have it all
              <br />
              figured out.
            </>
          }
        />

        <ol className="mt-10 grid gap-10 md:grid-cols-3">
          {firstSteps.map((step, i) => (
            <li key={step.id} className="flex flex-col gap-5">
              <span className="text-[44px] font-bold text-brand-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="border-t border-line pt-5">
                <h3 className="text-[25px] leading-[1.12] font-bold">{step.title}</h3>
                <p className="mt-3 leading-[1.55] text-body">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}