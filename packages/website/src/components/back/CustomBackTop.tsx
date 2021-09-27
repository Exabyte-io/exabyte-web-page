import { FC } from 'react'
import Arrow from './images/arrow.svg'
import './CustomBackTop.less'

interface CustomBackTopProps {
  color: string
}

const CustomBackTop: FC<CustomBackTopProps> = ({ color }) => {
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div className='back-to-top-wrapper' onClick={topFunction}>
      <img src={Arrow} alt='' />
      <div style={{ color }} className='back-to-top'>
        Back to top
      </div>
    </div>
  )
}

export default CustomBackTop
