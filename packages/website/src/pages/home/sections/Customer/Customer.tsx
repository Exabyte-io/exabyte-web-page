import { FC, useRef, useState } from 'react'
import { Carousel, Layout, Typography } from 'antd'
import RightActiveArrow from './images/right-active-arrow.svg'
import LeftActiveArrow from './images/left-active-arrow.svg'
import RightNotActiveArrow from './images/right-not-active-arrow.svg'
import LeftNotActiveArrow from './images/left-not-active-arrow.svg'
import './Customer.less'
import { useContentQuery } from '../../../../graphql'

const Customer: FC = () => {
  const [slideNumber, setSlideNumber] = useState<number>(1)
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const carousel = useRef<any>(null)

  const { data } = useContentQuery({
    variables: {
      slug: 'main-customer',
    },
  })
  const content = data?.content

  const onCarouselChange = (slideIndex: number) => {
    setSlideNumber(slideIndex + 1)
  }

  const prevSlide = () => {
    carousel.current?.prev()
  }

  const nextSlide = () => {
    carousel.current?.next()
  }

  return (
    <Layout className={'section customer'}>
      <div className='customer-content'>
        <Typography.Paragraph className={'customer-content-title'}>{content?.title}</Typography.Paragraph>
        <div className='customer-content-carousel-wrapper'>
          <div className='customer-content-carousel-slide-number'>0{slideNumber}</div>

          <Carousel ref={carousel} afterChange={onCarouselChange} dots={false} infinite={false} className={'customer-content-carousel'}>
            {content?.sections?.map(slide => (
              <div className={'customer-content-carousel-slide'} key={slide.id}>
                <div className='customer-content-carousel-slide-content'>
                  <div className='customer-content-carousel-slide-content-text'>
                    <div className='customer-content-carousel-slide-content-text-paragraph'>{slide?.title}</div>
                    <div className='customer-content-carousel-slide-content-text-sign'>{slide?.subTitle}</div>
                  </div>
                  <div className='customer-content-carousel-slide-content-image'>
                    <img src={slide?.media?.[0].url} alt='' />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          <div className={'customer-content-carousel-arrows'}>
            <div onClick={prevSlide} className={'customer-content-carousel-arrows-arrow'}>
              <img src={slideNumber === 1 ? LeftNotActiveArrow : LeftActiveArrow} alt='' />
            </div>
            <div onClick={nextSlide} className={'customer-content-carousel-arrows-arrow'}>
              <img src={slideNumber === 3 ? RightNotActiveArrow : RightActiveArrow} alt='' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Customer }
