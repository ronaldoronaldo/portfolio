import React from 'react'
import { ButtonSelectStyle, SelectIcon } from './ButtonSelect.style'
import PropTypes from 'prop-types'

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

ButtonSelect.propTypes = {
  size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  flex: PropTypes.number,
  border: PropTypes.string,
  borderRadius: PropTypes.number,
  marginBottom: PropTypes.bool,
  outline: PropTypes.string,
  iconDirection: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default ButtonSelect
