import React from 'react'
import {
  FrameContainer, ReflexMask
} from './GlassFrame.style'

const GlassFrame = ({ children, animate, animate2, ...rest }) => {
  return (
    <FrameContainer {...rest}>
      <ReflexMask animate={animate}/>
      <ReflexMask animate={animate2}/>
      {children}
    </FrameContainer>
  )
}

export default GlassFrame





