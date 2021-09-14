import { FC, useState } from 'react'
import { Row, Col, Divider } from 'antd'
import '../../../our-vision/sections/vision/Vision.less'
import './Cards.less'
import Background from './images/Rectangle_253.svg'
import { useContentQuery } from '../../../../graphql'
import { BsCheck } from 'react-icons/bs'
import { ActionButton } from '../../../../components/button/ActionButton'
import { NavLink } from 'react-router-dom'

type CardProps = {
  title: string
  subTitle: string
  text: string
  description: string
  backgroundColor: string
}

const Card: FC<CardProps> = ({ title, subTitle, text, description, backgroundColor }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={backgroundColor === 'white' ? 'card-block white' : 'card-block'}>
      <p className={'card-type'}>{title}</p>
      <div className={'card-price'}>
        ${subTitle}
        <span> / year</span>
      </div>
      <p className={'card-info'}>{description}</p>
      <Divider
        style={backgroundColor !== 'white' ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } : { backgroundColor: 'rgba(9, 20, 50, 0.5)' }}
      />
      <ul className={visible ? 'active-menu' : ''}>
        {text.split(',')?.map(it => (
          <li key={it} className={'card-item'}>
            <BsCheck className={'check-item'} />
            {it}
          </li>
        ))}
      </ul>
      <p onClick={() => setVisible(!visible)} className={'show-button'}>
        {visible ? 'Show less' : 'Show more'}
      </p>
      <NavLink className={'action-button-wrapper'} to={'/'}>
        <ActionButton title={'GET STARTED'} type={'default'} size={'small'} styles={{ width: '100%', marginTop: 40 }} />
      </NavLink>
    </div>
  )
}

export const Cards: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'pricing-cards',
    },
  })
  const content = data?.content

  return (
    <section className={'vision'}>
      <img src={Background} alt={''} className={'background'} />
      <div className={'content'}>
        <div className={'wrapper'}>
          <div className={'cards-title'}>{content?.title}</div>
          <div className={'cards-text'}>{content?.description}</div>
          <Row className={'cards-container'} justify={'space-between'} gutter={[20, 0]}>
            {content?.sections?.map(it => (
              <Col span={6}>
                <Card {...it} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  )
}
