import React from 'react'
import { Icon } from './FontIcon.styles'
import PropTypes from 'prop-types'

const FontIcon = ({ size, sizeMobile, hardMobile, color, iconName, ...rest }) => (
  <Icon
    hardMobile={hardMobile}
    size={size}
    sizeMobile={sizeMobile}
    color={color}
    className={`icon-${iconName}`}
    {...rest}
  />
)

export default FontIcon

FontIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
}
