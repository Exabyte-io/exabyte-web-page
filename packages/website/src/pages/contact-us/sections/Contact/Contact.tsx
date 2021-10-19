import { FC } from 'react'
import './Contact.less'

const Contact: FC = () => {
  return (
    <div className='contact-us-contact-section'>
      <div className='content'>
        <div className='title'>Contact Us</div>
        <div className='desc'>
          <div className='our-address'>
            <div className='our-address-title'>Our Address</div>
            <div>1161 Mission street, Suite 505</div>
            <div>San Francisco, CA 94103</div>
          </div>
          <div className='our-contacts'>
            <div className='our-contacts-title'>Our Contacts</div>
            <div>+1 (510) 473-7770</div>
            <div>info@exabyte.io</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
