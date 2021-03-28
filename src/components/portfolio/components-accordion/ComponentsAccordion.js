import React from 'react'
import {Container, ExampleBody, ExampleBodyContainer, ExampleHeader, Title} from './ComponentsAccordion.style'
import PropTypes from 'prop-types'
import {FontIcon} from 'components/lib/icons'
import { colors } from 'config/ui'
import {NoPaddingBox, PaddingBox} from "../../../screens/portfolio/examples/Examples.style"


const ComponentsAccordion = ({
  title,
  open,
  onClose,
  children,
  column,
  ignorePadding,
  drag
}) => {

  const child = ignorePadding ? (
    <>
      <NoPaddingBox>
        {children}
      </NoPaddingBox>
    </>
  ) : (
    <>
      <PaddingBox>
        {children}
      </PaddingBox>
    </>
  )

  return (
    <Container>
      <ExampleHeader onClick={onClose}>
        <Title show={open}>{title}</Title>
        <FontIcon
          iconName={open ? 'caret-down' : 'caret-right'}
          size={15}
          color={colors.black3}
        />
      </ExampleHeader>
      <ExampleBodyContainer show={open}>
        <ExampleBody column={column} drag={drag}>
          {child}
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
