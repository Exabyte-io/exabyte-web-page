import { CSSProperties, FC, SVGProps } from 'react'
import { Col, Typography } from 'antd'
import './Card.less'

type CardProps = {
  image: string | FC<SVGProps<SVGElement>>,
  title: string,
  description: string,
  style?: CSSProperties
}

const Card: FC<CardProps> = ({ image ,title, description, style }) => {
  const Image = typeof image === 'string' ? () => <img alt={''} src={image}/> : image
  return (
    <Col className={'card-wrapper'} style={style}>
      <Image style={{ marginBottom: 24 }} />
      <Typography.Paragraph className={'card-wrapper-title'}>{title}</Typography.Paragraph>
      <Typography.Paragraph className={'card-wrapper-description'}>{description}</Typography.Paragraph>
    </Col>
  )
}


export { Card }