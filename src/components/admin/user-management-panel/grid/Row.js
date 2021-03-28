import React from 'react'
import PropTypes from 'prop-types'
import { RowStyle } from './FlexboxGrid.styles'

const Row = ({ children, ...rest }) => <RowStyle {...rest}>{children}</RowStyle>

Row.propTypes = {
  flexstart: PropTypes.bool
}

export default Row
