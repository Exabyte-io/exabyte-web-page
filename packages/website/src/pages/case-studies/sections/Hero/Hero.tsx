import { FC, useRef, useState } from 'react'
import { Carousel, Layout } from 'antd'
import BackgroundLg from './images/background-lg.svg'
import BackgroundMb from './images/background-mb.svg'
import BackgroundDecorationLg from './images/background-decor-lg.svg'
import BackgroundDecorationMb from './images/background-decor-mb.svg'
import LeftNotActiveArrow from '../../../home/sections/Customer/images/left-not-active-arrow.svg'
import LeftActiveArrow from '../../../home/sections/Customer/images/left-active-arrow.svg'
import RightNotActiveArrow from '../../../home/sections/Customer/images/right-not-active-arrow.svg'
import RightActiveArrow from '../../../home/sections/Customer/images/right-active-arrow.svg'
import './Hero.less'
import { useMediaQuery } from 'react-responsive'
import { useContentQuery } from '../../../../graphql'

const Hero: FC = () => {
  const [slideNumber, setSlideNumber] = useState<number>(1)
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const carousel = useRef<any>(null)

  const onCarouselChange = (slideIndex: number) => {
    setSlideNumber(slideIndex + 1)
  }

  const prevSlide = () => {
    carousel.current?.prev()
  }

  const nextSlide = () => {
    carousel.current?.next()
  }

  const md = useMediaQuery({ maxWidth: 768 })

  const { data } = useContentQuery({
    variables: {
      slug: 'case-studies-hero',
    },
  })
  const content = data?.content

  return (
    <Layout className='case-studies-hero'>
      <img src={md ? BackgroundMb : BackgroundLg} alt='' className='background-img' />
      <img src={md ? BackgroundDecorationMb : BackgroundDecorationLg} alt='' className='background-decoration-img' />
      <div className='case-studies-hero-content'>
        <div className='case-studies-hero-content-title'>{content?.title}</div>
        <div className='case-studies-hero-content-carousel-wrapper'>
          <div className='case-studies-hero-content-carousel-slide-number'>0{slideNumber}</div>

          <Carousel
            ref={carousel}
            afterChange={onCarouselChange}
            dots={false}
            infinite={false}
            className='case-studies-hero-content-carousel'
          >
            {content?.sections?.map((slide, index) => (
              <div className='case-studies-hero-content-carousel-slide' key={index}>
                <div className='case-studies-hero-content-carousel-slide-content'>
                  <div className='case-studies-hero-content-carousel-slide-content-image'>
                    <img src={slide?.media?.[0].url} alt='' />
                  </div>
                  <div className='case-studies-hero-content-carousel-slide-content-title'>{slide?.title}</div>
                  <div className='case-studies-hero-content-carousel-slide-content-text'>{slide?.description}</div>
                  <div className='case-studies-hero-content-carousel-slide-content-tags'>
                    {slide?.extra?.split(',')?.map((tag, index) => (
                      <div className='case-studies-hero-content-carousel-slide-content-tags-tag' key={index}>
                        {tag}
                      </div>
                    ))}
                  </div>
                  <a href={slide.subTitle} className='case-studies-hero-content-carousel-slide-content-link'>
                    Read case study
                  </a>
                </div>
              </div>
            ))}
          </Carousel>

          <div className={'case-studies-hero-content-carousel-arrows'}>
            <div onClick={prevSlide} className={'case-studies-hero-content-carousel-arrows-arrow'}>
              <img src={slideNumber === 1 ? LeftNotActiveArrow : LeftActiveArrow} alt='' />
            </div>
            <div onClick={nextSlide} className={'case-studies-hero-content-carousel-arrows-arrow'}>
              <img src={slideNumber === 4 ? RightNotActiveArrow : RightActiveArrow} alt='' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Hero }
