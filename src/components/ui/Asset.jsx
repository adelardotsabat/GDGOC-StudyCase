import { asset } from '../../lib/assets'

export default function Asset({ name, alt = '', className = '', fallback = null }) {
  const src = asset(name)
  if (!src) return fallback
  return <img src={src} alt={alt} className={className} />
}