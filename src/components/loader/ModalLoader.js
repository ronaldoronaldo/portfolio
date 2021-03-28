import React from 'react'
import { StyledModalLoader, BallRotate } from './ModalLoader.styles'

const ModalLoader = () => {
  return (
    <StyledModalLoader active>
      <BallRotate>
        <div />
      </BallRotate>
    </StyledModalLoader>
  )
}

export default ModalLoader
