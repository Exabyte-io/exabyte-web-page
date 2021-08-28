import { FC } from 'react'
import './ContactUs.less'
import { ActionButton } from '../../../../components/button/ActionButton'

export const ContactUs: FC = () => (
  <section className={'contact-us'}>
    <div className={'section-heading'}>Do you share our vision?</div>
    <div className={'subheading'}>We'd love to hear what you think</div>
    <ActionButton title={'CONTACT US'} type={'default'} size={'medium'} />
  </section>
)
