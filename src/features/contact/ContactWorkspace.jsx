import { useState } from 'react'
import { getInquiryCategories } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import Container from '../../components/ui/Container'
import DataState from '../../components/ui/DataState'
import Skeleton from '../../components/ui/Skeleton'
import CategoryPicker from './CategoryPicker'
import ContactForm from './ContactForm'
import UpdatesCard from './UpdatesCard'
import { DEFAULT_CATEGORY } from './content'

function CategorySkeleton() {
  return (
    <div className="flex flex-col gap-[18px]">
      {[1, 2, 3, 4].map((n) => (
        <Skeleton key={n} className="h-[92px]" />
      ))}
    </div>
  )
}

export default function ContactWorkspace() {
  const { data, loading, error, retry } = useFetch(getInquiryCategories)
  const [category, setCategory] = useState(DEFAULT_CATEGORY)

  return (
    <section className="pb-20">
      <Container className="grid items-start gap-10 lg:grid-cols-[456px_1fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px] leading-[1.12] font-bold">What brings you here?</h2>
            <p className="leading-[1.55] text-body">
              Pick the closest topic in the form. We’ll take it from there.
            </p>
          </div>

          <DataState
            loading={loading}
            error={error}
            data={data}
            onRetry={retry}
            skeleton={<CategorySkeleton />}
            emptyMessage="No inquiry topics are available right now."
          >
            {(categories) => (
              <CategoryPicker categories={categories} value={category} onChange={setCategory} />
            )}
          </DataState>

          <UpdatesCard />
        </div>

        <ContactForm
          categories={data ?? []}
          category={category}
          onCategoryChange={setCategory}
        />
      </Container>
    </section>
  )
}