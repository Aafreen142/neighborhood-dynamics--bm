import { PORTFOLIO_LABEL, PORTFOLIO_URL } from '@/lib/project'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-secondary-foreground md:flex-row md:items-center md:justify-between">
        <p>Neighborhood Dynamics by Aafreen Sikandar</p>
        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline-offset-4 hover:underline"
        >
          {PORTFOLIO_LABEL}
        </a>
      </div>
    </footer>
  )
}
