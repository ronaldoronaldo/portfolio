import React from 'react'
import { StyledPageLoader, BallRotate } from './PageLoader.styles'

const PageLoader = () => {
  return (
    <StyledPageLoader active>
      <BallRotate>
        <div />
      </BallRotate>
    </StyledPageLoader>
  )
}

export default PageLoader
