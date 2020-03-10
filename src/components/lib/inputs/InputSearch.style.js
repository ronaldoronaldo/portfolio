import styled, { css } from 'styled-components'
import { sizes, colors } from 'config/ui'

export const ContainerTextInputStyle = styled.div`
  ${({ size }) => css`
  border: 1px solid ${colors.black3}
  border-radius: 5px;
  height: ${
    size === 'x-small'
      ? `${sizes.inputSizes.xSmall}px`
      : size === 'small'
        ? `${sizes.inputSizes.small}px`
        : size === 'large'
          ? `${sizes.inputSizes.large}px`
          : `${sizes.inputSizes.medium}px`
    };
  `}
  margin: 0 ${sizes.padding}px;
  justify-content: center;
`

export const TextInputStyle = styled.input`
  ${({ size }) => css`
display: flex;
align-items: center;
justify-content: center;
padding-left: ${sizes.padding}px;
padding-right: ${sizes.padding}px;
font-size: ${sizes.text}
border-radius: 9px;
color: ${colors.black6}

height: ${
    size === 'x-small'
      ? `${sizes.inputSizes.xSmall}px`
      : size === 'small'
        ? `${sizes.inputSizes.small}px`
        : size === 'medium'
          ? `${sizes.inputSizes.medium}px`
          : `${sizes.inputSizes.large}px`
    };
`}
`

export const SearchIconStyle = styled.Text`
  font-size: ${sizes.text};
  color: ${colors.black3};
  font-family: ${Fonts.defaultRegular};
`

export const LabelStyle = styled.Text`
  color: ${colors.black3};
  font-size: ${sizes.text};
  font-family: ${Fonts.defaultRegular};
`
