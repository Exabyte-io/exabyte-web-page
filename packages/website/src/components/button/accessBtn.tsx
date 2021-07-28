import { CSSProperties, FC } from 'react'
import { Typography } from 'antd'
import UnlockSvg from '../../pages/home/images/unlock.svg'
import './acessBtn.less'

type AccessBtnProps = {
  style?: CSSProperties
}

const AccessBtn: FC<AccessBtnProps> = ({ style }) => (
  <button style={style} className={'access-btn-wrapper'}>
    <UnlockSvg style={{ marginRight: '12px' }} />
    <Typography.Paragraph className={'access-btn-wrapper-text'}>We support Open Access</Typography.Paragraph>
  </button>
)

export { AccessBtn }
