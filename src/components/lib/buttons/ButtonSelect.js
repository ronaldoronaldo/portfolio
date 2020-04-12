import React from 'react'
import { ButtonSelectStyle, SelectIcon } from './ButtonSelect.style'

const ButtonSelect = ({
  size,
  children,
  text,
  color,
  onClick,
  style,
  bgColor,
  iconDirection,
  label,
  active,
  labelColor,
  noMarginLeft,
  ...rest
}) => {
  return (
    <ButtonSelectStyle
      style={style}
      onClick={onClick}
      {...rest}
      active={active}
      labelColor={labelColor}
      noMarginLeft={noMarginLeft}
    >
      <span>{label}</span>
      {active && text}
      <SelectIcon iconDirection={iconDirection} />
    </ButtonSelectStyle>
  )
}

export default ButtonSelect
