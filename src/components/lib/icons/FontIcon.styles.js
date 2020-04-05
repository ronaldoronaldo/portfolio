import styled, {css} from 'styled-components'
import { colors, sizes } from 'config/ui'

export const Icon = styled.span`
  ${({ sizeMobile, color, hardMobile, size}) => css`
    font-size: ${sizeMobile || 20}px;
    color: ${color || colors.black6};
    font-size: ${hardMobile}px !important;
    
    @media (min-width: ${sizes.mdScreen}px) {
      font-size: ${size || 20}px;
    }
  `}

  
`
