import React from 'react'
import { ButtonStyle, Loading } from './Button.style'
import { Spinner } from 'components/lib/loaders'
import { colors } from 'config/ui'

const Button = ({
  size,
  children,
  text,
  color,
  onClick,
  style,
  bgColor,
  bgColorLoading,
  outline,
  fontWeight,
  loading,
  isEnabled,
  ...rest
}) => {
  return (
    <ButtonStyle
      size={size}
      onClick={onClick}
      style={style}
      bgColor={bgColor}
      outline={outline}
      color={color}
      fontWeight={fontWeight}
      disabled={loading}
      isEnabled={isEnabled}
      {...rest}
    >
      {loading && (
        <Loading color={bgColorLoading ? bgColorLoading : color ? color : colors.black1}>
          <Spinner />
        </Loading>
      )}
      {!loading && text}
    </ButtonStyle>
  )
}

export default Button
