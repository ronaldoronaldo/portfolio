import React from 'react'
import { colors } from 'config/ui'
import { StyledIconButton } from './IconButton.style'
import { Spinner } from 'components/lib/loaders'
import { FontIcon } from 'components/lib/icons'

const IconButton = ({
  primary,
  bgColor,
  bgColorHover,
  textColorHover,
  color,
  disabled,
  loading,
  children,
  iconName,
  text,
  iconSize,
  iconImgSrc,
  invertIconPosition,
  ...rest
}) => (
  <StyledIconButton
    type="button"
    bgColor={primary ? colors.primary : bgColor || colors.white}
    disabled={loading || disabled}
    color={primary ? colors.white : color || colors.black5}
    textColorHover={
      disabled
        ? colors.black3
        : primary
        ? colors.white
        : textColorHover || colors.black5
    }
    bgColorHover={primary ? colors.primaryDark : bgColorHover || colors.white}
    {...rest}
  >
    {loading ? (
      <Spinner color={color ? color : colors.black1} />
    ) : (
      <React.Fragment>
        {invertIconPosition && text}
        {iconName && (
          <FontIcon
            size={iconSize}
            iconName={iconName}
            color={primary ? colors.white : color || colors.black5}
          />
        )}
        {iconImgSrc && <img src={iconImgSrc} />}
        {!invertIconPosition && text}
      </React.Fragment>
    )}
  </StyledIconButton>
)

IconButton.defaultProps = {
  size: 'medium'
}

export default IconButton
