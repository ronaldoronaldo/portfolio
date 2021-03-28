import React from 'react'
import { StyledButton } from './PrevButton.styles'
import {colors} from 'config/ui'
import {FontIcon} from 'components/lib/icons'

const PrevButton = props => (
  <StyledButton {...props}>
    <FontIcon
      iconName="caret-left"
      size={15}
      style={{
        zIndex: 3,
        color: colors.black3,
        position: 'relative',
        top: 1,
        right: 1
      }}
    />
  </StyledButton>
)

export default PrevButton