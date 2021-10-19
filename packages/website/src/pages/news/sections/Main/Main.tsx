import { FC, useState } from 'react'
import IconSearch from './images/icon-search.svg'
import NewsCard from './NewsCard/NewsCard'
import BackgroundLg from './images/background-lg.svg'
import BackgroundMb from './images/background-mb.svg'
import DecorationLeftBottom from './images/decoration-left-bottom.svg'
import DecorationLeftBottomMb from './images/decoration-left-bottom-mb.svg'
import DecorationRightBottom from './images/decoration-right-bottom.svg'
import DecorationRightBottomMb from './images/decoration-right-bottom-mb.svg'
import { useMediaQuery } from 'react-responsive'
import CustomBackTop from '../../../../components/back/CustomBackTop'
import { usePostsQuery } from '../../../../graphql'
import './Main.less'

const Main: FC = () => {
  const [filterValue, setFilterValue] = useState('')
  const md = useMediaQuery({ minWidth: 768 })
  const { data } = usePostsQuery()
  const content = data?.posts

  return (
    <div className='news'>
      <img src={md ? BackgroundLg : BackgroundMb} alt='' className='background-lg' />
      <div className='content'>
        <div className='title-wrapper'>
          <div className='title'>News</div>
          <form className='input-wrapper'>
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
