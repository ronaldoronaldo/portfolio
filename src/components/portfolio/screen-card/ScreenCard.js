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
  numberOfPages,
  image,
  path,
  ...props
}) => {
  const pages = numberOfPages === 1 ? 'page' : 'pages'

  const handleCardClick = () => {
    props.history.push(path)
  }

  return (
    <CardContainer onClick={handleCardClick}>
      <CardHeader>
        <HeaderBox>
          <ScreenImage src={image}/>
          <OpacityMask/>
          <ScreenTitle>{title.toUpperCase()}</ScreenTitle>
        </HeaderBox>
      </CardHeader>
      <CardFooter>
        {/*<Number>*/}
        {/*  {numberOfPages}*/}
        {/*</Number>*/}
        {/*<Label>*/}
        {/*  {pages}*/}
        {/*</Label>*/}
      </CardFooter>
    </CardContainer>
  )
}

ScreenCard.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfPages: PropTypes.number.isRequired,
}

export default ScreenCard
