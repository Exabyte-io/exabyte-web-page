import { FC } from 'react'
import { Avatar, Card, Col, Layout, Row, Typography } from 'antd'
import './ReadyFor.less'
import cardImg1 from '../ReadyFor/images/card1.svg'
import cardImg2 from '../ReadyFor/images/card2.svg'
import cardImg3 from '../ReadyFor/images/card3.svg'

type CardProps = typeof Card.Meta.defaultProps

const info: CardProps[] = [
  {
    avatar: cardImg1,
    title: 'PRODUCTIVITY',
    description: 'Boost productivity through our purpose-built easy-to-use, modern, and highly customizable interface.',
  },
  {
    avatar: cardImg2,
    title: 'ORGANIZING',
    description: 'Accelerate work by organizing the simulations and data landscape in a single searchable environment.',
  },
  {
    avatar: cardImg3,
    title: 'COMPUTING',
    description: 'Scale up with the power of secure high-performance computing in the cloud when you need it.',
  },
]

const ReadyForCard: FC<CardProps> = ({ avatar, ...metaProps }) => (
  <Card bordered={false} cover={<Avatar src={avatar} shape={'square'} size={52} style={{ marginBottom: 24 }} />}>
    <Card.Meta {...metaProps} />
  </Card>
)

const ReadyFor: FC = () => (
  <Layout className={'section ready-for-wrapper'}>
    <Row
      align={'middle'}
      justify={'space-between'}
      className={'container'}
      style={{ flexDirection: 'row-reverse', background: 'transparent' }}
    >
      <Col className={'top-wrapper'} md={10} lg={8}>
        <Typography.Paragraph className={'top-wrapper-title'}>Ready For Material Gains?</Typography.Paragraph>
        <Typography.Paragraph className={'top-wrapper-under-title'}>New Solar Cells?</Typography.Paragraph>
        <Typography.Paragraph className={'top-wrapper-description'}>
          Digitally transform R&D practices for new materials and chemicals with our machine intelligence.
        </Typography.Paragraph>
      </Col>
      <Row gutter={[32, 32]} justify={'space-around'}>
        {info.map((props, index) => (
          <Col key={index} md={7} xl={6}>
            <ReadyForCard {...props} />
          </Col>
        ))}
      </Row>
    </Row>
  </Layout>
)

export { ReadyFor }
