import { FC } from 'react'
import { Title } from './sections/title/Title'
import { Beliefs } from './sections/beliefs/Beliefs'
import { Vision } from './sections/vision/Vision'
import { ContactUs } from './sections/contact-us/ContacUs'
import './OurVision.less'

export const OurVision: FC = () => {
  return (
    <>
      <Title />
      <Beliefs />
      <Vision />
      <ContactUs />
    </>
  )
}
