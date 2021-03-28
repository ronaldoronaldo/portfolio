import styled, { css } from 'styled-components'
import { sizes, colors, spacing } from 'config/ui'

export const NextButtonStyle = styled.button`
  ${({
    borderColor,
    borderRadius,
    lastButton,
    firstButton,
    bgColor,
  }) => css`
    background-color: ${bgColor ? bgColor : 'transparent'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${borderRadius ? borderRadius : 0}px;
    border-top-right-radius: ${firstButton ? 9 : 0}px;
    border-top-left-radius: ${firstButton ? 9 : 0}px;
    border: none;
    border-bottom: 1px solid
      ${lastButton ? 'transparent' : borderColor ? borderColor : colors.black2};
  `}
  min-height: ${sizes.buttonSizes.xSmall}px;
  padding-right: ${spacing.small}px;
  cursor: pointer;
  padding-top: ${sizes.padding / 3}px;
  padding-bottom: ${sizes.padding / 3}px;
  
  @media (max-width: ${sizes.mdScreen}px) {
    border-radius: 0;
  }
`

export const TextStyle = styled.p`
  ${({ color, textAlign }) => ` 
    flex: 1;
    text-align: ${textAlign ? textAlign : 'center'};
    color: ${color ? color : colors.black6};
    font-size: ${sizes.buttonText.size};
    padding: 0 ${sizes.padding}px;
    line-height: 27px;
  `}
`
