import { FC, useRef, useState } from 'react'
import { Carousel, Layout } from 'antd'
import BackgroundLg from './images/background-lg.svg'
import LaptopDecoration from './images/laptop.svg'
import './FasterMaterials.less'
import { ActionButton } from '../../../../components/button/ActionButton'
import LeftNotActiveArrow from '../Customer/images/left-not-active-arrow.svg'
import LeftActiveArrow from '../Customer/images/left-active-arrow.svg'
import RightNotActiveArrow from '../Customer/images/right-not-active-arrow.svg'
import RightActiveArrow from '../Customer/images/right-active-arrow.svg'
import CustomBackTop from '../../../../components/CustomBackTop/CustomBackTop'
import { NavLink } from 'react-router-dom'
import { useContentQuery } from '../../../../graphql'

const FasterMaterials: FC = () => {
  const [cardNumber, setCardNumber] = useState<number>(1)
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const carousel = useRef<any>(null)

  const { data } = useContentQuery({
    variables: {
      slug: 'main-customer-stories',
    },
  })
  const content = data?.content

  const onCarouselChange = (cardIndex: number) => {
    setCardNumber(cardIndex + 1)
  }

  const prevCard = () => {
    carousel.current?.prev()
  }

  const nextCard = () => {
    carousel.current?.next()
  }

  return (
    <Layout className={'section faster-materials'}>
      <img src={BackgroundLg} alt='' className={'background-img'} />
      <img src={LaptopDecoration} alt='' className={'laptop-decoration'} />
      <div className='faster-materials-content'>
        <div className='faster-materials-content-title'>{content?.title}</div>
        {window.innerWidth > 426 ? (
          <div className='faster-materials-content-info'>
            {content?.sections?.map(card => (
              <div className='faster-materials-content-info-card'>
                <div className='faster-materials-content-info-card-title'>{card?.title}</div>
                <div className='faster-materials-content-info-card-text'>{card?.subTitle}</div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <Carousel
              ref={carousel}
              afterChange={onCarouselChange}
              dots={false}
              infinite={false}
              className={'faster-materials-content-carousel'}
            >
              {content?.sections?.map(card => (
                <div className='faster-materials-content-info-card'>
                  <div className='faster-materials-content-info-card-title'>{card?.title}</div>
                  <div className='faster-materials-content-info-card-text'>{card?.subTitle}</div>
                </div>
              ))}
            </Carousel>

            <div className={'faster-materials-content-carousel-arrows'}>
              <div
                onClick={prevCard}
                className={
                  cardNumber === 1
                    ? 'faster-materials-content-carousel-arrows-arrow inactive'
                    : 'faster-materials-content-carousel-arrows-arrow active'
                }
              >
                <img src={cardNumber === 1 ? LeftNotActiveArrow : LeftActiveArrow} alt='' />
              </div>
              <div
                onClick={nextCard}
                className={
                  cardNumber === 3
                    ? 'faster-materials-content-carousel-arrows-arrow inactive'
                    : 'faster-materials-content-carousel-arrows-arrow active'
                }
              >
                <img src={cardNumber === 3 ? RightNotActiveArrow : RightActiveArrow} alt='' />
              </div>
            </div>
          </>
        )}
        <div className='faster-materials-content-buttons'>
          <ActionButton title={'Get started now'} type={'default'} size={'medium'} src={'https://platform.exabyte.io/register'} />
          <NavLink to={'/contact-us'} className='faster-materials-content-button'>
            Contact us
          </NavLink>
        </div>
      </div>
      <div className='back-top'>
        <CustomBackTop color={'#ffffff'} />
      </div>
    </Layout>
  )
}

export { FasterMaterials }
