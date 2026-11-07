import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Asset from '../ui/Asset'
import Button from '../ui/Button'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/overview', label: 'Overview' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  `block rounded-full px-5 py-3 text-base transition ${
    isActive ? 'bg-brand-tint font-bold text-brand-text' : 'text-body hover:text-title'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="flex h-20 items-center justify-between px-5 lg:grid lg:h-[104px] lg:grid-cols-[1fr_auto_1fr] lg:px-16">
        <Link to="/" onClick={close} aria-label="GDGoC UGM home">
          <Asset
            name="logo-header"
            alt="Google Developer Groups On Campus, Universitas Gadjah Mada"
            className="h-9 w-auto lg:h-10"
            fallback={<span className="text-lg">Google Developer Groups</span>}
          />
        </Link>

        <ul className="hidden items-center gap-2 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden justify-self-end lg:block">
          <Button to="/overview">Find your track</Button>
        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-btn lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-6 lg:hidden" onClick={close}>
          <ul className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/overview">Find your track</Button>
        </div>
      )}
    </header>
  )
}