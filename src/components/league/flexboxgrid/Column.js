import React from 'react'
import PropTypes from 'prop-types'
import { ColumnStyle } from './FlexboxGrid.styles'

const Column = ({ children, ...rest }) => (
  <ColumnStyle {...rest}>{children}</ColumnStyle>
)

Column.propTypes = {
  xs: PropTypes.number, // Default size: 16 columns
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  xl: PropTypes.number,
  gutter: PropTypes.number // Default gutter: 20px
}

export default Column
