import ArrowIcon from '../../components/ui/ArrowIcon'
import Eyebrow from '../../components/ui/Eyebrow'
import { INSTAGRAM_URL } from './content'

export default function UpdatesCard() {
  return (
    <aside className="flex flex-col items-start gap-4 rounded-card bg-sun-tint p-[26px]">
      <Eyebrow>Stay curious, stay connected</Eyebrow>
      <h3 className="text-[26px] leading-[1.12] font-bold">Looking for community updates?</h3>
      <p className="leading-[1.55] text-body">
        Follow <strong className="font-bold">@gdgoc.ugm</strong> for learning opportunities and
        what’s happening in the community.
      </p>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 font-medium text-brand-text hover:underline"
      >
        Find @gdgoc.ugm
        <ArrowIcon />
      </a>
    </aside>
  )
}