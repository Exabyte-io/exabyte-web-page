import { FC } from 'react'
import { Layout } from 'antd'
import './Advisory.less'
import MarvinCohenPhoto from './images/marvin-cohen.svg'
import StevenLouiePhoto from './images/steven-louie.svg'
import LaineConklinPhoto from './images/laine-conklin.svg'
import MartaBulaichPhoto from './images/marta-bulaich.svg'
import InfoIcon from './images/info-icon.svg'

type AdvisoryCard = {
  photo: string
  name: string
  position: string
  infoLink: string
  text: string
}

const advisoryCards: AdvisoryCard[] = [
  {
    photo: MarvinCohenPhoto,
    name: 'Marvin Cohen',
    position: 'Scientific Advisor',
    infoLink: '#',
    text: "Professor of Physics at UC Berkeley. Author of over 800 technical publications and one of the world's most cited physicists. Recipient of numerous awards and distinctions. ",
  },
  {
    photo: StevenLouiePhoto,
    name: 'Steven Louie',
    position: 'Scientific Advisor',
    infoLink: '#',
    text: 'Senior faculty scientist in the Materials Sciences Division at Lawrence Berkeley Laboratory. Professor of Physics at UC Berkeley. Globally recognized expert with h-index over 150.',
  },
  {
    photo: LaineConklinPhoto,
    name: 'Laine Conklin',
    position: 'Advisor',
    infoLink: '#',
    text: 'President at Conklin Communications. Expert in communications and media coaching for senior executives from startups to Fortune 100.',
  },
  {
    photo: MartaBulaichPhoto,
    name: 'Marta Bulaich',
    position: 'Advisor',
    infoLink: '#',
    text: 'Marketing Executive with over two decades of working in the trenches with venture capital firms (Ridge, Canaan, DFJ) and startups in IT and Healthcare.',
  },
]

const Advisory: FC = () => {
  return (
    <Layout className={'section advisory'}>
      <div className='advisory-content'>
        <div className='advisory-content-title'>Advisory Board</div>
        <div className='advisory-content-cards'>
          {advisoryCards.map(card => (
            <div className='advisory-content-cards-card'>
              <img src={card.photo} alt='' className='advisory-content-cards-card-photo' />
              <div className='advisory-content-cards-card-name'>{card.name}</div>
              <div className='advisory-content-cards-card-position'>{card.position}</div>
              <a href={card.infoLink} className='advisory-content-cards-card-link'>
                <img src={InfoIcon} alt='' />
              </a>
              <div className='advisory-content-cards-card-text'>{card.text}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export { Advisory }
