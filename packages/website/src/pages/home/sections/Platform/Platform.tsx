import { FC } from 'react'
import { Layout, Typography } from 'antd'
import PlatformBgMb from './images/platform-bg-mb.svg'
import PlatformBgLg from './images/platform-bg-lg.svg'
import './Platform.less'
import { useMediaQuery } from 'react-responsive'
import { ActionButton } from '../../../../components/button/ActionButton'
import { useContentQuery } from '../../../../graphql'

const Platform: FC = () => {
  const md = useMediaQuery({ minWidth: 768 })
  // const xl = useMediaQuery({ minWidth: 992 })

  const { data } = useContentQuery({
    variables: {
      slug: 'main-page-hero',
    },
  })
  const content = data?.content?.sections?.[0]

  return (
    <Layout className={'section platform-wrapper'}>
      <img src={!md ? PlatformBgMb : PlatformBgLg} alt={'Matera'} className={'home-hero-img'} />
      <div className={'platform-wrapper-content'}>
        <Typography.Paragraph className={'platform-wrapper-content-title'}>{content?.title}</Typography.Paragraph>
        <Typography.Paragraph className={'platform-wrapper-content-description'}>
          {content?.subTitle}
        </Typography.Paragraph>
      </div>
      <div className={'platform-wrapper-button'}>
        <ActionButton
          title={'CREATE A FREE ACCOUNT'}
          type={'default'}
          size={'medium'}
          src={'https://platform.exabyte.io/register'}
        />
      </div>
    </Layout>
  )
}

export { Platform }
