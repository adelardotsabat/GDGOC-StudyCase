import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import Eyebrow from '../../components/ui/Eyebrow'
import { attributes } from './content'

export default function CommunityIntro() {
  return (
    <section className="py-[88px]">
      <Container className="grid gap-10 lg:grid-cols-[490px_1fr] lg:gap-24">
        <div className="flex flex-col items-start gap-5">
          <Eyebrow>A campus. A community.</Eyebrow>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Not just learning tech.
            <br />
            Finding your people.
          </h2>
          <Button to="/about" variant="link">
            More about GDGoC UGM
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-xl leading-[1.55] text-title lg:text-[21px]">
            Google Developer Groups on Campus, Universitas Gadjah Mada brings students together
            around one simple idea: we can go <strong className="font-bold">further</strong> when
            we <strong className="font-bold">learn</strong> with each other.
          </p>
          <p className="text-lg leading-[1.55] text-body">
            From your first line of code to your next product idea, there’s room to ask questions,
            share what you know, and try something new.
          </p>
          <ul className="flex flex-wrap gap-3">
            {attributes.map((a) => (
              <li key={a} className="rounded-full bg-surface px-4 py-2 text-[13px] font-bold text-body">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}