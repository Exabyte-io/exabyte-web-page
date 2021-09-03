import { FC } from 'react'
import Map from './sections/Map/Map'
import Contact from './sections/Contact/Contact'
import BackgroundMb from './images/background-mb.svg'
import { useMediaQuery } from 'react-responsive'
import './ContactUs.less'

const ContactUs: FC = () => {
  const md = useMediaQuery({ maxWidth: 768 })

  return (
    <div className='contact-us'>
      <img src={md ? BackgroundMb : ''} alt='' className='background-mb' />
      <Map />
      <Contact />
    </div>
  )
}

export { ContactUs }
