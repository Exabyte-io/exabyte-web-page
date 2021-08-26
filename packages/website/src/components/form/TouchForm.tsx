import { FC } from 'react'
import { Typography } from 'antd'
import GetInTouchBtnImg from './get-in-toch-icon.svg'
import './TouchForm.less'

const TouchForm: FC = () => (
  <div className={'touch-form-wrapper'}>
    <Typography.Paragraph className={'touch-form-label'}>Get in touch</Typography.Paragraph>
    <form className={'touch-form'}>
      <input placeholder={'Email'} className={'touch-form-input'} />
      <button className={'touch-form-btn'}>
        <img alt='img' src={GetInTouchBtnImg} />
      </button>
    </form>
  </div>
)

export { TouchForm }
