import styled, { css } from 'styled-components'
import { sizes, colors, fontWeights } from 'config/ui'

export const ButtonStyle = styled.button`
  ${({
    size,
    bgColor,
    width,
    border,
    bgColorHover,
    borderRadius,
    textAlign,
    color,
    textColorHover,
    outline,
    display,
    isEnabled,
    disabled
  }) => css`
    width: ${width ? width + 'px' : '100%'};
    position: relative;
    background: ${disabled ? colors.black1 : bgColor === undefined && isEnabled === undefined
      ? colors.primary
      : bgColor
        ? bgColor
        : isEnabled
          ? colors.primary
          : colors.black1};
    transition: all 0.5s;
    font-weight: ${fontWeights.bold};
    text-align: ${textAlign ? textAlign : 'center'};
    color: ${disabled ? colors.black3 : color === undefined && isEnabled === undefined
      ? colors.white
      : color
        ? color
        : isEnabled
          ? colors.white
          : colors.black3};
    font-size: ${sizes.buttonText.size}px;
    padding: 0 ${sizes.padding}px;
    outline: ${outline ? outline : 'none'};
    height: ${size === 'x-small'
      ? `${sizes.buttonSizes.xsmall}px`
      : size === 'small'
        ? `${sizes.buttonSizes.small}px`
        : size === 'medium'
          ? `${sizes.buttonSizes.medium}px`
          : `${sizes.buttonSizes.large}px`};
    display: ${display ? display : 'flex'};
    justify-content: center;
    align-items: center;
    border-radius: ${borderRadius ? borderRadius : 9}px;
    border: ${disabled ? 'none' : border ? border : 'none'};
    cursor: ${isEnabled === undefined
      ? 'pointer'
      : isEnabled
        ? 'pointer'
        : 'not-allowed'};

    &:hover {
      background-color: ${disabled ? colors.black1 : bgColorHover === undefined && isEnabled === undefined
      ? colors.primaryLight
      : bgColorHover
        ? bgColorHover
        : isEnabled
          ? colors.primaryLight
          : colors.black2Light};
      color: ${disabled ? colors.black3 : textColorHover === undefined && isEnabled === undefined
      ? colors.white
      : textColorHover
        ? textColorHover
        : isEnabled
          ? colors.white
          : colors.black4Light};
    }

    &:active {
      background-color: ${disabled ? colors.black1 : bgColorHover === undefined && isEnabled === undefined
      ? colors.primaryDark
      : bgColorHover
        ? bgColorHover
        : isEnabled
          ? colors.primaryDark
          : colors.black2Dark};
      color: ${disabled ? colors.black3 : color === undefined && isEnabled === undefined
      ? colors.white
      : color
        ? color
        : isEnabled
          ? colors.white
          : colors.black2Light};
    }
  `}
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  background-color: ${props => props.color === colors.black1 || props.color === colors.black2 ? colors.black1Dark : props.color};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 9)}px;
`
