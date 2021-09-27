import { FC } from 'react'
import './ContactUs.less'
import { ActionButton } from '../../../../components/button/ActionButton'
import { NavLink } from 'react-router-dom'

export const ContactUs: FC = () => (
  <section className={'contact-us'}>
    <div className={'section-heading'}>Do you share our vision?</div>
    <div className={'subheading'}>We'd love to hear what you think</div>
    <NavLink className={'action-button-wrapper'} to={'/contact-us'}>
      <ActionButton title={'CONTACT US'} type={'default'} size={'medium'} />
    </NavLink>
  </section>
)
