import { FC } from 'react'
import { Col, Layout, Row, Typography } from 'antd'
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
      <div
        className={'platform-wrapper-button'}
      >
        <ActionButton title={'CREATE A FREE ACCOUNT'} type={'default'} size={'medium'} />
      </div>
    </Layout>
  )
}

export { Platform }