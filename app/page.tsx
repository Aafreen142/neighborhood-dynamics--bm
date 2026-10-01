import { ProjectDetails } from '@/components/project-details'
import { ProjectHero } from '@/components/project-hero'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <main>
        <ProjectHero />
        <ProjectDetails />
      </main>
      <SiteFooter />
    </>
  )
}
