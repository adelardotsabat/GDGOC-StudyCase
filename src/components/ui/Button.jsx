import { Link } from 'react-router-dom'

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Button({ to, children, variant = 'primary', arrow = true }) {
  const base = 'inline-flex items-center font-medium transition'
  const styles = {
    primary: 'h-13 gap-4 rounded-btn border border-transparent bg-brand px-6 text-white hover:opacity-90',
    link: 'gap-3 text-brand-text hover:underline',
  }

  return (
    <Link to={to} className={`${base} ${styles[variant]}`}>
      {children}
      {arrow && <ArrowIcon />}
    </Link>
  )
}