import { PORTFOLIO_LABEL, PORTFOLIO_URL } from '@/lib/project'

type Detail = {
  label: string
  content: React.ReactNode
}

const details: Detail[] = [
  {
    label: 'What it is',
    content: (
      <p>
        An overview to understand how property characteristics and school
        access shape housing prices and neighborhood quality.
      </p>
    ),
  },
  {
    label: 'Why it matters',
    content: <p>Helps with housing trends.</p>,
  },
  {
    label: 'Where to see it',
    content: (
      <a
        href={PORTFOLIO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline underline-offset-4 hover:no-underline"
      >
        {PORTFOLIO_LABEL}
      </a>
    ),
  },
  {
    label: 'Who made it',
    content: <p>Aafreen Sikandar</p>,
  },
]

export function ProjectDetails() {
  return (
    <section aria-labelledby="details-heading" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h2 id="details-heading" className="sr-only">
        Project details
      </h2>
      <dl className="flex flex-col divide-y divide-border border-y border-border">
        {details.map((detail, index) => (
          <div
            key={detail.label}
            className="grid gap-2 py-8 md:grid-cols-[12rem_1fr] md:gap-8"
          >
            <dt className="flex items-baseline gap-3 text-sm font-semibold uppercase tracking-wider text-primary">
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
              {detail.label}
            </dt>
            <dd className="text-pretty text-lg leading-relaxed text-foreground">
              {detail.content}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
