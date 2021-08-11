import { FC } from 'react'
import { Layout } from 'antd'
import BackgroundLg from './images/background-lg.svg'
import LaptopDecoration from './images/laptop.svg'
import './FasterMaterials.less'
import { ActionButton } from '../../../../components/button/ActionButton'

const fasterMaterialsCards = [
  {
    title: 'SEMICONDUCTOR',
    text: 'Emerging memory technology and TCAD: speed up material selection and process optimization for next-generation devices.',
  },
  {
    title: 'MANUFACTURING',
    text: 'Predict and assess the stability of lightweight metallic alloys, thin-film oxide compounds, composite materials.',
  },
  {
    title: 'ENERGY',
    text: 'IT engineers, materials- and data scientists collaborate to speed up the design of new compounds from atoms up.',
  },
]

const FasterMaterials: FC = () => {
  return (
    <Layout className={'section faster-materials'}>
      <img src={BackgroundLg} alt='' className={'background-img'} />
      <img src={LaptopDecoration} alt='' className={'laptop-decoration'} />
      <div className='faster-materials-content'>
        <div className='faster-materials-content-title'>Faster Materials R&D For</div>
        <div className='faster-materials-content-info'>
          {fasterMaterialsCards.map(card => (
            <div className='faster-materials-content-info-card'>
              <div className='faster-materials-content-info-card-title'>{card.title}</div>
              <div className='faster-materials-content-info-card-text'>{card.text}</div>
            </div>
          ))}
        </div>
        <div className='faster-materials-content-buttons'>
          <ActionButton title={'Get started now'} type={'default'} size={'medium'} />
          <a href={'#'} className='faster-materials-content-button'>
            Contact us
          </a>
        </div>
      </div>
    </Layout>
  )
}

export { FasterMaterials }
