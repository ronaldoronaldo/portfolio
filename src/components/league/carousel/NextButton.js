import React from 'react'
import { StyledButton } from './NextButton.styles'
import {colors} from 'config/ui'
import {FontIcon} from 'components/lib/icons'

const NextButton = props => (
  <StyledButton {...props}>
    <FontIcon
      iconName="caret-right"
      size={15}
      style={{
        zIndex: 3,
        color: colors.black3,
        position: 'relative',
        top: 1,
        left: 1
      }}
    />
  </StyledButton>
)

export default NextButton
