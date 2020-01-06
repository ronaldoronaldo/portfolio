import React from 'react'
import PropTypes from 'prop-types'
import { ColumnStyle } from './FlexboxGrid.styles'

const Column = ({ children, ...rest }) => (
  <ColumnStyle {...rest}>{children}</ColumnStyle>
)

Column.propTypes = {
  sm: PropTypes.number, // Default size: 12 columns
  md: PropTypes.number,
  lg: PropTypes.number,
  xlg: PropTypes.number,
  xxlg: PropTypes.number,
  gutter: PropTypes.number // Default gutter: 16px
}

export default Column
