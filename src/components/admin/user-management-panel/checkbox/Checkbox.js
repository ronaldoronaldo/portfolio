import React from 'react'
import { CheckboxContainerStyle } from './Checkbox.style'

const Checkbox = ({ id, header, onCheck, ...props }) => {
  return (
    <CheckboxContainerStyle header={header}>
      <input id={id} type="checkbox" {...props} onClick={onCheck} />
      <label htmlFor={id} />
    </CheckboxContainerStyle>
  )
}

export default Checkbox
