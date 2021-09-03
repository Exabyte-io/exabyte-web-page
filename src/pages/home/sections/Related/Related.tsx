import { FC } from 'react'
import { Layout, Typography } from 'antd'
import RelatedBgLg from './images/related-bg-lg.svg'
import RelatedBgSm from './images/related-bg-sm.svg'
import GoogleDocsIcon from './images/google-docs.svg'
import YouTubeIcon from './images/youtube.svg'
import FileIcon from './images/file.svg'
import './Related.less'

const Related: FC = () => {
  return (
    <Layout className={'section related'}>
      <img src={RelatedBgLg} alt='' className='related-background-img' />
      <img src={RelatedBgSm} alt='' className='related-background-img-mobile' />
      <div className='related-content'>
        <Typography.Paragraph className={'related-content-title'}>RELATED INFORMATION</Typography.Paragraph>
        <div className='related-content-links'>
          <a href={'https://docs.exabyte.io/'} className='related-content-link'>
            <img src={GoogleDocsIcon} alt='' />
            <span>Documentation</span>
          </a>
          <a href={'https://www.youtube.com/channel/UCL4UmkYffcskh_BLW9JVNcw/videos'} className='related-content-link'>
            <img src={YouTubeIcon} alt='' />
            <span>Video Tutorials</span>
          </a>
          <a href={'https://docs.exabyte.io/pricing/service-levels/'} className='related-content-link'>
            <img src={FileIcon} alt='' />
            <span>Pricing</span>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export { Related }
