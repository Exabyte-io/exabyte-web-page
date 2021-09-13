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
import Slide1Image from './images/slide-1.svg'
import Slide2Image from './images/slide-2.svg'
import Slide3Image from './images/slide-3.svg'
import Slide4Image from './images/slide-4.svg'
import './Hero.less'
import { useMediaQuery } from 'react-responsive'

type CaseStudiesSlide = {
  image: string
  title: string
  text: string
  tags: string[]
  link: string
}

const caseStudiesSlidesContent: CaseStudiesSlide[] = [
  {
    image: Slide1Image,
    title: 'AI FOR SURFACE CATALYSIS',
    text: "A team of researchers lead by professor Rocca at the Universit'e de Lorraine computed adsorption entalpies  in zeolites with high accuracy using the random phase approximation first-principles technique coupled with machine learning.",
    tags: ['2019', 'Quantum Chemistry', 'Density Functional Theory', 'Random-phase Approximation', 'VASP', 'Zeolites'],
    link: '#',
  },
  {
    image: Slide2Image,
    title: 'LIGHT-WEIGHT ALLOYS',
    text: 'A team of researchers from Intermolecular Inc. compressed what would otherwise be 10 years of computing into under 2 days and screened 296 promising structural alloys for potential applications in automotive and aerospace fields.',
    tags: ['2016', 'Solid-state Physics', 'Density Functional Theory', 'VASP', 'High-entropy alloys'],
    link: '#',
  },
  {
    image: Slide3Image,
    title: 'STRONGER COMPOSITE MATERIALS',
    text: 'Tokyo University of Science team together with ITOCHU Techno-solutions successfully demonstrated a computational evaluation of the mechanical properties of carbon fiber/polymer resin interfaces.',
    tags: ['2019', 'Materials-Science', 'Molecular Dynamics', 'GROMACS', 'Carbon Fiber', 'Graphene', 'Polyimide', 'Vinylester'],
    link: '#',
  },
  {
    image: Slide4Image,
    title: 'SOLID-STATE BATTERY ELECTROLYTES',
    text: 'A team from San Francisco State University benchmarked Exabyte.io platform against a set of incumbents using atomistic simulations of solid-state lithium electrolytes, and found a 2-3x decrease in timer required to run simulations.\n',
    tags: ['2016', 'Solid-state Physics', 'Density Functional Theory', 'Quantum ESPRESSO', 'Li3 P S4'],
    link: '#',
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

  const md = useMediaQuery({ maxWidth: 768 })

  return (
    <Layout className='section case-studies-hero'>
      <img src={md ? BackgroundMb : BackgroundLg} alt='' className='background-img' />
      <img src={md ? BackgroundDecorationMb : BackgroundDecorationLg} alt='' className='background-decoration-img' />
      <div className='case-studies-hero-content'>
        <div className='case-studies-hero-content-title'>Case Studies</div>
        <div className='case-studies-hero-content-carousel-wrapper'>
          <div className='case-studies-hero-content-carousel-slide-number'>0{slideNumber}</div>

          <Carousel
            ref={carousel}
            afterChange={onCarouselChange}
            dots={false}
            infinite={false}
            className='case-studies-hero-content-carousel'
          >
            {caseStudiesSlidesContent.map((slide, index) => (
              <div className='case-studies-hero-content-carousel-slide' key={index}>
                <div className='case-studies-hero-content-carousel-slide-content'>
                  <div className='case-studies-hero-content-carousel-slide-content-image'>
                    <img src={slide.image} alt='' />
                  </div>
                  <div className='case-studies-hero-content-carousel-slide-content-title'>{slide.title}</div>
                  <div className='case-studies-hero-content-carousel-slide-content-text'>{slide.text}</div>
                  <div className='case-studies-hero-content-carousel-slide-content-tags'>
                    {slide.tags.map((tag, index) => (
                      <div className='case-studies-hero-content-carousel-slide-content-tags-tag' key={index}>
                        {tag}
                      </div>
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
