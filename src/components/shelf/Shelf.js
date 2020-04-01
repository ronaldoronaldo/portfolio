import React from 'react'
import PropTypes from 'prop-types'
import { Header, ShelfWrapper, TitleStyle } from './Shelf.style'
import { Carousel } from 'components/lib/carousel'

const Shelf = ({ title, titleMobile, children, settings, ...props }) => {
  if (!children || !children.length) return null
  return (
    <ShelfWrapper {...props}>
      {title && (
        <Header>
          <TitleStyle
            textAlign="left"
            title={title}
            titleMobile={titleMobile}
          />
        </Header>
      )}
      <Carousel settings={settings} newsShelf={props.newsShelf}>
        {children}
      </Carousel>
    </ShelfWrapper>
  )
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired
}

export default Shelf
