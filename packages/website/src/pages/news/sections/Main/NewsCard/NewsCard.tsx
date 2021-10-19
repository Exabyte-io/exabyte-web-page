import { FC, useState } from 'react'
import './NewsCard.less'
import { useMediaQuery } from 'react-responsive'
import ReactMarkdown from 'react-markdown'
import { PostFragment } from '../../../../../graphql'

const NewsCard: FC<PostFragment> = ({ cover, section, text, subtitle, name }) => {
  const [isReadMore, setIsReadMore] = useState<boolean>(false)
  const md = useMediaQuery({ minWidth: 768 })

  return (
    <div className='news-card'>
      <div className='less-content'>
        <div className='image'>
          <img src={md ? cover?.[0]?.url : cover?.[1]?.url} alt='' />
        </div>
        <div className='description'>
          <div className='title'>{name}</div>
          <div className='released'>{subtitle}</div>
          <div className='tags'>
            {section?.map((tag, i) => (
              <div className='tag' key={i}>
                {tag.title}
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
          <div className='paragraph'>
            <ReactMarkdown children={text ?? ''} />
          </div>
        </div>
        <div className='read-less read' onClick={() => setIsReadMore(false)}>
          Read less
        </div>
      </div>
    </div>
  )
}

export default NewsCard
