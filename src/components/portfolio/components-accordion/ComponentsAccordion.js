import React from 'react'
import {Container, ExampleBody, ExampleBodyContainer, ExampleHeader, Title} from './ComponentsAccordion.style'
import PropTypes from 'prop-types'
import {FontIcon} from 'components/lib/icons'
import { colors } from 'config/ui'


const ComponentsAccordion = ({
  title,
  open,
  onClose,
  children
}) => {
  return (
    <Container>
      <ExampleHeader onClick={onClose}>
        <Title>{title}</Title>
        <FontIcon
          iconName={open ? 'caret-down' : 'caret-right'}
          size={15}
          color={colors.black3}
        />
      </ExampleHeader>
      <ExampleBodyContainer show={open}>
        <ExampleBody >
          {children}
        </ExampleBody>
      </ExampleBodyContainer>
    </Container>
  )
}

ComponentsAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
}

export default ComponentsAccordion
