import { FC, useEffect, useRef } from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import './Hero.less'
import { ActionButton } from '../../../components/button/actionButton'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UnlockSvg from '../images/unlock.svg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import previewImg from '../images/preview-mb.png'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testVideo from '../../../../public/video/videoplayback.mp4'

const Hero: FC = () => {


  function playPause() {
    const vid = document.getElementById('myVideo')
    let isPlaying = false

    if (isPlaying) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
      vid?.pause()

    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
      vid?.play()

    }
    isPlaying = !isPlaying
  }


  return (
    <Layout className={'section home-hero'}>
      <Row align={'middle'} justify={'space-between'} className={'container'}>
        <Typography.Paragraph className={'home-hero-title'}>Materials Modeling 2.0</Typography.Paragraph>
        <Typography.Paragraph className={'home-hero-description'}>
          Exabyte.io is a cloud-native digital materials R&D platform. Design structures, run simulations, and build
          models online alongside scientists on your team and worldwide.
        </Typography.Paragraph>
        <ActionButton title={'Get Started Now'} type={'default'} size={'medium'} styles={{ marginBottom: '17px' }} />
        <Row style={{ marginBottom: '64px' }}>
          <UnlockSvg style={{ marginRight: '12px' }} />
          <Typography.Paragraph className={'home-hero-unlock'}>We support Open Access</Typography.Paragraph>
        </Row>
        {/*video wrapper*/}
        <Row style={{ position: 'relative' }}>
          <video width={'100%'} poster={previewImg} id={'myVideo'}>
            <source src={testVideo} type='video/mp4;' />
          </video>
          <Col className={'play-wrapper'}>
            <button className={'play-wrapper-btn'} onClick={playPause}>
              <svg width='15' height='18' viewBox='0 0 15 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.1986 8.25039L1.71514 1.04345C1.39802 0.860515 1.00828 0.860515 0.691504 1.04345C0.374731 1.22605 0.179688 1.56392 0.179688 1.9298V16.3451C0.179688 16.7109 0.374731 17.0488 0.691504 17.2314C0.849891 17.3241 1.02661 17.3687 1.20332 17.3687C1.38004 17.3687 1.55675 17.3227 1.71514 17.2314L14.1986 10.0245C14.5161 9.84152 14.7101 9.50365 14.7101 9.13777C14.7101 8.77189 14.5154 8.43368 14.1986 8.25039Z'
                  fill='#1F1A6B' />
              </svg>
            </button>
            <Typography.Paragraph className={'play-wrapper-text'}>Duration: 4 minutes</Typography.Paragraph>
          </Col>
        </Row>
        {/*video wrapper*/}
      </Row>
    </Layout>
  )
}

export { Hero }
