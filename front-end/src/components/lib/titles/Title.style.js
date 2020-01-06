import styled, { css } from 'styled-components'
import { sizes, colors } from 'config/ui'

export const TitleStyle = styled.h1`
  ${({ size, textAlign, textAlignMobile, sizeMobile }) => css`
    color: ${colors.black6};
    font-size: ${sizeMobile ? sizes.h[sizeMobile].size : sizes.h[1].size}px;
    line-height: ${sizeMobile
      ? sizes.h[sizeMobile].lineHeight
      : sizes.h[1].lineHeight}px;
    text-align: ${textAlignMobile ? textAlignMobile : 'left'};
    font-weight: bold;
    @media (min-width: ${sizes.mdScreen}px) {
      text-align: ${textAlign ? textAlign : 'center'};
      font-size: ${size ? sizes.h[size].size : sizes.h[1].size}px;
      line-height: ${size ? sizes.h[size].lineHeight : sizes.h[1].lineHeight}px;
    }
  `}
`
