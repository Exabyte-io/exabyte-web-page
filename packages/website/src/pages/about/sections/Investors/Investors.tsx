import { FC } from 'react'
import './Investors.less'
import Investor1 from './images/investor-1.svg'
import Investor2 from './images/investor-2.svg'
import Investor3 from './images/investor-3.svg'

export type InvestorCard = {
  photo: string
  name: string
  link: string
}

const investorCards: InvestorCard[] = [
  {
    photo: Investor1,
    name: 'Alchemist Accelerator',
    link: 'http://alchemistaccelerator.com/',
  },
  {
    photo: Investor2,
    name: 'Impulse',
    link: 'http://impulsevc.com/',
  },
  {
    photo: Investor3,
    name: 'BreakoutLabs',
    link: 'http://www.breakoutlabs.org/',
  },
]

const Investors: FC = () => {
  return (
    <div className={'investors'}>
      <div className='investors-content'>
        <div className='investors-content-title'>Investors</div>
        <div className='investors-content-cards'>
          {investorCards.map(card => (
            <div className='investors-content-cards-card'>
              <div className='content'>
                <img src={card.photo} alt='' />
                <div className='hidden-content'>
                  <div className='card-name'>{card.name}</div>
                  <div className='pre-seed'>Pre-seed</div>
                  <a href={card.link} className='read-more'>
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Investors }
