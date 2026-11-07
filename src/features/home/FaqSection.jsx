import { useState } from 'react'
import { getFaqs } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import DataState from '../../components/ui/DataState'
import Eyebrow from '../../components/ui/Eyebrow'
import Skeleton from '../../components/ui/Skeleton'

const INITIAL_COUNT = 3

function Chevron({ open }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-body transition ${open ? 'rotate-180' : ''}`}
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FaqList({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? faqs : faqs.slice(0, INITIAL_COUNT)

  return (
    <div>
      <div className="flex flex-col gap-6">
        {visible.map((faq) => {
          const open = openId === faq.id
          return (
            <div key={faq.id} className="border-b border-line pb-6">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-${faq.id}`}
                  onClick={() => setOpenId(open ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-6 text-left text-xl font-medium"
                >
                  {faq.question}
                  <Chevron open={open} />
                </button>
              </h3>
              {open && (
                <p id={`faq-${faq.id}`} className="mt-3.5 leading-[1.55] text-body">
                  {faq.answer}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {faqs.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-6 font-medium text-brand-text hover:underline"
        >
          {showAll ? 'Show fewer questions' : `Show all ${faqs.length} questions`}
        </button>
      )}
    </div>
  )
}

function FaqSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {[1, 2, 3].map((n) => (
        <Skeleton key={n} className="h-20" />
      ))}
    </div>
  )
}

export default function FaqSection() {
  const { data, loading, error, retry } = useFetch(getFaqs)

  return (
    <section className="py-[88px]">
      <Container className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-24">
        <div className="flex flex-col items-start gap-5">
          <Eyebrow>A few good questions</Eyebrow>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Wondering
            <br />
            where to begin?
          </h2>
          <Button to="/contact" variant="link">
            Ask us a question
          </Button>
        </div>

        <DataState
          loading={loading}
          error={error}
          data={data}
          onRetry={retry}
          skeleton={<FaqSkeleton />}
          emptyMessage="No questions to show yet."
        >
          {(faqs) => <FaqList faqs={faqs} />}
        </DataState>
      </Container>
    </section>
  )
}
