import { FC } from 'react'
import { Hero } from './sections/Hero/Hero'
import { PublicationsPerformed } from './sections/PublicationsPerformed/PublicationsPerformed'
import { PublicationsRelated } from './sections/PublicationsRelated/PublicationsRelated'
import { Community } from './sections/Community/Community'

const CaseStudies: FC = () => {
  return (
    <div className='case-studies-unique-style'>
      <Hero />
      <PublicationsPerformed />
      <PublicationsRelated />
      <Community />
    </div>
  )
}

export { CaseStudies }
