import { FC } from 'react'
import { Layout, Row, Typography } from 'antd'
import { ActionButton } from '../../../../components/button/actionButton'
import heroMb from '../../images/home-hero-mb.svg'
import heroLg from '../../images/home-hero-lg.svg'
import { useMediaQuery } from 'react-responsive'
import { AccessButton } from '../../../../components/button/AccessButton'
import './Hero.less'

const Hero: FC = () => {
  const md = useMediaQuery({ minWidth: 768 })
  const xl = useMediaQuery({ minWidth: 992 })
  console.log(heroMb)
  return (
    <Layout className={'section home-hero'}>
      {!md && <img src={heroMb} alt={''} className={'home-hero-img'} />}
      {md && <img src={heroLg} alt={''} className={'home-hero-img'} />}
      <Row align={'middle'} justify={'space-between'} className={'container section home-hero-absolute'}>
        <Typography.Paragraph className={'home-hero-title'}>Materials Modeling 2.0</Typography.Paragraph>
        <Typography.Paragraph className={'home-hero-description'}>
          Exabyte.io is a cloud-native digital materials R&D platform. Design structures, run simulations, and build
          models online alongside scientists on your team and worldwide.
        </Typography.Paragraph>
        <Row>
          <ActionButton
            title={'Get Started Now'}
            type={'default'}
            size={'medium'}
            styles={xl ? { marginRight: 32 } : { marginBottom: 17 }}
          />
          <AccessButton style={!md ? { marginBottom: 64 } : undefined} />
        </Row>
      </Row>
    </Layout>
  )
}

export { Hero }
