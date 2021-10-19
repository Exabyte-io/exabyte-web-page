import { FC } from 'react'
import { Layout, Typography } from 'antd'
import RelatedBgLg from './images/related-bg-lg.svg'
import RelatedBgSm from './images/related-bg-sm.svg'
import './Related.less'
import { useContentQuery } from '../../../../graphql'

const Related: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'main-related',
    },
  })
  const content = data?.content

  const location = window.location.href.includes('localhost') ? 'http://localhost:1337' : ''

  return (
    <Layout className={'section related'}>
      <img src={RelatedBgLg} alt='' className='related-background-img' />
      <img src={RelatedBgSm} alt='' className='related-background-img-mobile' />
      <div className='related-content'>
        <Typography.Paragraph className={'related-content-title'}>{content?.title}</Typography.Paragraph>
        <div className='related-content-links'>
          {content?.sections?.map((value, index) => (
            <a href={value.subTitle} className='related-content-link' target={value.subTitle?.includes('http') ? '_blank' : ''} key={index}>
              <img src={`${location}${value?.media?.[0].url}`} alt='' />
              <span>{value.title}</span>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export { Related }
