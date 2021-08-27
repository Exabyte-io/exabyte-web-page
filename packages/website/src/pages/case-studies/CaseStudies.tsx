import { FC } from 'react'
import { Hero } from './sections/Hero/Hero'
import { PublicationsPerformed } from './sections/PublicationsPerformed/PublicationsPerformed'
import { PublicationsRelated } from './sections/PublicationsRelated/PublicationsRelated'
import { Community } from './sections/Community/Community'

const CaseStudies: FC = () => {
  return (
    <>
      <Hero />
      <PublicationsPerformed />
      <PublicationsRelated />
      <Community />
    </>
  )
}

export { CaseStudies }
