import styled, { css } from 'styled-components'
import { sizes, colors } from 'config/ui'

export const BackButtonStyle = styled.button`
  ${({ size, bgColor, flex, border, borderRadius }) => css`
  flex: ${flex ? flex : 1}
  width: 100%;
  background: ${bgColor ? bgColor : colors.white};
  display: flex;
  cursor: pointer;
  justify-content: center;
  border-radius: ${borderRadius ? borderRadius : 0}px;
  border: ${border ? border : 'none'};
  height: ${
    size === 'x-small'
      ? `${sizes.buttonSizes.xsmall}px`
      : size === 'small'
      ? `${sizes.buttonSizes.small}px`
      : size === 'x-large'
      ? `${sizes.buttonSizes.xlarge}px`
      : size === 'medium'
      ? `${sizes.buttonSizes.medium}px`
      : `${sizes.buttonSizes.large}px`
  };
  `}
`
