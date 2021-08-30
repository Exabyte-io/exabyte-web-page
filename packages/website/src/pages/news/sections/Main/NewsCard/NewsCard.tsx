import { FC } from 'react'
import { NewsCardType } from 'src/types'
import './NewsCard.less'

const NewsCard: FC<NewsCardType> = ({ image, tags, paragraphs, released, title }) => {
  return (
    <div className='news-card'>
      <div className='less-content'>
        <div className='image'>
          <img src={image} alt='' />
        </div>
        <div className='description'>
          <div className='title'>{title}</div>
          <div className='released'>{released}</div>
          <div className='tags'>
            {tags.map((tag, i) => (
              <div className='tag' key={i}>
                {tag}
              </div>
            ))}
          </div>
          <div className='read-more'>Read more</div>
        </div>
      </div>
      <div className='more-content'>
        <div className='paragraphs'>
          {paragraphs.map((paragraph, i) => (
            <p className='paragraph' key={i}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsCard
