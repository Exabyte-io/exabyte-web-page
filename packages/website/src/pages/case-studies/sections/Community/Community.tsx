import { FC, useRef } from 'react'
import { Carousel, Layout } from 'antd'
import './Community.less'

type communitySlide = {
  paragraphs: string[]
}

type communityCarousel = {
  title: string
  carouselSlides: communitySlide[]
}

const communityCarousels: communityCarousel[] = [
  {
    title: 'GLOBAL 2000',
    carouselSlides: [
      {
        paragraphs: [
          'GE Water',
          'IBM',
          'Intel',
          'ITOCHU Techno-Solutions',
          'Johnson Matthey',
          'Micron',
          'Samsung SDI.',
        ],
      },
      {
        paragraphs: ['Shell', 'SK Hynix', 'Toyota Research Institute', 'TSMC', 'Western Digital'],
      },
    ],
  },
  {
    title: 'SMALL/MEDIUM ENTEPRISES',
    carouselSlides: [
      {
        paragraphs: [
          'ASTOM R&D',
          'Environmental Fluids',
          'GAIL(India) Limited',
          'GPV Advanced Research',
          'Intermolecular',
          'Materials Korea Inc.',
          'Nanolayers Inc.',
        ],
      },
      {
        paragraphs: ['QuantumWise, Inc.', 'QuesTek Innovations'],
      },
    ],
  },
  {
    title: 'ACADEMIC',
    carouselSlides: [
      {
        paragraphs: [
          'Aix-Marseille University',
          'Akwa Ibom State University',
          'Barton College',
          'Bayero University Kano',
          'Benson Idahosa University',
          'Bits Pilani Hyderabad Campus',
          'Cadi Ayyad University',
        ],
      },
      {
        paragraphs: [
          'Central University Of Gujarat',
          'Central University Of Tamilnad',
          'Chinese Academy Of Sciences',
          'Chonnam National University',
          'Chuka University',
          'City University Of Hong Kong',
          'College Of Engineering, Pune',
        ],
      },
    ],
  },
]

const Community: FC = () => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const carousel1 = useRef<any>(null)
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const carousel2 = useRef<any>(null)
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const carousel3 = useRef<any>(null)

  const prevSlide = (index: number) => {
    if (index === 0) {
      carousel1.current?.prev()
    } else if (index === 1) {
      carousel2.current?.prev()
    } else if (index === 2) {
      carousel3.current?.prev()
    }
  }

  const nextSlide = (index: number) => {
    if (index === 0) {
      carousel1.current?.next()
    } else if (index === 1) {
      carousel2.current?.next()
    } else if (index === 2) {
      carousel3.current?.next()
    }
  }

  return (
    <Layout className='case-studies-community'>
      <img src='' alt='' className='background-image' />
      <div className='title'>Community</div>
      <div className='text'>
        Below is a list of institutional affiliations as submitted by users who attempted to register on our platform.
        This list is included for informational purposes only and has no implication about any potential relationship
        between our company and the organizations included.
      </div>
      <div className='carousels'>
        {communityCarousels.map((carousel, index) => (
          <div className='carousel-wrapper' key={index}>
            <div className='carousel-title'>{carousel.title}</div>

            <Carousel
              ref={index !== 0 ? (index !== 1 ? carousel3 : carousel2) : carousel1}
              dots={false}
              infinite={false}
              className='carousel'
            >
              {carousel.carouselSlides.map((slide, index) => (
                <div className='carousel-slide' key={index}>
                  {slide.paragraphs.map((paragraph, index) => (
                    <div className='carousel-slide-paragraph' key={index}>
                      {paragraph}
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>

            <div className='carousel-arrows'>
              <div onClick={() => prevSlide(index)} className='carousel-arrow'>
                Previous
                <img src='' alt='' />
              </div>
              <div onClick={() => nextSlide(index)} className='carousel-arrow'>
                Next
                <img src='' alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='join-community'>
        <div className='join-community-title'>Join Our Community!</div>
        <button className='button'>Join us — it’s free!</button>
      </div>
    </Layout>
  )
}

export { Community }
