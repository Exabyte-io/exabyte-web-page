import { FC } from 'react'
import './Hero.less'
import BackgroundLg from './images/background-lg.svg'
import BackgroundMb from './images/background-mb.svg'
import LaptopDecor from './images/laptop-decor.svg'
import LaptopDecorMb from './images/laptop-decor-mb.svg'
import EyeIcon from './images/eye-icon.svg'
import LetterIcon from './images/letter-icon.svg'
import DocumentIcon from './images/document-icon.svg'
import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom'
import { useContentQuery } from '../../../../graphql'

const Hero: FC = () => {
  const md = useMediaQuery({ maxWidth: 768 })
  const { data } = useContentQuery({
    variables: {
      slug: 'about-page',
    },
  })
  const content = data?.content

  return (
    <div className={'section hero'}>
      <img src={md ? BackgroundMb : BackgroundLg} alt='' className={'background-img'} />
      <img src={md ? LaptopDecorMb : LaptopDecor} alt='' className={'laptop-decor'} />
      <div className='hero-content'>
        <div className='hero-content-title'>{content?.title}</div>
        <div className='hero-content-blocks'>
          {content?.sections?.map(block => (
            <div className='hero-content-blocks-block'>
              <div className='hero-content-blocks-block-title'>{block.title}</div>
              <div className='hero-content-blocks-block-text'>{block.subTitle}</div>
            </div>
          ))}
        </div>
        <div className='hero-content-links'>
          <div className='hero-content-links-title'>Related Information</div>
          <div className='hero-content-links-wrapper'>
            <NavLink to={'/our-vision'} className='hero-content-links-link'>
              <img src={EyeIcon} alt='' />
              <span>Our vision</span>
            </NavLink>
            <NavLink to={'/contact-us'} className='hero-content-links-link'>
              <img src={LetterIcon} alt='' />
              <span>Contact Us</span>
            </NavLink>
            <a href={'https://docs.exabyte.io/'} className='hero-content-links-link'>
              <img src={DocumentIcon} alt='' />
              <span>Documentation</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
