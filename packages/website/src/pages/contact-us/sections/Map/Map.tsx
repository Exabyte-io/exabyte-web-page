import { FC } from 'react'
import './Map.less'
import Form from './Form/Form'

const Map: FC = () => {
  return (
    <div className='contact-us-map-section'>
      <iframe
        className='map'
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7499.297893896308!2d-122.39810253653111!3d37.788484616964276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806325b00825%3A0x6a6b3373ede35750!2s535%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1630603531732!5m2!1sen!2sus'
        width='100%'
        height='640px'
        style={{ border: 0 }}
        allowFullScreen={false}
        loading='lazy'
      />
      <div className='content'>
        <Form />
      </div>
    </div>
  )
}

export default Map
