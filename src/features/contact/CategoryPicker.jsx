import Asset from '../../components/ui/Asset'

export default function CategoryPicker({ categories, value, onChange }) {
  return (
    <div className="flex flex-col gap-[18px]" role="group" aria-label="Inquiry topics">
      {categories.map((c) => {
        const active = c.id === value
        return (
          <button
            key={c.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(c.id)}
            className={`flex items-start gap-[18px] rounded-2xl border p-5 text-left transition ${
              active
                ? 'border-transparent bg-brand-tint'
                : 'border-line bg-transparent hover:bg-surface'
            }`}
          >
            <span className="flex h-[26px] w-6 shrink-0 items-center justify-center">
              <Asset
                name={`category-${c.id}`}
                alt=""
                className="max-h-full max-w-full"
                fallback={
                  <span
                    className="text-[25px] leading-none font-medium text-brand-text"
                    aria-hidden="true"
                  >
                    {c.icon}
                  </span>
                }
              />
            </span>
            <span className="flex flex-col gap-1.5">
              <span className="text-[17px] font-medium">{c.label}</span>
              <span className="text-sm leading-[1.55] text-body">{c.description}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}