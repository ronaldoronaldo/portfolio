import React from 'react'
import { NextButtonStyle, TextStyle } from './NextButton.style'
import PropTypes from 'prop-types'
import { FontIcon } from 'components/lib/icons'
import { colors, spacing } from 'config/ui'

const NextButton = ({
  size,
  children,
  text,
  color,
  onClick,
  style,
  flex,
  borderColor,
  borderRadius,
  textAlign,
  lastButton,
  firstButton,
  bgColor
}) => {
  return (
    <NextButtonStyle
      size={size}
      onClick={onClick}
      style={style}
      flex={flex}
      borderColor={borderColor}
      borderRadius={borderRadius}
      bgColor={bgColor}
      lastButton={lastButton}
      firstButton={firstButton}
    >
      <TextStyle color={color} textAlign={textAlign}>
        {text}
      </TextStyle>
      {children}
      <FontIcon
        iconName="caret-right"
        size={15}
        style={{
          marginLeft: spacing.xSmall,
          color: color || colors.black3
        }}
      />
    </NextButtonStyle>
  )
}

NextButton.propTypes = {
  size: PropTypes.number,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  flex: PropTypes.number,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  lastButton: PropTypes.bool
}

export default NextButton
