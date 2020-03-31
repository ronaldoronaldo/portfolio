import React from 'react'
import {
  CardContainer,
  CardFooter,
  CardHeader,
  Number,
  Label,
  ScreenTitle,
  OpacityMask,
  ScreenImage,
  HeaderBox
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
        <HeaderBox>
          <ScreenImage/>
          <OpacityMask/>
          <ScreenTitle>{title.toUpperCase()}</ScreenTitle>
        </HeaderBox>
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
