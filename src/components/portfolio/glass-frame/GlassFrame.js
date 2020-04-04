import React from 'react'
import {
  FrameContainer,
} from './GlassFrame.style'

const GlassFrame = ({ children, ...rest }) => {
  return (
    <FrameContainer {...rest}>
      {children}
    </FrameContainer>
  )
}

export default GlassFrame





