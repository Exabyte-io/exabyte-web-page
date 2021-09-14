import { FC } from 'react'
import { Row, Col, Divider } from 'antd'
import './CategoryBased.less'
import { useContentQuery } from '../../../../graphql'

export const CategoryBased: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-content',
    },
  })
  const content = data?.content

  return (
    <section className={'category-section'}>
      <p className={'category-title'}>{content?.title}</p>
      <p className={'category-text'}>{content?.description}</p>

      <Row className={'category-row'} justify={'center'}>
        <Col span={4}>
          <p>Cost Category</p>
        </Col>
        <Col span={4}>
          <p className={'category-info'}>Debug</p>
        </Col>
        <Col span={4}>
          <p className={'category-info'}>Ordinary</p>
        </Col>
        <Col span={4}>
          <p className={'category-info'}>Saving</p>
        </Col>
      </Row>
      <Divider />
      <Row className={'category-row'} justify={'center'}>
        <Col span={4}>
          <p>Change Factor</p>
        </Col>
        <Col span={4}>
          <p className={'category-number'}>2.0</p>
        </Col>
        <Col span={4}>
          <p className={'category-number'}>1.0</p>
        </Col>
        <Col span={4}>
          <p className={'category-number'}>0.2</p>
        </Col>
      </Row>
    </section>
  )
}
