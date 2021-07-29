import { FC } from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import heroMb from '../../images/home-hero-mb.svg'
import heroLg from '../../images/home-hero-lg.svg'
import { useMediaQuery } from 'react-responsive'
import { ActionButton } from '../../../../components/button/ActionButton'
import './Hero.less'
import { AccessButton } from '../../../../components/button/AccessButton'

const Hero: FC = () => {
  const md = useMediaQuery({ minWidth: '768px' })
  // const xl = useMediaQuery({ minWidth: 992 })

  return (
    <Layout className={'section home-hero'}>
      <img src={!md ? heroMb : heroLg} alt={'Matera'} className={'home-hero-img'} />
      <Row align={'middle'} justify={'space-between'} className={'container section home-hero-absolute'}>
        <Col>
          <Typography.Paragraph className={'home-hero-title'}>Materials Modeling 2.0</Typography.Paragraph>
        </Col>
        <Col>
          <Typography.Paragraph className={'home-hero-description'}>
            Exabyte.io is a cloud-native digital materials R&D platform. Design structures, run simulations, and build
            models online alongside scientists on your team and worldwide.
          </Typography.Paragraph>
        </Col>
        <Row align={'middle'} gutter={[0, 17]} style={{width:"100%"}}>
          <Col xs={24} sm={24} md={9} lg={7} xl={6}>
            <ActionButton title={'Get Started Now'} type={'default'} size={'medium'} />
          </Col>
          <Col>
            <AccessButton />
          </Col>
        </Row>
      </Row>
    </Layout>
  )
}

export { Hero }
