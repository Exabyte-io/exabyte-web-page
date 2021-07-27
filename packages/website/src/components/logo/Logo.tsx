import { CSSProperties, FC } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LogoImg from './logoImg.svg'
import './Logo.less'

type LogoProps = {
  style?: CSSProperties
}

const Logo: FC<LogoProps> = ({ style }) => (
  <Link to={'/'} style={style} className={'logo'}>
    <LogoImg />
  </Link>
)

export { Logo }
