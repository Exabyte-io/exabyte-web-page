import { FC } from 'react'
import { Hero } from './sections/Hero/Hero'
import { Leadership } from './sections/Leadership/Leadership'
import { Advisory } from './sections/Advisory/Advisory'
import { Investors } from './sections/Investors/Investors'
import { Partners } from './sections/Partners/Partners'

const About: FC = () => {
  return (
    <div className='about-page-unique-style'>
      <Hero />
      <Leadership />
      <Advisory />
      <Investors />
      <Partners />
    </div>
  )
}

export { About }
