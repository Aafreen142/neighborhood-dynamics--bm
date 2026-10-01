import { PORTFOLIO_URL } from '@/lib/project'

export function ProjectHero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
          Project Overview
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Neighborhood Dynamics
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
          An overview to understand how property characteristics and school
          access shape housing prices and neighborhood quality.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary-foreground px-5 py-2.5 text-sm font-medium text-primary transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
          >
            View the project
          </a>
          <span className="text-sm text-primary-foreground/80">
            by Aafreen Sikandar
          </span>
        </div>
      </div>
    </section>
  )
}
