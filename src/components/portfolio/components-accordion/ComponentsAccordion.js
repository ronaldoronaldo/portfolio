import React from 'react'
import {Container, ExampleBody, ExampleHeader, Title } from './ComponentsAccordion.style'
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
      <ExampleHeader>
        <Title>{title}</Title>
        <FontIcon
          iconName={open ? 'caret-down' : 'caret-right'}
          onClick={onClose}
          color={colors.black4}
        />
      </ExampleHeader>
      <ExampleBody show={open}>
        {children}
      </ExampleBody>
    </Container>
  )
}

ComponentsAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
}

export default ComponentsAccordion
