import { FC } from 'react'
import { Layout } from 'antd'
import './Leadership.less'
import TimurBazhirovPhoto from './images/timur-bazhirov.svg'
import JonathanHansonPhoto from './images/jonathan-hanson.svg'
import JamesDeanPhoto from './images/james-dean.svg'
import LinkedInIcon from './images/linkedin-icon.svg'
import GitHubIcon from './images/github-icon.svg'

type LeadershipCard = {
  photo: string
  name: string
  position: string
  linkedInLink: string
  gitHubLink: string
  description: string
}

const leadershipCards: LeadershipCard[] = [
  {
    photo: TimurBazhirovPhoto,
    name: 'Timur Bazhirov',
    position: 'Founder/CEO',
    gitHubLink: '#',
    linkedInLink: '#',
    description:
      'Timur established Exabyte.io in 2015 after obtaining a physics Ph.D. degree at UC Berkeley. There he worked with Marvin Cohen on first-principles studies of materials, publishing a handful of peer-reviewed articles and one day realizing that the way we do materials modeling needs to be modernized. Timur graduated with honors from Moscow Institute of Physics and Technology, speaks Russian and Tatar, and can often be seen cycling up mt. Tamalpais.',
  },
  {
    photo: JonathanHansonPhoto,
    name: 'Jonathan Hanson',
    position: 'Head of Engineering',
    gitHubLink: '#',
    linkedInLink: '#',
    description:
      "Jonathan has over 15 years of engineering experience in some of the most demanding fields, from large-scale online video games to the world's largest orbital satellite imaging fleet. With a start in experimental Physics at Louisiana State University, and experience working on the LIGO gravitational radiation detector, he's passionate about science and is excited to be pushing the state of the art in materials modeling forward.",
  },
  {
    photo: JamesDeanPhoto,
    name: 'James Dean',
    position: 'Computational Scientist',
    gitHubLink: '#',
    linkedInLink: '#',
    description:
      'James defended his PhD in chemical engineering at the University of Pittsburgh in 2020. His research in the lab of Giannis Mpourmpakis leveraged computational chemistry and machine learning to enable the high-throughput screening of nanoparticle catalysts, and delivered first-of-their-kind predictive models of nanoparticle physical properties. When not tackling a new problem, his hobbies include music, computer graphics, and flight.',
  },
]

const Leadership: FC = () => {
  return (
    <Layout className={'section leadership'}>
      <div className='leadership-content'>
        <div className='leadership-content-title'>Leadership Team</div>
        <div className='leadership-content-cards'>
          {leadershipCards.map(card => (
            <div className='leadership-content-cards-card'>
              <img src={card.photo} alt='' className='leadership-content-cards-card-photo' />
              <div className='leadership-content-cards-card-name'>{card.name}</div>
              <div className='leadership-content-cards-card-position'>{card.position}</div>
              <div className='leadership-content-cards-card-links'>
                <a href={card.linkedInLink} className={'leadership-content-cards-card-links-link'}>
                  <img src={LinkedInIcon} alt='' />
                </a>
                <a href={card.gitHubLink} className={'leadership-content-cards-card-links-link'}>
                  <img src={GitHubIcon} alt='' />
                </a>
              </div>
              <div className='leadership-content-cards-card-description'>{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export { Leadership }
