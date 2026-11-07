export const trackMeta = {
  'research-discovery': { label: 'Explore the why', tint: 'bg-brand-tint', art: 'w-[85.375%]' },
  'design-creativity': { label: 'Make it meaningful', tint: 'bg-sun-tint', art: 'w-[84.25%]' },
  development: { label: 'Bring ideas to life', tint: 'bg-leaf-tint', art: 'w-[86.625%]' },
}

// Urutan tampil mengikuti desain Figma (API urutannya beda)
export const formatOrder = [
  'study-groups',
  'hands-on-workshops',
  'project-circles',
  'knowledge-sharing',
]

export const formatMeta = {
  'study-groups': { tint: 'bg-brand-tint', bestFor: 'Learning the fundamentals' },
  'hands-on-workshops': { tint: 'bg-leaf-tint', bestFor: 'Trying something new' },
  'project-circles': { tint: 'bg-sun-tint', bestFor: 'Putting skills into practice' },
  'knowledge-sharing': { tint: 'bg-rose-tint', bestFor: 'Exchanging perspectives' },
}

export const outcomes = [
  {
    pathway: 'Research & discovery',
    practice: 'Listening, problem framing, and testing assumptions',
    outcome: 'A research insight and a focused problem brief',
  },
  {
    pathway: 'Design & creativity',
    practice: 'Ideation, user flows, and prototype feedback',
    outcome: 'An interactive prototype and a design story',
  },
  {
    pathway: 'Development',
    practice: 'Coding, testing, and connecting tools',
    outcome: 'A working demo with a clear explanation',
  },
]