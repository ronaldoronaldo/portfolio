import React from 'react'
import {
  CardContainer,
  CardHeader,
  ScreenTitle,
  OpacityMask,
  ScreenImage,
  HeaderBox
} from './ScreenCard.style'
import PropTypes from 'prop-types'

const ScreenCard = ({ title, image, path }) => {
  return (
    <CardContainer to={path}>
      <ScreenImage src={image} />
      <OpacityMask />
      <ScreenTitle>{title}</ScreenTitle>
    </CardContainer>
  )
}

ScreenCard.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfPages: PropTypes.number.isRequired
}

export default ScreenCard
