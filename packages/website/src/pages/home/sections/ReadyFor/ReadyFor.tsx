import { FC } from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import './ReadyFor.less'
import { Card } from '../../../../components/card/Card'
import cardImg1 from '../ReadyFor/images/card1.svg'
import cardImg2 from '../ReadyFor/images/card2.svg'
import cardImg3 from '../ReadyFor/images/card3.svg'

const info = [
  {
    image: cardImg1,
    title: 'PRODUCTIVITY',
    description: 'Boost productivity through our purpose-built easy-to-use, modern, and highly customizable interface.',
  },
  {
    image: cardImg2,
    title: 'ORGANIZING',
    description: 'Accelerate work by organizing the simulations and data landscape in a single searchable environment.',
  },
  {
    image: cardImg3,
    title: 'COMPUTING',
    description: 'Scale up with the power of secure high-performance computing in the cloud when you need it.',
  },
]

const ReadyFor: FC = () => {
  return (
    <Layout className={'section ready-for-wrapper'}>
      <Row align={'middle'} justify={'space-between'} className={'container'}>
        <Col className={'top-wrapper'}>
          <Typography.Paragraph className={'top-wrapper-title'}>Ready For Material Gains?</Typography.Paragraph>
          <Typography.Paragraph className={'top-wrapper-under-title'}>New Solar Cells?</Typography.Paragraph>
          <Typography.Paragraph className={'top-wrapper-description'}>Digitally transform R&D practices for new
            materials and chemicals with our machine intelligence.</Typography.Paragraph>
        </Col>
        <Row>
          {info.map((value, index) => (
              <Card img={value.image} title={value.title} description={value.description} key={index} />
          ))}
        </Row>
      </Row>
    </Layout>
  )
}

export { ReadyFor }