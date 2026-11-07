import Eyebrow from './Eyebrow'

export default function SectionHeader({ label, title, description, className = '' }) {
  return (
    <div className={`flex flex-col gap-[18px] ${className}`}>
      {label && <Eyebrow>{label}</Eyebrow>}
      <h2 className="text-4xl font-bold leading-[1.12] text-title md:text-5xl">{title}</h2>
      {description && <p className="max-w-3xl text-lg leading-[1.55] text-body">{description}</p>}
    </div>
  )
}