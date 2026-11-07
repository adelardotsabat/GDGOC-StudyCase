export default function Eyebrow({ children, className = '' }) {
  return (
    <p className={`flex items-center gap-2 text-xs font-medium uppercase text-body ${className}`}>
      <span className="size-[7px] shrink-0 rounded-full bg-brand" />
      {children}
    </p>
  )
}