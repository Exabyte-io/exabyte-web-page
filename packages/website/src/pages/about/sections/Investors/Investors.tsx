import { FC } from 'react'
import './Investors.less'
import { useContentQuery } from '../../../../graphql'

const Investors: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'about-investors',
    },
  })
  const content = data?.content

  return (
    <div className={'investors'}>
      <div className='investors-content'>
        <div className='investors-content-title'>{content?.title}</div>
        <div className='investors-content-cards'>
          {content?.sections?.map(card => (
            <div className='investors-content-cards-card'>
              <div className='content'>
                <img src={card?.media?.[0].url} alt='' />
                <div className='hidden-content'>
                  <div className='card-name'>{card?.title}</div>
                  <div className='pre-seed'>Pre-seed</div>
                  <a href={card?.subTitle} className='read-more' target={'_blank'}>
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Investors }
