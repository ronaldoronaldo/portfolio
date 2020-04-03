import React from 'react'
import {
  CardContainer,
  ScreenTitle,
  OpacityMask,
  ScreenImage,
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
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default ScreenCard





