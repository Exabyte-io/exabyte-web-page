import { FC, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import './CaseStudiesCarousel.less'
import { CarouselRef } from 'antd/lib/carousel'

const CaseStudiesCarousel: FC<CommunityCarousel> = ({ title, carouselSlides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const carousel = useRef<CarouselRef>(null)

  const prevSlide = () => {
    carousel.current?.prev()
  }

  const nextSlide = () => {
    carousel.current?.next()
  }

  const afterChange = (current: number) => {
    setCurrentSlide(current)
  }

  return (
    <div className='case-studies-carousel-wrapper'>
      <div className='title'>{title}</div>

      <Carousel ref={carousel} dots={false} infinite={false} className='carousel' afterChange={afterChange}>
        {carouselSlides.map((slide, index) => (
          <div className='carousel-slide' key={index}>
            {slide.paragraphs.map((paragraph, index) => (
              <p className='carousel-slide-paragraph' key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </Carousel>

      <div className='carousel-arrows'>
        <div onClick={prevSlide} className='carousel-arrow'>
          <ArrowLeftOutlined className={currentSlide === 0 ? '' : 'active'} />
        </div>
        <div onClick={nextSlide} className='carousel-arrow'>
          <ArrowRightOutlined className={currentSlide === carouselSlides.length - 1 ? '' : 'active'} />
        </div>
      </div>
    </div>
  )
}

export { CaseStudiesCarousel }
