import React from 'react'
import {
  CardContainer,
  ScreenTitle,
  OpacityMask,
  ScreenImage, CardContainerMobile,
} from './ScreenCard.style'
import PropTypes from 'prop-types'

const ScreenCard = ({ title, image, path, imageMobile }) => {
  const body = document.body

  return (
    <>
      <CardContainer to={path} onClick={()=>body.setAttribute("class", "")}>
        <ScreenImage src={image} />
        <OpacityMask />
        <ScreenTitle>{title}</ScreenTitle>
      </CardContainer>
      <CardContainerMobile to={path} onClick={()=>body.setAttribute("class", "")}>
        <ScreenImage src={imageMobile} />
        <OpacityMask />
        <ScreenTitle>{title}</ScreenTitle>
      </CardContainerMobile>
    </>
  )
}

ScreenCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default ScreenCard





