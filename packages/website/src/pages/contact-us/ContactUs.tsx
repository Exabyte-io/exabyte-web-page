import { FC } from 'react'
import Map from './sections/Map/Map'
import Contact from './sections/Contact/Contact'
import BackgroundMb from './images/background-mb.svg'
import { useMediaQuery } from 'react-responsive'
import './ContactUs.less'

interface ContactUsProps {
  incomingEmail?: string
}

const ContactUs: FC<ContactUsProps> = ({ incomingEmail = '' }) => {
  const md = useMediaQuery({ maxWidth: 768 })

  return (
    <div className='contact-us-unique-style'>
      <img src={md ? BackgroundMb : ''} alt='' className='background-mb' />
      <Map incomingEmail={incomingEmail} />
      <Contact />
    </div>
  )
}

export { ContactUs }
