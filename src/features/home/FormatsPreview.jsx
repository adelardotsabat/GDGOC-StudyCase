import Asset from '../../components/ui/Asset'
import Container from '../../components/ui/Container'
import SectionHeader from '../../components/ui/SectionHeader'
import { learningFormats } from './content'

export default function FormatsPreview() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeader
          label="More than a classroom"
          title="Less watching. More making."
          description="Learn in a way that turns a new concept into something you can actually use."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {learningFormats.map((f) => (
            <article key={f.id} className="flex flex-col gap-5 rounded-card bg-white p-8">
              <Asset
                name={f.icon}
                alt=""
                className="size-6"
                fallback={<span className="text-2xl" aria-hidden="true">{f.emoji}</span>}
              />
              <h3 className="text-[28px] leading-[1.12] font-bold">{f.title}</h3>
              <p className="leading-[1.55] text-body">{f.description}</p>
              <p className="mt-auto border-t border-line pt-4 text-[13px] font-medium text-brand-text">
                {f.detail}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}