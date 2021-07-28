import { CSSProperties, FC } from 'react'
import { Typography } from 'antd'
import UnlockSvg from './unlock.svg'
import './acessBtn.less'

type AccessBtnProps = {
  style?: CSSProperties
}

const AccessBtn: FC<AccessBtnProps> = ({ style }) => (
  <button style={style} className={'access-btn-wrapper'}>
    <UnlockSvg style={{ marginRight: 12 }}  className={'access-btn-wrapper-img'}/>
    <Typography.Paragraph className={'access-btn-wrapper-text'}>We support Open Access</Typography.Paragraph>
  </button>
)

export { AccessBtn }
