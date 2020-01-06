import React from 'react'
import { BorderOrBefore, BorderOrAfter, TextBorder } from './BorderOr.style'

const BorderOr = ({ style }) => {
  const styleContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }

  return (
    <div style={{ ...styleContainer, ...style }}>
      <BorderOrBefore />
      <TextBorder>ou</TextBorder>
      <BorderOrAfter />
    </div>
  )
}

export default BorderOr
