import React, { useState, useEffect } from 'react'
import {
  ContainerTextInputStyle,
  TextInputStyle,
  LabelStyle
} from './Input.style'
import PropTypes from 'prop-types'
import FontIcon from 'components/lib/icons/FontIcon'
import { colors } from 'config/ui'

const InputSearch = ({
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
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [labelFloat, setLabelFloat] = useState(false)

  useEffect(() => {
    if (value && value.length > 1) {
      setIsFocused(true)
    }
  }, [])

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
      <LabelStyle
        htmlFor={'inputsearch'}
        labelFloat={labelFloat}
        isFocused={isFocused}
        aria-hidden={true}
      >
        {!isFocused && !value.length && (
          <FontIcon
            iconName="search"
            size={20}
            style={{ color: colors.black2, marginRight: 10 }}
          />
        )}
        {placeholder}
      </LabelStyle>
      <TextInputStyle
        id="inputsearch"
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
        onChange={evt => onChange(evt.target.value)}
      />
    </ContainerTextInputStyle>
  )
}

InputSearch.propTypes = {
  value: PropTypes.string,
  size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  error: PropTypes.bool,
  success: PropTypes.bool,
  outline: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default InputSearch
