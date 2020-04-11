import styled, { css } from 'styled-components'
import { colors, sizes, fontWeights, spacing } from 'config/ui'

import InputSearch from 'components/lib/inputs/InputSearch'

export const SelectContainerStyle = styled.div`
  ${({ border, borderRadius, bgColor, maxWidth, mobileStyle, checkbox, noMarginLeft, specialCase }) => css`
    border: ${border ? border : `1px solid ${colors.black2}`};
    border-radius: ${borderRadius ? borderRadius : 6}px;
    overflow-y: auto;
    height: ${mobileStyle ? '100vh' : 'auto'};
    max-height: ${checkbox && mobileStyle
      ? '504px'
      : mobileStyle
      ? '100vh'
      : '225px'};
    max-width: ${checkbox && mobileStyle
      ? '320px'
      : mobileStyle
      ? '100%'
      : maxWidth
      ? maxWidth + 'px'
      : '100%'};
    scrollbar-width: none;
    position: ${mobileStyle ? 'fixed' : specialCase ? 'relative' : 'absolute'};
    width: ${mobileStyle ? '350px' : 'auto'};
    background: ${bgColor ? bgColor : colors.white};
    top: ${mobileStyle ? '0' : 'auto'};
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.06);
    right: ${mobileStyle ? '0' : 'auto'};
    border: ${mobileStyle ? '0' : 'auto'};
    z-index: 3;
    width: ${!mobileStyle && 100}%;
    padding-bottom: ${checkbox && mobileStyle && '72px'};
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
    @media (max-width: ${sizes.mdScreen}px) {
      width: 100%;
      height: 100vh;
      max-height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      border: 0;
      max-width: 100%;
    }
    ${noMarginLeft && `margin-left: 0 !important;`}
  `}
`

export const SelectContainerHeader = styled.div`
  ${({ mobileStyle }) => css`
    @media (min-width: ${sizes.mdScreen}px) {
      display: ${mobileStyle ? 'flex' : 'none'};
    }
  `}
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 95px;
  padding: 0 ${sizes.padding}px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 44px;
`

export const InputSearchStyle = styled(InputSearch)``

export const SelectItemStyle = styled.button`
  ${({
    size,
    bgColor,
    border,
    color,
    textAlign,
    outline,
    checkbox,
    iconItems,
    itemDisabled,
    image
  }) => css`
    width: 100%;
    height: ${size === 'x-small'
      ? `${sizes.buttonSizes.xsmall}px`
      : size === 'small'
      ? `${sizes.buttonSizes.small}px`
      : size === 'medium'
      ? `${sizes.buttonSizes.medium}px`
      : `${sizes.buttonSizes.large}px`};
    background: ${itemDisabled
      ? colors.black1
      : bgColor
      ? bgColor
      : colors.white};
    border: none;
    border-bottom: ${border ? border : `1px solid ${colors.black2}`};
    color: ${itemDisabled ? colors.black3 : color ? color : colors.black5};
    font-size: ${sizes.text}px;
    font-weight: ${fontWeights.regular};
    text-align: ${textAlign ? textAlign : 'left'};
    padding: ${!image ? `0 ${sizes.padding}px` : '0 8px'};
    cursor: pointer;
    outline: ${outline ? outline : 'none'};
    transition: background-color 0.2s linear;
    display: flex;
    justify-content: ${checkbox ? 'flex-start' : 'space-between'};
    align-items: center;
    line-height: 16px;

    > div {
      > span {
        &:before {
          color: ${itemDisabled
            ? colors.black3
            : color
            ? color
            : colors.black5};
          font-size: 18px !important;
        }
      }
    }

    ${!iconItems &&
      `span {
      color: ${colors.black3};
      font-size: 12px;
    }`}

    &:last-child {
      border-bottom: none;
    }

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      background: ${itemDisabled ? colors.black1 : colors.whiteDark};
    }

    &:active {
      background: ${colors.white};
    }
  `}
`

export const ActionsButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${props => props.checkbox && '263px'};
  height: 72px;
  border-radius: 5px;
  border-top: 1px solid ${colors.black2};
  position: fixed;
  background: ${colors.white};
  top: 0;
  margin-top: 465px;
  margin-bottom: 19px;
  justify-content: flex-end;
  @media (min-width: ${sizes.mdScreen}px) {
    max-width: ${props => props.checkbox && '320px'};
  }
`

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  opacity: ${props => props.disabled && '90%'};
`
