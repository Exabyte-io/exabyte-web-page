import { FC } from 'react'
import { Layout, Row, Typography } from 'antd'
import './Hero.less'
import { ActionButton } from '../../../components/button/actionButton'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UnlockSvg from '../images/unlock.svg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import previewImg from '../images/preview-mb.png'

const Hero: FC = () => {
  return (
    <Layout className={'section home-hero'}>
      <Row align={'middle'} justify={'space-between'} className={'container'}>
        <Typography.Paragraph className={'home-hero-title'}>Materials Modeling 2.0</Typography.Paragraph>
        <Typography.Paragraph className={'home-hero-description'}>Exabyte.io is a cloud-native digital materials R&D
          platform. Design structures, run
          simulations, and build models online alongside scientists on your team and worldwide.</Typography.Paragraph>
        <ActionButton title={'Get Started Now'} type={'default'} size={'medium'} styles={{ marginBottom: '17px' }} />
        <Row style={{marginBottom:"64px"}}>
          <UnlockSvg style={{marginRight:"12px"}}/>
          <Typography.Paragraph className={'home-hero-unlock'}>We support Open Access</Typography.Paragraph>
        </Row>
       <video width={"100%"} poster={previewImg}>
         <source src={"https://youtu.be/TSyI0r2kO4E"} type='video/mp4;' />
       </video>
      </Row>
    </Layout>
  )
}

export { Hero }