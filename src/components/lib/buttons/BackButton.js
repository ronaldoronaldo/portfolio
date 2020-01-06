import React from 'react'
import { BackButtonStyle } from './BackButton.style'
import PropTypes from 'prop-types'
import { FontIcon } from 'components/lib/icons'

const BackButton = ({
  size,
  children,
  onClick,
  style,
  bgColor,
  flex,
  border,
  borderRadius,
  btnWidth
}) => {
  return (
    <BackButtonStyle
      size={size}
      onClick={onClick}
      style={style}
      bgColor={bgColor}
      flex={flex}
      border={border}
      borderRadius={borderRadius}
      btnWidth={btnWidth}
    >
      <FontIcon iconName="arrow-left" size={28} sizeMobile={20} />
      {children}
    </BackButtonStyle>
  )
}

BackButton.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  flex: PropTypes.number,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  btnWidth: PropTypes.number
}

export default BackButton
