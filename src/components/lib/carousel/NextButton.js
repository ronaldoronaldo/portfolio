import React from 'react'
import { StyledButton } from './NextButton.styles'

const NextButton = props => {
  const disable = props.className.includes('slick-disabled')
  return (
    <StyledButton outline {...props} iconName="caret-right" disable={disable} />
  )
}

export default NextButton
