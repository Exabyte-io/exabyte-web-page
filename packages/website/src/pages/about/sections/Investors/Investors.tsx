import { FC } from 'react'
import { Layout } from 'antd'
import './Investors.less'
import Investor1 from './images/investor-1.svg'
import Investor2 from './images/investor-2.svg'
import Investor3 from './images/investor-3.svg'

type InvestorCard = {
  photo: string
  name: string
}

const investorCards: InvestorCard[] = [
  {
    photo: Investor1,
    name: 'Alchemist Accelerator',
  },
  {
    photo: Investor2,
    name: 'Impulse',
  },
  {
    photo: Investor3,
    name: 'BreakoutLabs',
  },
]

const Investors: FC = () => {
  return (
    <Layout className={'section investors'}>
      <div className='investors-content'>
        <div className='investors-content-title'>Investors</div>
        <div className='investors-content-cards'>
          {investorCards.map(card => (
            <div className='investors-content-cards-card'>
              <img src={card.photo} alt='' />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export { Investors }
