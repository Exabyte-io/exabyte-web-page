import { FC } from 'react'
import { Layout, Row, Typography } from 'antd'
import { ActionButton } from '../../../components/button/actionButton'
import previewImg from '../images/preview-mb.png'
import HeroImgMb from '../images/home-hero-mb.svg'
import HeroImgLg from '../images/home-hero-lg.svg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import testVideo from '../../../../public/video/videoplayback.mp4'
import { useMediaQuery } from 'react-responsive'
import { AccessBtn } from '../../../components/button/accessBtn'
import './Hero.less'

const Hero: FC = () => {
  const md = useMediaQuery({ minWidth: '768px' })
  // const xl = useMediaQuery({ minWidth: '992px' })

  return (
    <Layout className={'section home-hero'}>
      {!md && <HeroImgMb className={'home-hero-img'} />}
      {md && <HeroImgLg className={'home-hero-img'} />}
      <Row align={'middle'} justify={'space-between'} className={'container'}>
        <Typography.Paragraph className={'home-hero-title'}>Materials Modeling 2.0</Typography.Paragraph>
        <Typography.Paragraph className={'home-hero-description'}>
          Exabyte.io is a cloud-native digital materials R&D platform. Design structures, run simulations, and build
          models online alongside scientists on your team and worldwide.
        </Typography.Paragraph>
        <ActionButton title={'Get Started Now'} type={'default'} size={'medium'} styles={{ marginBottom: '17px' }} />
        <AccessBtn style={!md ? { marginBottom: '64px' } : undefined} />
        {/*hero video */}
        <video poster={previewImg}>
          <source/>
        </video>
        {/*hero video */}
      </Row>
    </Layout>
  )
}

export { Hero }
