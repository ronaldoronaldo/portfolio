import React, { useState } from 'react'
import Slider from 'react-slick'
// import PropTypes from 'prop-types'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import { sizes } from 'config/ui'
import { Wrapper } from './Carousel.style'
const Carousel = props => {
  const [settings] = useState({
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    nextArrow: <NextButton alignNews={props.newsShelf} />,
    prevArrow: <PrevButton alignNews={props.newsShelf} />,
    variableWidth: true,
    responsive: [
      {
        breakpoint: sizes.xlgScreen,
        settings: {}
      },
      {
        breakpoint: sizes.lgScreen,
        settings: {}
      },
      {
        breakpoint: sizes.mdScreen,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: sizes.smScreen,
        settings: {
          arrows: false,
          slidesToScroll: 6
        }
      }
    ],
    ...props
  })

  return (
    <Wrapper>
      <Slider {...settings}>{props.children}</Slider>
    </Wrapper>
  )
}

// Carousel.propTypes = {
// }

export default Carousel
