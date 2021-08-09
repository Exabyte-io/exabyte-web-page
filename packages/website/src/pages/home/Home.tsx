import { FC } from 'react'
import { Hero } from './sections/Hero/Hero'
import { ReadyFor } from './sections/ReadyFor/ReadyFor'
import { Platform } from './sections/Platform/Platform'
import { Capabilities } from './sections/Capabilities/Capabilities'
import { Related } from './sections/Related/Related'

const Home: FC = () => {
  return (
    <>
      <Hero />
      <ReadyFor />
      <Platform />
      <Capabilities />
      <Related />
    </>
  )
}

export { Home }
