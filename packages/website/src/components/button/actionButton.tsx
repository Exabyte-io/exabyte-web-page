import { CSSProperties, FC } from 'react'
import './actionButton.less'

type ActionButtonProps = {
  title: string;
  src?: string;
  styles?: CSSProperties;
  type: string;
  size?: string
}

const ActionButton: FC<ActionButtonProps> = ({ title, src, styles, type, size }) => (
  <a href={src} style={styles} className={`action-btn action-btn-${type} action-btn-${size}`}>{title}</a>
)

export { ActionButton }