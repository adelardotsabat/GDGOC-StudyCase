import { Link } from 'react-router-dom'
import Asset from '../ui/Asset'
import Container from '../ui/Container'

const exploreLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/overview', label: 'Overview' },
  { to: '/contact', label: 'Contact' },
]

// TODO: konfirmasi URL sosial media yang benar
const SOCIAL = {
  instagram: 'https://www.instagram.com/gdgoc.ugm',
  youtube: '#',
}

export default function Footer() {
  return (
    <footer className="bg-surface">
      <Container className="pt-14 pb-7">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="flex max-w-md flex-col gap-4">
            <Asset
              name="logo-footer"
              alt="Google Developer Groups On Campus, Universitas Gadjah Mada"
              className="h-[42px] w-auto self-start"
              fallback={<span className="text-xl">Google Developer Groups</span>}
            />
            <p className="text-sm leading-[1.55] text-body">
              A student community for curious minds, shared learning, and technology with purpose.
            </p>
          </div>

          <nav aria-label="Explore">
            <h2 className="mb-4 text-base font-bold text-black">Explore</h2>
            <ul className="flex flex-col gap-3 text-[15px] text-body">
              {exploreLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-title hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-base font-bold text-black">Keep in the loop</h2>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="text-lg text-brand-text hover:underline">
              @gdgoc.ugm
            </a>
            <div className="mt-3 flex gap-4">
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Asset name="icon-instagram" className="size-6" fallback={<span className="text-sm">Instagram</span>} />
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Asset name="icon-youtube" className="size-6" fallback={<span className="text-sm">YouTube</span>} />
              </a>
            </div>
            <p className="mt-4 text-sm text-body">Learn together. Build together.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs text-body md:flex-row">
          <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
          <p>Made for the campus. Open to possibilities.</p>
        </div>

        <div className="mt-8 flex h-1 w-40" aria-hidden="true">
          <span className="flex-1 bg-brand" />
          <span className="flex-1 bg-g-red" />
          <span className="flex-1 bg-g-yellow" />
          <span className="flex-1 bg-g-green" />
        </div>
      </Container>
    </footer>
  )
}