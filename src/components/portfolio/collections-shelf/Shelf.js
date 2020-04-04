import React from 'react'
import PropTyes from 'prop-types'
import { ShelfWrapper } from './Shelf.styles'
import Carousel from 'components/league/carousel'

const Shelf = ({
  carouselSettings,
  title,
  children,
  onClickViewAll,
  innerRef,
  paddingRight,
  ...rest
}) => {
  if (!children || !children.length) return null

  return (
    <ShelfWrapper ref={innerRef} {...rest}>
      <Carousel
        className="shelf-items"
        carouselSettings={carouselSettings}
        centralizeButtonOnBook
        clippedButton
      >
        {children}
      </Carousel>
    </ShelfWrapper>
  )
}

Shelf.propTyes = {
  title: PropTyes.string.isRequired,
  onClickViewAll: PropTyes.func,
  children: PropTyes.element.isRequired
}

export default Shelf
