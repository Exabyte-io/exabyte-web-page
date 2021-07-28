import { FC, HTMLAttributes } from 'react'
import { Col, Typography } from 'antd'
import './index.less'

type CardProps = HTMLAttributes<Element> & {
  image: string
  title: string
  description: string
}

const Card: FC<Partial<CardProps>> = ({ image = '', title, description, style }) => (
  <Col className={'card-wrapper'} style={style}>
    <img src={image} alt={title} style={{ marginBottom: 24 }} />
    <Typography.Paragraph className={'card-wrapper-title'}>{title}</Typography.Paragraph>
    <Typography.Paragraph className={'card-wrapper-description'}>{description}</Typography.Paragraph>
  </Col>
)

export { Card }
