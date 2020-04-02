import React from 'react'
import PropTypes from 'prop-types'
import { FlexboxGridWrapper } from './FlexboxGrid.styles'

const Grid = ({ children, ...rest }) => (
  <FlexboxGridWrapper {...rest}>{children}</FlexboxGridWrapper>
)

Grid.propTypes = {
  flexstart: PropTypes.bool,
  start: PropTypes.oneOf(['column', 'row'])
}

export default Grid
