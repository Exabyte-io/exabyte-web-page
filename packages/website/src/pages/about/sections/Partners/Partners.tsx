import { FC } from 'react'
import { ActionButton } from '../../../../components/button/ActionButton'
import './Partners.less'
import CustomCarousel from '../../components/CustomCarousel'
import CustomBackTop from '../../../../components/back/CustomBackTop'
import { NavLink } from 'react-router-dom'
import { useContentQuery } from '../../../../graphql'

const Partners: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'about-partners',
    },
  })
  const content = data?.content

  return (
    <div className={'partners'}>
      <div className='partners-content'>
        <div className='partners-content-title'>{content?.title}</div>

        <div className='partners-content-cards'>
          {content?.sections?.map(card => (
            <div className='partners-content-cards-card'>
              <img src={card?.media?.url} alt='' className='partners-content-cards-card-photo' />
              <div className='partners-content-cards-card-title'>{card?.title}</div>
              <div className='partners-content-cards-card-text'>{card?.subTitle}</div>
            </div>
          ))}
        </div>

        <div className='partners-carousel-wrapper'>
          <CustomCarousel>
            {content?.sections?.map(card => (
              <div className='partners-content-cards-card'>
                <img src={card?.media?.url} alt='' className='partners-content-cards-card-photo' />
                <div className='partners-content-cards-card-title'>{card?.title}</div>
                <div className='partners-content-cards-card-text'>{card?.subTitle}</div>
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
