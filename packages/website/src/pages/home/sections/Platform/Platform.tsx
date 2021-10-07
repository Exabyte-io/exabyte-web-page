import { FC } from 'react'
import { Layout, Typography } from 'antd'
import PlatformBgMb from './images/platform-bg-mb.svg'
import PlatformBgLg from './images/platform-bg-lg.svg'
import { useMediaQuery } from 'react-responsive'
import { ActionButton } from '../../../../components/button/ActionButton'
import { useContentQuery } from '../../../../graphql'
import './Platform.less'

const Platform: FC = () => {
  const md = useMediaQuery({ minWidth: 768 })

  const { data } = useContentQuery({
    variables: {
      slug: 'main-platform',
    },
  })
  const content = data?.content

  return (
    <Layout className={'platform-wrapper'}>
      <img src={!md ? PlatformBgMb : PlatformBgLg} alt={'Matera'} className={'home-hero-img'} />
      <div className={'platform-wrapper-content'}>
        <Typography.Paragraph className={'platform-wrapper-content-title'}>{content?.title}</Typography.Paragraph>
        <Typography.Paragraph className={'platform-wrapper-content-description'}>{content?.description}</Typography.Paragraph>
      </div>
      <div className={'platform-wrapper-button'}>
        <ul className={'cards-list'}>
          {content?.sections?.map((value, index) => (
            <li className={'cards-list-item'} key={index}>
              <p className={'number'}>{value.title}</p>
              <p className={'description'}>{value.subTitle}</p>
            </li>
          ))}
        </ul>
        <ActionButton title={content?.button?.link?.text} type={'default'} size={'medium'} src={content?.button?.link?.url} />
      </div>
    </Layout>
  )
}

export { Platform }
