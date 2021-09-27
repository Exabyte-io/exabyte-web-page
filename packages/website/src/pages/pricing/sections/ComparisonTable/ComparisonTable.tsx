import { FC } from 'react'
import { Layout, Typography } from 'antd'
import BackgroundMb from './images/bg-mb.svg'
import BackgroundLg from './images/bg-lg.svg'
import './ComparisonTable.less'
import { useContentQuery } from '../../../../graphql'
import Features from './images/features.svg'
import Line from './images/line.svg'
import Check from './images/check.svg'
import { Link } from 'react-router-dom'

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
          <ul className={'content-wrapper-list'}>
            {content?.sections?.map((value, index) => (
              <li className={'content-wrapper-list-item'} key={index}>
                <div className={'top'}>
                  <Typography.Paragraph className={'title'}>{value.title}</Typography.Paragraph>
                  <Typography.Paragraph className={'description'}>{value.description}</Typography.Paragraph>
                </div>
                <div className={'under-top'}>
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index !== 0 && <img src={Check} alt={'image'} />}
                  {index !== 2 && <Typography.Paragraph className={'number'}>1</Typography.Paragraph>}
                  {index === 2 && <Typography.Paragraph className={'number'}>5</Typography.Paragraph>}
                  {index === 0 && <Typography.Paragraph className={'text'}>Normal</Typography.Paragraph>}
                  {index === 1 && <Typography.Paragraph className={'text'}>High</Typography.Paragraph>}
                  {index === 2 && <Typography.Paragraph className={'text'}>Urgent</Typography.Paragraph>}
                  {index === 0 && <Typography.Paragraph className={'number'}>1</Typography.Paragraph>}
                  {index === 1 && <Typography.Paragraph className={'number'}>2</Typography.Paragraph>}
                  {index === 2 && <Typography.Paragraph className={'number'}>10</Typography.Paragraph>}
                </div>
                <div className={'center'}>
                  {index === 0 && <Typography.Paragraph className={'number'}>10 GB</Typography.Paragraph>}
                  {index === 1 && <Typography.Paragraph className={'number'}>10 GB</Typography.Paragraph>}
                  {index === 2 && <Typography.Paragraph className={'number'}>10 GB</Typography.Paragraph>}
                  {index === 0 && <Typography.Paragraph className={'number'}>1 GB</Typography.Paragraph>}
                  {index === 1 && <Typography.Paragraph className={'number'}>1 GB</Typography.Paragraph>}
                  {index === 2 && <Typography.Paragraph className={'number'}>1 GB</Typography.Paragraph>}
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index !== 0 && <img src={Check} alt={'image'} />}
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index === 1 && <Typography.Paragraph className={'number'}>$ 10</Typography.Paragraph>}
                  {index === 2 && <img src={Line} alt={'image'} />}
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index === 1 && <Typography.Paragraph className={'number'}>$ 100</Typography.Paragraph>}
                  {index === 2 && <Typography.Paragraph className={'number'}>$ 1000</Typography.Paragraph>}
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index === 1 && <img src={Line} alt={'image'} />}
                  {index === 2 && <Typography.Paragraph className={'number'}>$ 1000</Typography.Paragraph>}
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index === 1 && <img src={Line} alt={'image'} />}
                  {index === 2 && <Typography.Paragraph className={'number'}>$ 20</Typography.Paragraph>}
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index === 1 && <img src={Line} alt={'image'} />}
                  {index === 2 && <Typography.Paragraph className={'number'}>$ 200</Typography.Paragraph>}
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index === 1 && <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>}
                  {index === 2 && <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>}
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index === 1 && <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>}
                  {index === 2 && <Typography.Paragraph className={'number'}>$ 0,2</Typography.Paragraph>}
                  {index === 0 && <img src={Line} alt={'image'} />}
                  {index === 1 && <Typography.Paragraph className={'number'}>$ 0,12</Typography.Paragraph>}
                  {index === 2 && <Typography.Paragraph className={'number'}>$ 0,12</Typography.Paragraph>}
                </div>
                <div className={'bottom'}>
                  <p className={'number'}>
                    ${`${value.subTitle}`}
                    <span className={'year'}> / year</span>
                  </p>
                  <Link to={'/'} className={'link'}>
                    GET STARTED
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export { ComparisonTable }
