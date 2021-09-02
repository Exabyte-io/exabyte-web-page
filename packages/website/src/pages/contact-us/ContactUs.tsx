import { FC } from 'react'
import Map from './sections/Map/Map'
import Contact from './sections/Contact/Contact'

const ContactUs: FC = () => {
  return (
    <div className='contact-us'>
      <Map />
      <Contact />
    </div>
  )
}

export { ContactUs }
