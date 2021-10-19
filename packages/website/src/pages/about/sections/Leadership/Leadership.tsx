import { FC } from 'react'
import { Layout } from 'antd'
import './Leadership.less'
import LinkedInIcon from './images/linkedin-icon.svg'
import GitHubIcon from './images/github-icon.svg'
import CustomCarousel from '../../components/CustomCarousel'
import { useContentQuery } from '../../../../graphql'

const Leadership: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'about-leadership-team',
    },
  })
  const content = data?.content

  return (
    <Layout className={'section leadership'}>
      <div className='leadership-content'>
        <div className='leadership-content-title'>{content?.title}</div>

        <div className='leadership-content-cards'>
          {content?.sections?.map(card => (
            <div className='leadership-content-cards-card'>
              <img src={card?.media?.[0].url} alt='' className='leadership-content-cards-card-photo' />
              <div className='leadership-content-cards-card-name'>{card?.title}</div>
              <div className='leadership-content-cards-card-position'>{card?.subTitle}</div>
              <div className='leadership-content-cards-card-links'>
                <a href={card?.extra} className={'leadership-content-cards-card-links-link'}>
                  <img src={LinkedInIcon} alt='' />
                </a>
                <a href={card?.text} className={'leadership-content-cards-card-links-link'}>
                  <img src={GitHubIcon} alt='' />
                </a>
              </div>
              <div className='leadership-content-cards-card-description'>{card?.description}</div>
            </div>
          ))}
        </div>

        <div className='leadership-carousel-wrapper'>
          <CustomCarousel>
            {content?.sections?.map(card => (
              <div className='leadership-content-cards-card'>
                <img src={card?.media?.[0].url} alt='' className='leadership-content-cards-card-photo' />
                <div className='leadership-content-cards-card-name'>{card?.title}</div>
                <div className='leadership-content-cards-card-position'>{card?.subTitle}</div>
                <div className='leadership-content-cards-card-links'>
                  <a href={card?.extra} className={'leadership-content-cards-card-links-link'}>
                    <img src={LinkedInIcon} alt='' />
                  </a>
                  <a href={card?.text} className={'leadership-content-cards-card-links-link'}>
                    <img src={GitHubIcon} alt='' />
                  </a>
                </div>
                <div className='leadership-content-cards-card-description'>{card?.description}</div>
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
    </Layout>
  )
}

export { Leadership }
