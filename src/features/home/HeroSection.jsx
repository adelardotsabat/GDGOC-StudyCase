import Asset from '../../components/ui/Asset'
import Button from '../../components/ui/Button'
import Eyebrow from '../../components/ui/Eyebrow'

const dots = ['bg-g-red', 'bg-g-yellow', 'bg-brand', 'bg-g-green']

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pt-12 pb-12 md:px-8 lg:min-h-[666px] lg:pt-[72px] lg:pr-16 lg:pb-16 lg:pl-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex max-w-[620px] flex-col gap-7">
          <Eyebrow>GDGoC UGM • 2026/2027</Eyebrow>

          <h1 className="text-5xl leading-[1.05] font-bold md:text-6xl min-[1440px]:text-[80px]">
            Big ideas.
            <br />
            <span className="text-brand-text">Built together.</span>
          </h1>

          <p className="max-w-xl text-lg leading-[1.55] text-body lg:text-[21px]">
            A place for curious minds at{' '}
            <strong className="font-bold text-title">Universitas Gadjah Mada</strong> to learn,
            connect, and build technology that matters.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button to="/overview">Find your learning track</Button>
            <Button to="/about" variant="secondary">
              Get to know us
            </Button>
          </div>

          <div className="flex items-center gap-3 text-sm text-body">
            <span className="flex gap-1" aria-hidden="true">
              {dots.map((c) => (
                <span key={c} className={`size-2.5 rounded-full ${c}`} />
              ))}
            </span>
            Different backgrounds. A shared curiosity.
          </div>
        </div>

        <div className="relative mx-auto aspect-[620/530] w-full max-w-[620px] overflow-hidden rounded-panel bg-brand-tint">
          <Asset name="hero-home" alt="" className="absolute inset-0 size-full object-cover" />

        <p className="absolute top-[64.27%] left-[4.27%] -rotate-[7deg] rounded-btn border border-line bg-white px-4 py-3 text-base leading-[normal] font-bold whitespace-nowrap sm:px-5 sm:py-3.5 sm:text-[23px]">
          hello, possibilities_
        </p>

        <p className="absolute top-[85.85%] left-[48.39%] flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs leading-[normal] whitespace-nowrap text-body">
          <span className="size-2 rounded-full bg-g-green" aria-hidden="true" />
          <span>
            Built on <b className="font-bold">curiosity.</b> Rooted in{' '}
            <b className="font-bold">UGM.</b>
          </span>
        </p>
        </div>
      </div>
    </section>
  )
}