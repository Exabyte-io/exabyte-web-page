import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import './BurgerButton.less'

type BurgerButtonProps = {
  onClick: Dispatch<SetStateAction<boolean>>
}

const BurgerButton: FC<Partial<BurgerButtonProps>> = ({ onClick = () => undefined }) => {
  const toggle = useCallback(() => {
    onClick(prevState => !prevState)
    document.body.classList.toggle('mobile_menu__opener--active')
  }, [])

  return (
    <div onClick={toggle} className='mobile_menu__opener'>
      <div className='burger_menu'>
        <div className='burger_line' />
        <div className='burger_line' />
      </div>
    </div>
  )
}

export { BurgerButton }