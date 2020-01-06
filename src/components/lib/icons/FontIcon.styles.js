import styled from 'styled-components'
import { colors, sizes } from 'config/ui'

export const Icon = styled.span`
  font-size: ${props => props.sizeMobile || 20}px;
  color: ${props => props.color || colors.black6};
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: ${props => props.size || 20}px;
  }
`
