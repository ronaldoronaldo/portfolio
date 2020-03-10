import React, { useState, useEffect } from 'react'
import {
  ContainerTextInputStyle,
  TextInputStyle,
  LabelStyle,
  DisabledStyle,
  NotRequiredLabel
} from './Input.style'
import PropTypes from 'prop-types'

const Input = ({
  size,
  placeholder,
  placeholderTextColor,
  children,
  style,
  error,
  success,
  value,
  onChange,
  type,
  disabled,
  notRequired,
  id,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [labelFloat, setLabelFloat] = useState(false)

  useEffect(() => {
    if (value && value.length > 1) {
      setLabelFloat(true)
    } else {
      setLabelFloat(false)
    }
  }, [value])

  const handleFocus = () => {
    setIsFocused(true)
    setLabelFloat(true)
  }

  const handleBlur = () => {
    setIsFocused(false)

    if ((value && value.length < 1) || value === undefined || value === '') {
      setLabelFloat(false)
    }
  }

  return (
    <ContainerTextInputStyle>
      {disabled && <DisabledStyle>{'. ' + placeholder + ' .'}</DisabledStyle>}
      <LabelStyle
        htmlFor={id}
        labelFloat={labelFloat}
        isFocused={isFocused}
        aria-hidden={true}
        disabled={disabled}
      >
        {placeholder}
      </LabelStyle>
      <TextInputStyle
        id={id}
        type={type ? type : 'text'}
        size={size}
        style={style}
        isFocused={isFocused}
        error={error}
        success={success}
        {...rest}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        disabled={disabled}
      />
      {notRequired && <NotRequiredLabel>Não obrigatório</NotRequiredLabel>}
    </ContainerTextInputStyle>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  error: PropTypes.bool,
  success: PropTypes.bool,
  outline: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholderTextColor: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default Input
