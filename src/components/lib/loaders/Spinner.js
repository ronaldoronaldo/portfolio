import React from 'react'
import PropTypes from 'prop-types'
import { colors } from 'config/ui'
import { StyledSpinner } from './Spinner.style'

const Spinner = ({ color, size, ...rest }) => (
  <StyledSpinner {...rest} color={color} size={size} />
)

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

}

Spinner.defaultProps = {
  color: colors.white
}

export default Spinner
