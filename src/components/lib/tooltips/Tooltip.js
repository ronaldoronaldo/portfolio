import React from 'react'
import { TooltipStyle } from './Tooltip.style'
import PropTypes from 'prop-types'

const Tooltip = ({ text }) => {
  return <TooltipStyle>{text}</TooltipStyle>
}

Tooltip.proptypes = {
  text: PropTypes.string.isRequired
}

export default Tooltip
