import { FC, useRef, useState } from 'react'
import { Carousel, Layout, Typography } from 'antd'
import SlideImage1 from './images/slide-1.svg'
import SlideImage2 from './images/slide-2.svg'
import SlideImage3 from './images/slide-3.svg'
import RightActiveArrow from './images/right-active-arrow.svg'
import LeftActiveArrow from './images/left-active-arrow.svg'
import RightNotActiveArrow from './images/right-not-active-arrow.svg'
import LeftNotActiveArrow from './images/left-not-active-arrow.svg'
import './Customer.less'

type Slide = {
  image: string
  text: string
  sign: string
}

const customerSlidesContent: Slide[] = [
  {
    image: SlideImage1,
    text: '"Exabyte.io allowed us to significantly accelerate our research and development efforts by leveraging state-of-the-art advancements in materials simulations and high performance computing in the cloud." ',
    sign: 'Dr. Sergey Barabash, Materials & Device Simulations, Intermolecular, Inc. (acq. by Merck KGaA)',
  },
  {
    image: SlideImage2,
    text: '"Exabyte.io lets us improve speed and accuracy of the modeling techniques we deploy and helps organize the resulting data. Accessible and collaborative interface allows us to train new users in nanoscale simulations much faster."',
    sign: 'Dr. Kazuki Mori, Science and Engineering Systems Division, ITOCHU Techno-solutions, Inc.',
  },
  {
    image: SlideImage3,
    text: '"With Exabyte.io we have top-tier computational resources and support in a very cost-efficient manner. This helps us reduce the time required to educate new group members in performing state-of-the-art research in molecular modeling."',
    sign: 'Dr. Jun Koyanagi, Dept. of Materials Science and Technology, Tokyo University of Science',
  },
]

const Customer: FC = () => {
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
    <Layout className={'section customer'}>
      <div className='customer-content'>
        <Typography.Paragraph className={'customer-content-title'}>Customer Stories</Typography.Paragraph>
        <div className='customer-content-carousel-wrapper'>
          <div className='customer-content-carousel-slide-number'>0{slideNumber}</div>

          <Carousel
            ref={carousel}
            afterChange={onCarouselChange}
            dots={false}
            infinite={false}
            className={'customer-content-carousel'}
          >
            {customerSlidesContent.map(slide => (
              <div className={'customer-content-carousel-slide'}>
                <div className='customer-content-carousel-slide-content'>
                  <div className='customer-content-carousel-slide-content-text'>
                    <div className='customer-content-carousel-slide-content-text-paragraph'>{slide.text}</div>
                    <div className='customer-content-carousel-slide-content-text-sign'>{slide.sign}</div>
                  </div>
                  <div className='customer-content-carousel-slide-content-image'>
                    <img src={slide.image} alt='' />
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
