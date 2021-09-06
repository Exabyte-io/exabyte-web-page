import { FC, useRef, useState } from 'react'
import heroMb from './images/home-hero-mb.svg'
import heroLg from './images/home-hero-lg.svg'
import VideoPreviewImage from './images/video-preview.svg'
import PlayButtonImage from './images/play-button.svg'
import PlayButtonMbImage from './images/play-button-mb.svg'
import PauseButtonImage from './images/pause-button.svg'
import CloseImage from './images/close.svg'
import MainVideo from './videos/main-video.mp4'
import { useMediaQuery } from 'react-responsive'
import { ActionButton } from '../../../../components/button/ActionButton'
import './Hero.less'
import { AccessButton } from '../../../../components/button/AccessButton'

const Hero: FC = () => {
  const [isVideoActive, setIsVideoActive] = useState(false)
  const [isVideoPaused, setIsVideoPaused] = useState(true)

  const video = useRef<HTMLVideoElement>(null)
  const md = useMediaQuery({ maxWidth: 768 })

  const showVideo = () => {
    if (isVideoActive) {
      video.current?.pause()
      setIsVideoPaused(true)
    }
    setIsVideoActive(!isVideoActive)
  }

  const changeVideoState = () => {
    if (video.current?.paused) {
      video.current?.play()
      setIsVideoPaused(false)
    } else {
      video.current?.pause()
      setIsVideoPaused(true)
    }
  }

  return (
    <div className='home-hero-section'>
      <img src={md ? heroMb : heroLg} alt='' className='background-img' />
      <div className='content'>
        <div className='text-content' style={{ display: isVideoActive ? 'none' : 'block' }}>
          <div className='title'>Materials Modeling 2.0</div>
          <div className='text'>
            Exabyte.io is a cloud-native digital materials R&D platform. Design structures, run simulations, and build
            models online alongside scientists on your team and worldwide.
          </div>
          <div className='buttons'>
            <ActionButton
              title={'GET STARTED NOW'}
              type={'default'}
              size={'medium'}
              src={'https://platform.exabyte.io/register'}
            />
            <AccessButton />
          </div>
        </div>

        <div className='video-preview' style={{ display: isVideoActive ? 'none' : 'flex' }}>
          <img src={VideoPreviewImage} alt='' className='video-preview-img' />
          <button onClick={showVideo} className='play-button'>
            <img src={PlayButtonImage} alt='' />
            <div className='duration'>Duration: 4 minutes</div>
          </button>
        </div>

        <div className='full-video' style={{ display: isVideoActive ? 'flex' : 'none' }}>
          <button
            onClick={changeVideoState}
            className='play-button'
            style={{ display: md && isVideoPaused ? 'flex' : 'none' }}
          >
            <img src={PlayButtonMbImage} alt='' />
          </button>

          <div className='close-button' onClick={showVideo}>
            <img src={CloseImage} alt='' />
          </div>

          <div className='pause-button'>
            <img src={isVideoPaused ? PlayButtonImage : PauseButtonImage} alt='' />
          </div>

          <video ref={video} className='video' onClick={changeVideoState}>
            <source src={MainVideo} />
          </video>
        </div>
      </div>
    </div>
  )
}

export { Hero }
