import { FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import logoSrc from './logoImg.svg'
import './Logo.less'

const Logo: FC<Pick<HTMLAttributes<Element>, 'style'>> = ({ style }) => (
  <Link to={'/'} style={style} className={'logo'}>
    <img src={logoSrc} />
  </Link>
)

export { Logo }
