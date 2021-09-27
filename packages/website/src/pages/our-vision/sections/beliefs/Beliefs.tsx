import { FC } from 'react'
import { Col, Row } from 'antd'
import './Beliefs.less'
import { useContentQuery } from '../../../../graphql'

export const Beliefs: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'vision-beliefs',
    },
  })
  const content = data?.content

  return (
    <section className={'beliefs'}>
      <div className={'heading'}>{content?.title}</div>
      <div className={'container'}>
        <Row gutter={{ sm: 0, md: 151 }}>
          {content?.sections?.map(it => (
            <Col sm={24} md={12}>
              <article className={'item'}>
                <div className={'number'}>{it?.title}</div>
                <div className={'belief'}>{it?.subTitle}</div>
              </article>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
