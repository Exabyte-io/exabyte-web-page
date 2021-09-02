import { FC } from 'react'
import { NewsCardType } from '../../../../types'
import { Row } from 'antd'
import IconSearch from './images/icon-search.svg'
import NewsCardImage1 from './images/news-card-image-1.svg'
import NewsCard from './NewsCard/NewsCard'
import './Main.less'

const newsCards: NewsCardType[] = [
  {
    image: NewsCardImage1,
    title:
      'Exabyte.io Tapped by USAF to Give Scientists Real-World Version of Tony Stark’s Futuristic Ironman Simulation Software',
    released: 'Released 2020-09-30 via WebWire.',
    tags: ['2020-09-30', 'AI', 'ML', 'AFWERX', 'AFRL'],
    paragraphs: [
      'Exabyte.io, the company unlocking the rapid development of new materials for Global 2000 companies, announces its selection as a $1M Small Business Innovation Research (SBIR) Phase II award recipient from the United States Air Force’s technology incubator, AFWERX. The technology at the center of the award is Exabyte.io’s Elemental Modeling and Manufacturing Architecture (EMMA), a real-world version of the futuristic software that Tony Stark used to create new materials for his “Ironman” suit in the Marvel movie. Exabyte is also actively hiring to grow its team to support the award and other areas of strong growth.',
      'The AFWERX is a highly competitive program that encourages domestic small businesses to engage in federal research and research and development with the potential for commercialization. Exabyte.io received the Phase II award to conduct research and development and adapt its software to address the application areas and materials of interest to the Air Force. The Phase II award was granted after successfully completing a Phase I evaluation.',
      '“Material requirements for today’s cutting-edge manufacturing are immense and ever-increasing,” explains Timur Bazhirov, Ph.D., CEO and founder of Exabyte.io. “This Phase II award underscores the importance of understanding and exploiting the latest digital R&D methods to keep pace with accelerating materials and manufacturing lifecycles.”',
      'The Air Force Research Laboratory and AFWERX work together to streamline the SBIR process and accelerate the development of new technologies, broaden the pool of potential applicants and decrease bureaucratic overhead. Beginning in 2018, the Air Force started offering ’Special’ SBIR topics to drive a broader range of innovations that are faster and leaner.',
    ],
  },
]

const Main: FC = () => {
  return (
    <div className='news'>
      <div className='content'>
        <Row className='title-wrapper' style={{ marginBottom: 64 }}>
          <div className='title'>News</div>
          <div className='input-wrapper'>
            <input placeholder='Search' />
            <img src={IconSearch} alt='' />
          </div>
        </Row>
        <Row>
          {newsCards.map((card, index) => (
            <NewsCard
              key={index}
              image={card.image}
              title={card.title}
              paragraphs={card.paragraphs}
              tags={card.tags}
              released={card.released}
            />
          ))}
        </Row>
        <div className='stay-tuned'>Stay Tuned</div>
      </div>
    </div>
  )
}

export { Main }
