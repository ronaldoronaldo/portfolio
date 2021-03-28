import React from 'react'
import { Wrapper, StyledModal } from './ModalWrapper.styles'

const Modal = ({ children, ...rest }) => {
  return (
    <Wrapper>
      <StyledModal {...rest}>{children}</StyledModal>
    </Wrapper>
  )
}

export default Modal
