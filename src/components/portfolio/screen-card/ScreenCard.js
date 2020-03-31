import React from 'react'
import {
  CardContainer,
  CardFooter,
  CardHeader,
  Number,
  Label,
  ScreenTitle,
  OpacityMask,
  ScreenImage
} from './ScreenCard.style'
import PropTypes from 'prop-types'

const ScreenCard = ({
  title,
  numberOfPages
}) => {
  const pages = numberOfPages === 1 ? 'page' : 'pages'
  return (
    <CardContainer>
      <CardHeader>
        <ScreenImage/>
        <OpacityMask/>
        <ScreenTitle>{title}</ScreenTitle>
      </CardHeader>
      <CardFooter>
        <Number>
          {numberOfPages}
        </Number>
        <Label>
          {pages}
        </Label>
      </CardFooter>
    </CardContainer>
  )
}

ScreenCard.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfPages: PropTypes.number.isRequired,
}

export default ScreenCard
