import React from 'react'
import { TitleStyle } from './Title.style'
import PropTypes from 'prop-types'

const Title = ({
  text,
  size,
  textAlign,
  textAlignMobile,
  sizeMobile,
  style,
  ...rest
}) => {
  return (
    <TitleStyle
      as={`h${size}`}
      size={size}
      textAlign={textAlign}
      textAlignMobile={textAlignMobile}
      sizeMobile={sizeMobile}
      style={style}
      {...rest}
    >
      {text}
    </TitleStyle>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  sizeMobile: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  textAlign: PropTypes.string,
  textAlignMobile: PropTypes.string
}

export default Title
