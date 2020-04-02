import React from 'react'
import { StyledButton, StyledIcon } from './NextButton.styles'

const NextButton = props => (
  <StyledButton outline {...props}>
    <StyledIcon {...props} className="icon-chevron_right" />
  </StyledButton>
)

export default NextButton
