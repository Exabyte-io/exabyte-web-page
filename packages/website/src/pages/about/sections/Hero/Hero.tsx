import { FC } from 'react'
import { Layout } from 'antd'
import './Hero.less'
import BackgroundLg from './images/background-lg.svg'
import LaptopDecor from './images/laptop-decor.svg'
import EyeIcon from './images/eye-icon.svg'
import LetterIcon from './images/letter-icon.svg'
import DocumentIcon from './images/document-icon.svg'




type HeroBlock = {
  title: string
  text: string
}

const heroBlocks: HeroBlock[] = [
  {
    title: 'Who We Are',
    text: 'Founded in 2015, Exabyte.io is a cloud-based software company headquartered in San Francisco, California. It enables materials scientists and engineers in academic and industrial sectors, including energy, semiconductor, and manufacturing, to rapidly adopt and deploy a wide variety of modeling techniques to develop new materials faster.',
  },
  {
    title: 'How We Are Different',
    text: 'Exabyte.io is the only end-to-end materials modeling platform. It is architected to consolidate any state-of-the-art simulation tools and data, allowing its users to design new compounds and run physics-based and machine-learning models. The purpose-built platform lets customers increase the impact of high-end simulations and accelerate R&D.',
  },
  {
    title: 'Why It Matters',
    text: 'Just as computer-aided design revolutionized manufacturing in the past, software-driven approaches are transforming the $40B materials R&D industry today, enabling product design from atoms up. Global 2000 companies and universities worldwide use Exabyte.io establishing it as the next standard in materials modeling.',
  },
]

const Hero: FC = () => {
  return (
    <Layout className={'section hero'}>
      <img src={BackgroundLg} alt='' className={'background-img'} />
      <img src={LaptopDecor} alt='' className={'laptop-decor'} />
      <div className='hero-content'>
        <div className='hero-content-title'>The Company</div>
        <div className='hero-content-blocks'>
          {heroBlocks.map(block => (
            <div className='hero-content-blocks-block'>
              <div className='hero-content-blocks-block-title'>{block.title}</div>
              <div className='hero-content-blocks-block-text'>{block.text}</div>
            </div>
          ))}
        </div>
        <div className='hero-content-links'>
          <div className='hero-content-links-title'>Related Information</div>
          <div className='hero-content-links-wrapper'>
            <a href={'#'} className='hero-content-links-link'>
              <img src={EyeIcon} alt='' />
              <span>Our vision</span>
            </a>
            <a href={'#'} className='hero-content-links-link'>
              <img src={LetterIcon} alt='' />
              <span>Contact Us</span>
            </a>
            <a href={'#'} className='hero-content-links-link'>
              <img src={DocumentIcon} alt='' />
              <span>Documentation</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Hero }
