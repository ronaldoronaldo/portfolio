import React from 'react'
import { StyledButton, StyledIcon } from './PrevButton.styles'

const PrevButton = props => (
  <StyledButton outline {...props}>
    <StyledIcon {...props} className="icon-chevron_left" />
  </StyledButton>
)

export default PrevButton
