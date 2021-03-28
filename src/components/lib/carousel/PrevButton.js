import React from 'react'
import { StyledButton } from './PrevButton.styles'

const PrevButton = props => {
  const disable = props.className.includes('slick-disabled')

  return (
    <StyledButton outline {...props} iconName="caret-left" disable={disable} />
  )
}

export default PrevButton
