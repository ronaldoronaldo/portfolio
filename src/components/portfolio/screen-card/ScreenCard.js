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
      <CardHeader>
        <HeaderBox>
          <ScreenImage src={image} />
          <OpacityMask />
          <ScreenTitle>{title.toUpperCase()}</ScreenTitle>
        </HeaderBox>
      </CardHeader>
    </CardContainer>
  )
}

ScreenCard.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfPages: PropTypes.number.isRequired
}

export default ScreenCard
