import { FC } from 'react'
import { Hero } from './sections/Hero/Hero'
import { Leadership } from './sections/Leadership/Leadership'

const About: FC = () => {
  return (
    <>
      <Hero />
      <Leadership />
    </>
  )
}

export { About }
