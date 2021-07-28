import { FC } from 'react'
import { Hero } from './sections/Hero/Hero'
import { ReadyFor } from './sections/ReadyFor/ReadyFor'

const Home: FC = () => {
  return (
    <>
      <Hero />
      <ReadyFor />
    </>
  )
}

export { Home }
