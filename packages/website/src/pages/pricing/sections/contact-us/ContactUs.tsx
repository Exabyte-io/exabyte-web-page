import { FC } from 'react'
import '../../../our-vision/sections/contact-us/ContactUs.less'
import { ActionButton } from '../../../../components/button/ActionButton'
import { NavLink } from 'react-router-dom'

export const ContactUs: FC = () => (
  <section className={'contact-us'}>
    <div className={'section-heading'} style={{ maxWidth: 650 }}>
      For Detailed Pricing or a Quotation Please Contact Us{' '}
    </div>
    <NavLink className={'action-button-wrapper'} to={'/contact-us'}>
      <ActionButton title={'CONTACT US'} type={'default'} size={'medium'} />
    </NavLink>
  </section>
)
