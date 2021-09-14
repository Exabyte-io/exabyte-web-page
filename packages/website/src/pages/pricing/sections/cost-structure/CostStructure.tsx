import { FC } from 'react'
import { Col, Row } from 'antd'
import '../../../our-vision/sections/beliefs/Beliefs.less'
import './CostStructure.less'
import { useContentQuery } from '../../../../graphql'

export const CostStructure: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-cost-structure',
    },
  })
  const content = data?.content

  return (
    <section className={'beliefs'}>
      <div className={'heading'}>
        <p className={'heading-title'}>{content?.title}</p>
        <p className={'heading-text'}>{content?.description}</p>
      </div>
      <div className={'container'}>
        <Row gutter={{ sm: 0, md: 151 }}>
          {content?.sections?.map(it => (
            <Col sm={24} md={12}>
              <article className={'item'}>
                <div className={'number'}>
                  <span>{it?.title} </span>
                  <span className={'cost-title'}>{it?.subTitle}</span>
                </div>
                <div className={'belief'}>{it?.description}</div>
              </article>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
