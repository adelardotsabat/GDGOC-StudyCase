import { useState } from 'react'
import Container from '../../components/ui/Container'

const items = [
  { id: 'tracks', label: 'Learning tracks' },
  { id: 'formats', label: 'Learning formats' },
  { id: 'journey', label: 'Your learning journey' },
  { id: 'start', label: 'Find a starting point' },
]

function ArrowDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2v10m0 0L3 8m4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SectionNav() {
  const [active, setActive] = useState(items[0].id)

  const goTo = (id) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav aria-label="Overview sections" className="border-y border-line">
      <Container className="flex gap-8 overflow-x-auto py-5">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(item.id)}
            className={`flex shrink-0 items-center gap-2 text-[15px] ${
              active === item.id ? 'font-bold text-brand-text' : 'text-body hover:text-title'
            }`}
          >
            {item.label}
            <ArrowDown />
          </button>
        ))}
      </Container>
    </nav>
  )
}