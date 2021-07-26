import { FC } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LogoImg from './logoImg.svg'

const Logo: FC = () => (
  <Link to={'/'} style={{ display: 'flex' }}>
    <LogoImg />
  </Link>
)

export { Logo }
