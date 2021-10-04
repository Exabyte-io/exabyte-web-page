import { FC } from 'react'
import './Advisory.less'
import InfoIcon from './images/info-icon.svg'
import CustomCarousel from '../../components/CustomCarousel'
import { useContentQuery } from '../../../../graphql'

const Advisory: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'about-advisory-board',
    },
  })
  const content = data?.content

  return (
    <div className={'section advisory'}>
      <div className='advisory-content'>
        <div className='advisory-content-title'>{content?.title}</div>

        <div className='advisory-content-cards'>
          {content?.sections?.map(card => (
            <div className='advisory-content-cards-card'>
              <img src={card?.media?.[0].url} alt='' className='advisory-content-cards-card-photo' />
              <div className='advisory-content-cards-card-name'>{card?.title}</div>
              <div className='advisory-content-cards-card-position'>{card?.subTitle}</div>
              <a href={card?.text} className='advisory-content-cards-card-link'>
                <img src={InfoIcon} alt='' />
              </a>
              <div className='advisory-content-cards-card-text'>{card?.description}</div>
            </div>
          ))}
        </div>

        <div className='advisory-carousel-wrapper'>
          <CustomCarousel>
            {content?.sections?.map(card => (
              <div className='advisory-content-cards-card'>
                <img src={card?.media?.url} alt='' className='advisory-content-cards-card-photo' />
                <div className='advisory-content-cards-card-name'>{card?.title}</div>
                <div className='advisory-content-cards-card-position'>{card?.subTitle}</div>
                <a href={card?.text} className='advisory-content-cards-card-link'>
                  <img src={InfoIcon} alt='' />
                </a>
                <div className='advisory-content-cards-card-text'>{card?.description}</div>
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
    </div>
  )
}

export { Advisory }
