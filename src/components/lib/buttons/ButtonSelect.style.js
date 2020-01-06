import styled, { css } from 'styled-components'
import { sizes, colors, fontWeights } from 'config/ui'

export const ButtonSelectStyle = styled.button`
  ${({
    size,
    bgColor,
    flex,
    border,
    borderRadius,
    marginBottom,
    color,
    labelColor,
    outline,
    active
  }) => css`
    background: ${bgColor ? bgColor : colors.white};
    cursor: pointer;
    display: flex;
    flex: ${flex ? flex : 1};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    outline: ${outline ? outline : 'none'};
    border-radius: ${borderRadius ? borderRadius : 9}px;
    border: ${border ? border : `1px solid ${colors.black3}`};
    margin-bottom: ${marginBottom ? sizes.padding : 0}px;
    font-weight: ${fontWeights.regular};
    text-align: left;
    color: ${color ? color : colors.black4};
    font-size: ${sizes.text}px;
    padding: 0 ${sizes.padding}px;
    height: ${size === 'x-small'
      ? `${sizes.buttonSizes.xsmall}px`
      : size === 'small'
      ? `${sizes.buttonSizes.small}px`
      : size === 'medium'
      ? `${sizes.buttonSizes.medium}px`
      : `${sizes.buttonSizes.large}px`};

    span {
      position: ${active ? 'absolute' : 'flex'};
      top: ${active && -16}px;
      left: ${active && 10}px;
      background: ${active && colors.white};
      font-size: ${active ? sizes.label : sizes.text}px;
      padding: 5px ${active ? 5 : 0}px;
      color: ${labelColor};
    }
  `}
`
export const SelectIcon = styled.div`
  ${({ iconDirection }) => css`
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: ${iconDirection ? '0' : `5px solid ${colors.black6}`};
    border-bottom: ${iconDirection ? `5px solid ${colors.black6}` : '0'};
  `}
`
