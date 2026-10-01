import Image from 'next/image'
import { PORTFOLIO_URL } from '@/lib/project'

export function ProjectHero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:py-24">
        <div className="flex flex-1 flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Project Overview
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
  Neighborhood Dynamics
  </h1>
  <p className="-mt-3 text-lg font-medium text-primary">Now on GitHub</p>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            An overview to understand how property characteristics and school
            access shape housing prices and neighborhood quality.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View the project
            </a>
            <span className="text-sm text-muted-foreground">
              by Aafreen Sikandar
            </span>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-xl border border-border">
          <Image
            src="/images/townhouses.jpeg"
            alt="A row of modern wood-clad townhouses with dark gabled roofs along a quiet street at sunset"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
