import { FC } from 'react'
import { Link } from 'react-router-dom'
import logoSrc from './Logo.svg'
import './Logo.less'

const Logo: FC = () => (
  <Link to={'/'} className={'logo'}>
    <img alt={'Matera'} src={logoSrc} />
  </Link>
)

export { Logo }
