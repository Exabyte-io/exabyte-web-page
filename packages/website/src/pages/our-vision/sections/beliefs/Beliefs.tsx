import { FC } from 'react'
import { Col, Row } from 'antd'
import './Beliefs.less'

export const Beliefs: FC = () => (
  <section className={'beliefs'}>
    <div className={'heading'}>Here is what we believe</div>
    <div className={'container'}>
      <Row gutter={{ sm: 0, md: 151 }}>
        <Col sm={24} md={12}>
          <article className={'item'}>
            <div className={'number'}>01</div>
            <div className={'belief'}>
              Better modeling cuts the time-to-market for new materials and resulting products in many application
              areas.
            </div>
          </article>
        </Col>
        <Col sm={24} md={12}>
          <article className={'item'}>
            <div className={'number'}>02</div>
            <div className={'belief'}>
              Researchers must be able to rapidly learn and adopt any state-of-the-art modeling tools, whether they are
              intimately familiar with the tool or not.
            </div>
          </article>
        </Col>
      </Row>
      <Row gutter={{ sm: 0, md: 151 }}>
        <Col sm={24} md={12}>
          <article className={'item'}>
            <div className={'number'}>03</div>
            <div className={'belief'}>
              Simulations deliver the most precise answers when modelers and experimentalists collaborate efficiently,
              using agreed standards.
            </div>
          </article>
        </Col>
        <Col sm={24} md={12}>
          <article className={'item'}>
            <div className={'number'}>04</div>
            <div className={'belief'}>
              Cloud computing is taking the lead in performance, scalability, and security for high-performance
              computing (HPC) workflows, including materials modeling.
            </div>
          </article>
        </Col>
      </Row>
    </div>
  </section>
)
