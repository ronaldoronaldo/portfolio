import React from 'react'
import { TitleStyle } from './Title.style'

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

export default Title
