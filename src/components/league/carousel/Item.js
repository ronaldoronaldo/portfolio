import React from 'react'
import ProTypes from 'prop-types'
import { StyledItem } from './Item.styles'

const Item = ({ gutter, shouldDisplay, children, ...rest }) => (
  <StyledItem gutter={gutter} shouldDisplay={shouldDisplay} {...rest}>
    {children}
  </StyledItem>
)

Item.propTypes = {
  gutter: ProTypes.number.isRequired,
  shouldDisplay: ProTypes.bool.isRequired
}

export default Item
