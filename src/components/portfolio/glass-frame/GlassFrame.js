import React from 'react'
import {
  FrameContainer, ReflexMask, SmallerReflexMask
} from './GlassFrame.style'

const GlassFrame = ({ children, animate, animate2, ...rest }) => {
  return (
    <FrameContainer {...rest}>
      <ReflexMask animate={animate}/>
      <SmallerReflexMask animate={animate2}/>
      {children}
    </FrameContainer>
  )
}

export default GlassFrame





