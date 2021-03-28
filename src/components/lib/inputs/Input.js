import React, { useState, useEffect } from 'react'
import {
  ContainerTextInputStyle,
  TextInputStyle,
  LabelStyle,
  DisabledStyle,
  NotRequiredLabel,
  EyeIcon
} from './Input.style'
import { FontIcon } from 'components/lib/icons'
import { colors } from 'config/ui'

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
  showPassword,
  onKeyUp,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [labelFloat, setLabelFloat] = useState(false)
  const [typeInput, setTypeInput] = useState(null)

  useEffect(() => {
    if (value && value.length >= 1) {
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

  const handleOnKeyUp = key => {
    if (onKeyUp) {
      onKeyUp(key)
    }
  }

  const handleEyeIcon = () => {
    if (typeInput === 'text') {
      setTypeInput('password')
    } else {
      setTypeInput('text')
    }
  }

  return (
    <ContainerTextInputStyle {...rest}>
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
      {showPassword && (
        <EyeIcon onClick={handleEyeIcon}>
          <FontIcon
            iconName={typeInput === 'text' ? 'eye' : 'eye-off'}
            size={16}
            color={colors.black3}
          />
        </EyeIcon>
      )}
      <TextInputStyle
        id={id}
        type={typeInput ? typeInput : type ? type : 'text'}
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
        onKeyUp={evt => handleOnKeyUp(evt.key)}
        disabled={disabled}
      />
      {notRequired && <NotRequiredLabel>Não obrigatório</NotRequiredLabel>}
    </ContainerTextInputStyle>
  )
}

export default Input
