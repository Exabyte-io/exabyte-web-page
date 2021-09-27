import { FC, useState } from 'react'
import { Typography } from 'antd'
import GetInTouchBtnImg from './get-in-toch-icon.svg'
import './TouchForm.less'
import { NavLink } from 'react-router-dom'

const TouchForm: FC = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <div className={'touch-form-wrapper'}>
      <Typography.Paragraph className={'touch-form-label'}>Get in touch</Typography.Paragraph>
      <form className={'touch-form'}>
        <input placeholder={'Email'} value={email} onChange={e => setEmail(e.target.value)} className={'touch-form-input'} />
        <NavLink to={`/contact-us?email=${email}`} className={'touch-form-btn'}>
          <img alt='img' src={GetInTouchBtnImg} />
        </NavLink>
      </form>
    </div>
  )
}

export { TouchForm }
