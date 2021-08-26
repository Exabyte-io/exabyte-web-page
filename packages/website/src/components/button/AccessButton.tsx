import { CSSProperties, FC } from 'react'
import { Typography } from 'antd'
import unlockSrc from './unlock.svg'
import './AccessButton.less'

type AccessBtnProps = {
  style?: CSSProperties
}

const AccessButton: FC<AccessBtnProps> = ({ style }) => (
  <button style={style} className={'access-btn-wrapper'}>
    <img alt='img' src={unlockSrc} style={{ marginRight: 12 }} className={'access-btn-wrapper-img'} />
    <Typography.Paragraph className={'access-btn-wrapper-text'}>We support Open Access</Typography.Paragraph>
  </button>
)

export { AccessButton }
