import { FC, useRef, useState } from 'react'
import { Carousel, Layout } from 'antd'
import BackgroundLg from './images/background-lg.svg'
import BackgroundDecorationLg from './images/background-decor-lg.svg'
import LeftNotActiveArrow from '../../../home/sections/Customer/images/left-not-active-arrow.svg'
import LeftActiveArrow from '../../../home/sections/Customer/images/left-active-arrow.svg'
import RightNotActiveArrow from '../../../home/sections/Customer/images/right-not-active-arrow.svg'
import RightActiveArrow from '../../../home/sections/Customer/images/right-active-arrow.svg'
import './Hero.less'

type CaseStudiesSlide = {
  image: string
  title: string
  text: string
  tags: string[]
  link: string
}

const caseStudiesSlidesContent: CaseStudiesSlide[] = [
  {
    image: '',
    title: '1',
    text: '',
    tags: [],
    link: '',
  },
  {
    image: '',
    title: '2',
    text: '',
    tags: [],
    link: '',
  },
  {
    image: '',
    title: '3',
    text: '',
    tags: [],
    link: '',
  },
  {
    image: '',
    title: '4',
    text: '',
    tags: [],
    link: '',
  },
]

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

  return (
    <Layout className='section case-studies-hero'>
      <img src={BackgroundLg} alt='' className='background-img' />
      <img src={BackgroundDecorationLg} alt='' className='background-decoration-img' />
      <div className='case-studies-hero-content'>
        <div className='case-studies-hero-content-title'>
          Case <br /> Studies
        </div>
        <div className='case-studies-hero-content-carousel-wrapper'>
          <div className='case-studies-hero-content-carousel-slide-number'>0{slideNumber}</div>

          <Carousel
            ref={carousel}
            afterChange={onCarouselChange}
            dots={false}
            infinite={false}
            className='case-studies-hero-content-carousel'
          >
            {caseStudiesSlidesContent.map(slide => (
              <div className='case-studies-hero-content-carousel-slide'>
                <div className='case-studies-hero-content-carousel-slide-content'>
                  <div className='case-studies-hero-content-carousel-slide-content-image'>
                    <img src={slide.image} alt='' />
                  </div>
                  <div className='case-studies-hero-content-carousel-slide-content-tile'>{slide.title}</div>
                  <div className='case-studies-hero-content-carousel-slide-content-text'>{slide.text}</div>
                  <div className='case-studies-hero-content-carousel-slide-content-tags'>
                    {slide.tags.map(tag => (
                      <div className='case-studies-hero-content-carousel-slide-content-tag'>{tag}</div>
                    ))}
                  </div>
                  <a href={slide.link} className='case-studies-hero-content-carousel-slide-content-link'>
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
            <div onClick={nextSlide} className={'case-studies-hero-content-carousel-arrow'}>
              <img src={slideNumber === 4 ? RightNotActiveArrow : RightActiveArrow} alt='' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Hero }
