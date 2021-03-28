import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  AccordionWrapper,
  AccordionRow,
  AccordionHeader,
  AccordionHeaderTitle,
  AccordionContent,
  IconWrapper
} from './ComboAccordion.styles'
import { FontIcon } from 'components/lib/icons'
import { colors } from 'config/ui'

class Accordion extends Component {
  render() {
    const { headerTitle, children, isOpen } = this.props

    return (
      <AccordionWrapper onClick={this.props.handleClick} isOpen={isOpen}>
        <AccordionRow>
          <AccordionHeader isOpen={isOpen}>
            <AccordionHeaderTitle>{headerTitle}</AccordionHeaderTitle>
          </AccordionHeader>
          <IconWrapper isOpen={isOpen}>
            <FontIcon color={colors.gray7} size={28} iconName="chevron_right" />
          </IconWrapper>
        </AccordionRow>
        <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
      </AccordionWrapper>
    )
  }
}

Accordion.propTypes = {
  theme: PropTypes.oneOf(['default', 'outline'])
}

Accordion.defaultProps = {
  theme: 'default'
}

export default Accordion
