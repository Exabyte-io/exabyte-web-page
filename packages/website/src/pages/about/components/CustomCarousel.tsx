import { FC, useRef } from 'react'
import { Carousel } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { CarouselRef } from 'antd/es/carousel'
import './CustomCarousel.less'

const CustomCarousel: FC = ({ children }) => {
  const carousel = useRef<CarouselRef>(null)

  const prevSlide = () => {
    carousel.current?.prev()
  }

  const nextSlide = () => {
    carousel.current?.next()
  }

  return (
    <div className='custom-carousel-wrapper'>
      <Carousel ref={carousel} dots={false} infinite={false} className='custom-carousel'>
        {children}
      </Carousel>

      <div className='custom-carousel-arrows'>
        <div onClick={prevSlide} className='custom-carousel-arrow'>
          <ArrowLeftOutlined />
        </div>
        <div onClick={nextSlide} className='custom-carousel-arrow'>
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  )
}

export default CustomCarousel
