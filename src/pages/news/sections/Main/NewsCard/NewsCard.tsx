import { FC, useState } from 'react'
import { NewsCardType } from 'src/types'
import './NewsCard.less'

const NewsCard: FC<NewsCardType> = ({ image, tags, paragraphs, released, title }) => {
  const [isReadMore, setIsReadMore] = useState<boolean>(false)

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
          <div
            className='read-more read'
            style={isReadMore ? { display: 'none' } : { display: 'inline' }}
            onClick={() => setIsReadMore(true)}
          >
            Read more
          </div>
        </div>
      </div>

      <div className='more-content' style={isReadMore ? { display: 'block' } : { display: 'none' }}>
        <div className='paragraphs'>
          {paragraphs.map((paragraph, i) => (
            <p className='paragraph' key={i}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className='read-less read' onClick={() => setIsReadMore(false)}>
          Read less
        </div>
      </div>
    </div>
  )
}

export default NewsCard
