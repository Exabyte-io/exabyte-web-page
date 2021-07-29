import { FC } from 'react'
import { Layout } from 'antd'
import PlatformBgMb from './images/platform-bg-mb.svg'
import PlatformBgLg from './images/platform-bg-lg.svg'
import './Platform.less'
import { useMediaQuery } from 'react-responsive'

const Platform: FC = () => {
  const md = useMediaQuery({ minWidth: 768 })
  // const xl = useMediaQuery({ minWidth: 992 })

  return (
    <Layout className={'section platform-wrapper'}>
      <img src={!md ? PlatformBgMb : PlatformBgLg} alt={'Matera'} className={'home-hero-img'} />
    </Layout>
  )
}

export { Platform }
