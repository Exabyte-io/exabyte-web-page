import { FC } from 'react'
import { Hero } from './sections/Hero/Hero'
import { ReadyFor } from './sections/ReadyFor/ReadyFor'
import { Platform } from './sections/Platform/Platform'

const Home: FC = () => {
  return (
    <>
      <Hero />
      <ReadyFor />
      <Platform />
    </>
  )
}

export { Home }
