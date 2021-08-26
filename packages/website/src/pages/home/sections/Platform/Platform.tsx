import { FC } from 'react'
import { Layout, Typography } from 'antd'
import PlatformBgMb from './images/platform-bg-mb.svg'
import PlatformBgLg from './images/platform-bg-lg.svg'
import './Platform.less'
import { useMediaQuery } from 'react-responsive'
import { ActionButton } from '../../../../components/button/ActionButton'

const Platform: FC = () => {
  const md = useMediaQuery({ minWidth: 768 })
  // const xl = useMediaQuery({ minWidth: 992 })

  return (
    <Layout className={'section platform-wrapper'}>
      <img src={!md ? PlatformBgMb : PlatformBgLg} alt={'Matera'} className={'home-hero-img'} />
      <div className={'platform-wrapper-content'}>
        <Typography.Paragraph className={'platform-wrapper-content-title'}>
          The Exabyte.io Platform{' '}
        </Typography.Paragraph>
        <Typography.Paragraph className={'platform-wrapper-content-description'}>
          Exabyte.io helps chemists and materials scientists organize their work and collaborate in a single easy-to-use
          cloud environment, allowing to rapidly learn and deploy a variety of modeling tools able to accelerate the R&D
          phase and provide the foundation for faster product development.
        </Typography.Paragraph>
      </div>
      <div className={'platform-wrapper-button'}>
        <ActionButton title={'CREATE A FREE ACCOUNT'} type={'default'} size={'medium'} />
      </div>
    </Layout>
  )
}

export { Platform }
