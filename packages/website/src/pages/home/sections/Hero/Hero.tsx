import { FC } from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import heroMb from '../../images/home-hero-mb.svg'
import heroLg from '../../images/home-hero-lg.svg'
import { useMediaQuery } from 'react-responsive'
import { ActionButton } from '../../../../components/button/ActionButton'
import './Hero.less'
import { AccessButton } from '../../../../components/button/AccessButton'

const Hero: FC = () => {
  const xl = useMediaQuery({ minWidth: 992 })
  return (
    <Layout className={'section home-hero'}>
      <img src={!xl ? heroMb : heroLg} alt={'Matera'} className={'home-hero-img'} />
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
        <Row align={'middle'} gutter={32}>
          <Col>
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
