import { FC } from 'react'
import './Community.less'
import { communityCarousel } from '../../../../types'
import { CaseStudiesCarousel } from '../../../../components/CaseStudiesCarousel/CaseStudiesCarousel'
import BackgroundLg from './images/background-lg.svg'
import BackgroundMb from './images/background-mb.svg'
import { useMediaQuery } from 'react-responsive'
import CustomBackTop from '../../../../components/CustomBackTop/CustomBackTop'

const communityCarousels: communityCarousel[] = [
  {
    title: 'GLOBAL 2000',
    carouselSlides: [
      {
        paragraphs: ['GE Water', 'IBM', 'Intel', 'ITOCHU Techno-Solutions', 'Johnson Matthey', 'Micron', 'Samsung SDI.'],
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
      {
        paragraphs: [
          'ACONICET',
          'Consejo Superior de Investigaciones Científicas',
          'Cornell University',
          'Damghan University',
          'Delta State University',
          'Don State Technical University',
        ],
      },
      {
        paragraphs: [
          'Duke University',
          'EPFL',
          'FS Monastir',
          'Hanyang Univ.',
          'Hanyang University',
          'Igbinedion University, Okada',
          'IIT Bombay',
        ],
      },
      {
        paragraphs: [
          'IIT Indore',
          'IMDEA Materials',
          'Imperial College London',
          'Indian Institute Of Science',
          'INESC-MN Portugal',
          'Ioffe Institute, St.petersburg',
          'Izmir Institute Of Technology',
        ],
      },
      {
        paragraphs: [
          'KAUST',
          'King Fahd University Of Petrol',
          'Korea Institute Of Science And Technology',
          'Laarbi Tebessi University',
          'Lawrence Berkeley National Lab',
          'Louisiana State University',
        ],
      },
      {
        paragraphs: [
          'Madurai Kamaraj University',
          'Marien Ngouabi University',
          'Maynooth University',
          'Mcmaster University',
          'Michigan State University',
          'Nanyang Technological Universi',
          'National Center For Nuclear Research',
        ],
      },
      {
        paragraphs: [
          'NIT Rourkela',
          'Northeastern University',
          'Northeastern University',
          'Pohang University',
          'Princeton University',
          'Purdue University',
          'Sakarya University',
        ],
      },
      {
        paragraphs: [
          'San Francisco State University',
          'Seoul National University',
          'Shahid Beheshti University',
          'SISSA',
          "St. Anthony's College, India",
          'Stanford University',
          'SVNIT',
        ],
      },
      {
        paragraphs: [
          'Taibah University',
          'Texas A&M University',
          'Tohoku University',
          'Tokyo University of Science',
          'Trakya University',
          'Tufts University',
          'Tyndall National Institute',
        ],
      },
      {
        paragraphs: [
          'Uludağ University',
          'Universidad De Chile',
          'Universidad De La Republica, Uruguay',
          'Universidad Del Magdalena',
          'Universiti Sains Malaysia',
          'University Mohammed V',
          'University Of Bejaia',
        ],
      },
      {
        paragraphs: [
          'University Of Benin',
          'University Of Benin, Benin',
          'University Of British Columbia',
          'University of California, Berkeley',
          'University of California, Riverside',
          'University of Cambridge',
          'University Of Cologne',
        ],
      },
      {
        paragraphs: [
          'University Of Exeter, UK',
          'University Of Florida',
          'University Of Gour Banga',
          "University Of L'aquila",
          'University Of Luxembourg',
          'University Of Melbourne',
          'University Of Minnesota',
        ],
      },
      {
        paragraphs: [
          'University Of Missouri',
          'University of Pennsylvania',
          'University Of Sao Paulo',
          'University Of Saskatchewan',
          'University of Southern California',
          'University of Vienna',
          'University Of Washington',
        ],
      },
      {
        paragraphs: [
          'University Of Wollongong',
          'University Of Yaoundé',
          'Université 08 Mai 45 Guelma',
          'Vanderbilt University',
          'Vietnam Japan University',
          'VIT University, Vellore',
          'Wuhan Institute Of Technology',
        ],
      },
      {
        paragraphs: ['Wuhan University'],
      },
    ],
  },
]

const Community: FC = () => {
  const md = useMediaQuery({ maxWidth: 768 })

  return (
    <div className='case-studies-community'>
      <img src={md ? BackgroundMb : BackgroundLg} alt='' className='background-img' />
      <div className='content'>
        <div className='case-studies-community-title'>Community</div>
        <div className='case-studies-community-text'>
          Below is a list of institutional affiliations as submitted by users who attempted to register on our platform. This list is
          included for informational purposes only and has no implication about any potential relationship between our company and the
          organizations included.
        </div>
        <div className='carousels'>
          {communityCarousels.map((carousel, index) => (
            <CaseStudiesCarousel title={carousel.title} carouselSlides={carousel.carouselSlides} key={index} />
          ))}
        </div>
        <div className='join-community'>
          <div className='join-community-title'>Join Our Community!</div>
          <a href='https://platform.exabyte.io/register' className='button'>
            Join us — it’s free!
          </a>
        </div>
      </div>
      <div className='back-top'>
        <CustomBackTop color={'#ffffff'} />
      </div>
    </div>
  )
}

export { Community }
