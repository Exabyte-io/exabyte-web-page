import { FC } from 'react'
import { Layout, Typography } from 'antd'
// import Background from './images/Rectangle_252.svg'
import Image from './images/image.svg'
import './ClusterPricing.less'
import { useContentQuery } from '../../../../graphql'
import ReactMarkdown from 'react-markdown'

const ClusterPricing: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-content',
    },
  })
  const content = data?.content?.sections?.[0]

  return (
    <Layout className={'section cluster'}>
      <div className={'container cluster-wrapper'}>
        <img src={Image} alt={''} className={'cluster-img'} />
        <div className='cluster-content'>
          <Typography.Paragraph className={'cluster-content-title'}>{content?.title}</Typography.Paragraph>
          <div className='cluster-content-links'>
            <p className='cluster-content-p'>
              <ReactMarkdown children={content?.text ?? ''} />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { ClusterPricing }
