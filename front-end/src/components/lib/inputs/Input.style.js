import styled, { css } from 'styled-components'
import { sizes, colors } from 'config/ui'

export const ContainerTextInputStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  > input::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  > input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
`

export const TextInputStyle = styled.input`
  ${({ size, isFocused, error, success, outline, disabled }) => css`
    -webkit-appearance: none;
    width: 100%;
    display: flex;
    padding: ${sizes.padding}px;
    border-radius: 9px;
    outline: ${outline ? outline : 0};
    color: ${disabled ? colors.black4 : colors.black6};
    background: ${disabled && colors.black1};
    border: 1px solid
      ${isFocused
        ? colors.primary
        : error
        ? colors.red3
        : success
        ? colors.idGreen
        : colors.black2};

    height: ${size === 'x-small'
      ? `${sizes.inputSizes.xsmall}px`
      : size === 'small'
      ? `${sizes.inputSizes.small}px`
      : size === 'medium'
      ? `${sizes.inputSizes.medium}px`
      : `${sizes.inputSizes.large}px`};
  `}
`

export const LabelStyle = styled.label`
  ${({ isFocused, error, success, labelFloat, disabled }) => css`
    transition: ${labelFloat
      ? 'transform 0.2s ease-in, font-size 0.2s ease-in'
      : 'transform 0.2s ease-out, font-size 0.2s ease-out'};
    position: absolute;
    font-size: ${labelFloat ? sizes.label : sizes.text}px;
    left: ${labelFloat ? -7 : 0}px;
    margin: 10px ${sizes.padding}px;
    top: -2px;
    transform: ${labelFloat
      ? 'translate3d(0, -84%, 0)'
      : 'translate3d(0, 0, 0)'};
    padding: 5px ${labelFloat ? 5 : 0}px;
    color: ${isFocused
      ? colors.primary
      : error
      ? colors.red3
      : success
      ? colors.idGreen
      : disabled
      ? colors.black4
      : colors.black3};
    background: ${disabled ? 'none' : labelFloat ? colors.white : 'none'};
    cursor: unset;
    display: flex;
    flex-direction: row;
    z-index: 2;
  `}
`

export const DisabledStyle = styled.div`
  position: absolute;
  font-size: 12px;
  margin: 10px 16px;
  top: -25px;
  left: -1px;
  z-index: 1;
  background-color: ${colors.white};
  color: ${colors.white};
`

export const NotRequiredLabel = styled.span`
  position: absolute;
  font-size: 12px;
  background-color: transparent;
  color: ${colors.black3};
  bottom: -18px;
  left: 16px;
`
