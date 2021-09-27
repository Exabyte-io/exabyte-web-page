import { FC } from 'react'
import { Hero } from './sections/Hero/Hero'
import { ReadyFor } from './sections/ReadyFor/ReadyFor'
import { Platform } from './sections/Platform/Platform'
import { Capabilities } from './sections/Capabilities/Capabilities'
import { Related } from './sections/Related/Related'
import { Customer } from './sections/Customer/Customer'
import { FasterMaterials } from './sections/FasterMaterials/FasterMaterials'

const Home: FC = () => {
  return (
    <div className='home-page-unique-style' style={{ overflowX: 'hidden' }}>
      <Hero />
      <ReadyFor />
      <Platform />
      <Capabilities />
      <Related />
      <Customer />
      <FasterMaterials />
    </div>
  )
}

export { Home }
