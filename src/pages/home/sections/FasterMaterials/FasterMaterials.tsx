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

const fasterMaterialsCards = [
  {
    title: 'SEMICONDUCTOR',
    text: 'Emerging memory technology and TCAD: speed up material selection and process optimization for next-generation devices.',
  },
  {
    title: 'MANUFACTURING',
    text: 'Predict and assess the stability of lightweight metallic alloys, thin-film oxide compounds, composite materials.',
  },
  {
    title: 'ENERGY',
    text: 'IT engineers, materials- and data scientists collaborate to speed up the design of new compounds from atoms up.',
  },
]

const FasterMaterials: FC = () => {
  const [cardNumber, setCardNumber] = useState<number>(1)
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const carousel = useRef<any>(null)

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
        <div className='faster-materials-content-title'>Faster Materials R&D For</div>
        {window.innerWidth > 426 ? (
          <div className='faster-materials-content-info'>
            {fasterMaterialsCards.map(card => (
              <div className='faster-materials-content-info-card'>
                <div className='faster-materials-content-info-card-title'>{card.title}</div>
                <div className='faster-materials-content-info-card-text'>{card.text}</div>
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
              {fasterMaterialsCards.map(card => (
                <div className='faster-materials-content-info-card'>
                  <div className='faster-materials-content-info-card-title'>{card.title}</div>
                  <div className='faster-materials-content-info-card-text'>{card.text}</div>
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
          <ActionButton title={'Get started now'} type={'default'} size={'medium'} />
          <a href={'#'} className='faster-materials-content-button'>
            Contact us
          </a>
        </div>
      </div>
    </Layout>
  )
}

export { FasterMaterials }
