import { FC } from 'react'
import { Link } from 'react-router-dom'
import logoSrc from './Logo.svg'
import './Logo.less'

const Logo: FC = () => (
  <Link to={'/'} >
    <img alt={'Matera'} src={logoSrc} className={'logo'}/>
  </Link>
)

export { Logo }
