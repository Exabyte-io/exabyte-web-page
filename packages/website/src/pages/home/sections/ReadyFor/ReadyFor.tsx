import { FC } from 'react'
import { Avatar, Card, Col, Layout, Row, Typography } from 'antd'
import './ReadyFor.less'
import { Content, useContentQuery } from '../../../../graphql'

type CardProps = Content & {
  subTitle?: string
  media?: {
    id?: string
    url?: string
  }[]
}

const ReadyForCard: FC<CardProps> = ({ title, media, subTitle }) => (
  <Card bordered={false} cover={<Avatar src={media?.[0].url} shape={'square'} size={52} style={{ marginBottom: 24 }} />}>
    <Card.Meta title={title} description={subTitle} />
  </Card>
)

const ReadyFor: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'main-page-ready-for',
    },
  })
  const content = data?.content

  return (
    <Layout className={'section ready-for-wrapper'}>
      <Row
        align={'middle'}
        justify={'space-between'}
        className={'container'}
        style={{ flexDirection: 'row-reverse', background: 'transparent' }}
      >
        <Col className={'top-wrapper'} md={10} lg={8}>
          <Typography.Paragraph className={'top-wrapper-title'}>{content?.title}</Typography.Paragraph>
          <Typography.Paragraph className={'top-wrapper-under-title'}>{content?.subtitle}</Typography.Paragraph>
          <Typography.Paragraph className={'top-wrapper-description'} style={{ marginBottom: '0' }}>
            {content?.description}
          </Typography.Paragraph>
        </Col>
        <Row gutter={[32, 32]} justify={'space-around'}>
          {content?.sections?.map((obj, index) => (
            <Col key={index} md={7} xl={6}>
              <ReadyForCard {...obj} />
            </Col>
          ))}
        </Row>
      </Row>
    </Layout>
  )
}

export { ReadyFor }
