import { FC, useState } from 'react'
import IconSearch from './images/icon-search.svg'
import NewsCard from './NewsCard/NewsCard'
import BackgroundLg from './images/background-lg.svg'
import BackgroundMb from './images/background-mb.svg'
import DecorationLeftBottom from './images/decoration-left-bottom.svg'
import DecorationLeftBottomMb from './images/decoration-left-bottom-mb.svg'
import DecorationRightBottom from './images/decoration-right-bottom.svg'
import DecorationRightBottomMb from './images/decoration-right-bottom-mb.svg'
import './Main.less'
import { useMediaQuery } from 'react-responsive'
import CustomBackTop from '../../../../components/CustomBackTop/CustomBackTop'
import { usePostsQuery } from '../../../../graphql'

/*const newsCards: NewsCardType[] = [
  {
    image: NewsCardImage1,
    imageMb: NewsCardImageMb1,
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
]*/

const Main: FC = () => {
  const [filterValue, setFilterValue] = useState('')
  //const [filteredNewsCards, setFilteredNewsCards] = useState(newsCards)
  const md = useMediaQuery({ minWidth: 768 })
  const { data } = usePostsQuery()
  const content = data?.posts

  /*const handleFilterFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    const filteredCards = newsCards.filter(card => {
      const titleHasSubstring = card.title.includes(filterValue)
      const textHasSubstring = card.paragraphs.filter(paragraph => paragraph.includes(filterValue)).length > 0

      return titleHasSubstring || textHasSubstring
    })

    setFilteredNewsCards(filteredCards)
  }*/

  return (
    <div className='news'>
      <img src={md ? BackgroundLg : BackgroundMb} alt='' className='background-lg' />
      <div className='content'>
        <div className='title-wrapper'>
          <div className='title'>News</div>
          <form
            //onSubmit={handleFilterFormSubmit}
            className='input-wrapper'
          >
            <input value={filterValue} onChange={e => setFilterValue(e.target.value)} placeholder='Search' />
            <button type='submit'>
              <img src={IconSearch} alt='' />
            </button>
          </form>
        </div>
        <div className='news-cards'>
          {content?.map((card, index) => (
            <NewsCard {...card} key={index} />
          ))}
        </div>
        <div className='stay-tuned'>Stay Tuned</div>

        <div className='decorations'>
          <img src={md ? DecorationLeftBottom : DecorationLeftBottomMb} alt='' />
          <img src={md ? DecorationRightBottom : DecorationRightBottomMb} alt='' />
        </div>
      </div>

      <div className='back-top'>
        <CustomBackTop color={'#ffffff'} />
      </div>
    </div>
  )
}

export { Main }
