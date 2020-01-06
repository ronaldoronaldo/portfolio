import React from 'react'
import { ButtonStyle, Loading } from './Button.style'
import PropTypes from 'prop-types'
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

Button.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  flex: PropTypes.number,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  minHeight: PropTypes.string,
  bgColorHover: PropTypes.string,
  textAlign: PropTypes.string,
  textColorHover: PropTypes.string,
  outline: PropTypes.string,
  fontWeight: PropTypes.string,
  width: PropTypes.number,
  display: PropTypes.string,
  loading: PropTypes.bool,
  bgColorLoading: PropTypes.string
}

export default Button
