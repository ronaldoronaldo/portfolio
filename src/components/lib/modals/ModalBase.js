import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import ModalWrapper from './ModalWrapper'
import { Overlay } from 'styles/common/Common.styles'

const ModalBase = ({
  show,
  onClose,
  loading,
  children,
  canCloseByOverlay,
  ...rest
}) => {
  if (!show) return null

  const handleClick = e => {
    onClose(e)
  }

  const handleClickOverlay = () => {
    onClose()
  }

  return createPortal(
    <>
      <Overlay
        showOverlay={show}
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        onClick={handleClickOverlay}
      />
      <ModalWrapper
        onClose={canCloseByOverlay ? handleClick : () => ({})}
        {...rest}
      >
        {children}
      </ModalWrapper>
    </>,
    document.getElementById('modal')
  )
}

ModalBase.defaultProps = {
  show: false,
  canCloseByOverlay: true,
  canCloseByXBtn: true
}

export const modalPropTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  canCloseByOverlay: PropTypes.bool,
  canCloseByXBtn: PropTypes.bool
}

ModalBase.propTypes = modalPropTypes

export default ModalBase
