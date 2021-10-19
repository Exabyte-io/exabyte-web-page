import { FC } from 'react'
import { Col, Row } from 'antd'
import '../../../our-vision/sections/beliefs/Beliefs.less'
import './CostStructure.less'
import { useContentQuery } from '../../../../graphql'
import One from './images/1.svg'
import Two from './images/2.svg'
import Three from './images/3.svg'

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
          {content?.sections?.map((it, index) => (
            <Col sm={24} md={12} lg={8} key={index}>
              <article className={'item'}>
                {index === 0 && <img src={One} alt={'image'} />}
                {index === 1 && <img src={Two} alt={'image'} />}
                {index === 2 && <img src={Three} alt={'image'} />}
                <div className={'belief'}>{it?.description}</div>
              </article>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
