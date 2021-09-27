import { FC } from 'react'
import { Layout, Typography } from 'antd'
import BackgroundMb from './images/bg-mb.svg'
import BackgroundLg from './images/bg-lg.svg'
import './ComparisonTable.less'
import { useContentQuery } from '../../../../graphql'
import Features from './images/features.svg'

const ComparisonTable: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-cards',
    },
  })

  const content = data?.content

  return (
    <Layout className={'comparison-table'}>
      <img className={'comparison-table-bg-mb'} src={BackgroundMb} alt={'img'} />
      <img className={'comparison-table-bg-lg'} src={BackgroundLg} alt={'img'} />
      <div className={'comparison-table-wrapper container'}>
        <Typography.Paragraph className={'title'}>{content?.title}</Typography.Paragraph>
        <Typography.Paragraph className={'description'}>{content?.description}</Typography.Paragraph>
        <div className={'content-wrapper'}>
          <div className={'content-wrapper-aside'}>
            <div className={'feature-wrapper'}>
              <img src={Features} alt={'image'} />
              <Typography.Paragraph className={'feature-wrapper-title'}>Features</Typography.Paragraph>
            </div>
            <div className={'private-data'}>
              <Typography.Paragraph className={'private-data-title'}>Private Data</Typography.Paragraph>
              <Typography.Paragraph className={'private-data-title'}>Account Members</Typography.Paragraph>
              <Typography.Paragraph className={'private-data-title'}>Support Severity</Typography.Paragraph>
              <Typography.Paragraph className={'private-data-title'}>Entity Limits: Projects</Typography.Paragraph>
            </div>
            <div className={'disc-space'}>
              <Typography.Paragraph className={'disc-space-title'}>Disk Space</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Dropbox Space</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Command-line Access</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Monthly Subscription Fee</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Yearly Subscription</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Minimum Compute Allocation</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Additional Account Members - Member/Month</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Additional Account Members - Member/Year</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Additional Disk Space - GB/Month</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Additional Dropbox Space - GB/Month</Typography.Paragraph>
              <Typography.Paragraph className={'disc-space-title'}>Ordinary Compute Price - Core-Hour </Typography.Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { ComparisonTable }
