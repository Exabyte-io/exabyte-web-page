import { FC } from 'react'
import { Layout } from 'antd'
import './Community.less'
import { communityCarousel } from '../../../../types'
import { CaseStudiesCarousel } from '../../../../components/CaseStudiesCarousel/CaseStudiesCarousel'

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
          <CaseStudiesCarousel title={carousel.title} carouselSlides={carousel.carouselSlides} key={index} />
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
