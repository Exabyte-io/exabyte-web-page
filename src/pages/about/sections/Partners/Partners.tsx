import { FC } from 'react'
import { ActionButton } from '../../../../components/button/ActionButton'
import './Partners.less'
import Partner1 from './images/partner-1.svg'
import Partner2 from './images/partner-2.svg'
import CustomCarousel from '../../components/CustomCarousel'
import CustomBackTop from '../../../../components/CustomBackTop/CustomBackTop'
import { NavLink } from 'react-router-dom'

type PartnersCard = {
  photo: string
  title: string
  text: string
}

const partnersCards: PartnersCard[] = [
  {
    photo: Partner1,
    title: 'DISTRIBUTORS IN INDIA',
    text: 'Impulse Technology offers our platform to users in the Indian market and can provide technical support and consulting on specific research topics. More information is here.',
  },
  {
    photo: Partner2,
    title: 'REPRESENTATIVES IN JAPAN',
    text: 'ITOCHU Techno-Solutions Corporation offers a comprehensive service package ranging from platform on-boarding and technical support to helping optimize the product utilization and consulting on specific research topics. More information is here.',
  },
]

const Partners: FC = () => {
  return (
    <div className={'partners'}>
      <div className='partners-content'>
        <div className='partners-content-title'>Partners</div>

        <div className='partners-content-cards'>
          {partnersCards.map(card => (
            <div className='partners-content-cards-card'>
              <img src={card.photo} alt='' className='partners-content-cards-card-photo' />
              <div className='partners-content-cards-card-title'>{card.title}</div>
              <div className='partners-content-cards-card-text'>{card.text}</div>
            </div>
          ))}
        </div>

        <div className='partners-carousel-wrapper'>
          <CustomCarousel>
            {partnersCards.map(card => (
              <div className='partners-content-cards-card'>
                <img src={card.photo} alt='' className='partners-content-cards-card-photo' />
                <div className='partners-content-cards-card-title'>{card.title}</div>
                <div className='partners-content-cards-card-text'>{card.text}</div>
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
      <NavLink className='action-btn-wrapper-in-partners' to={'/contact-us'}>
        <ActionButton title={'CONTACT US'} type={'default'} size={'medium'} />
      </NavLink>
      <div className='back-top'>
        <CustomBackTop color={'#000000'} />
      </div>
    </div>
  )
}

export { Partners }
