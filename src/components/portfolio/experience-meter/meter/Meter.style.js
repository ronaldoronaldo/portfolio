import styled, { css }  from 'styled-components'
import { colors, sizes, spacing } from 'config/ui'

export const MeterRow = styled.div`
  display: flex;
  width: 125px;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: ${sizes.mdScreen}px) {
    width: 48%;
  } 
`

export const Circle = styled.div`
  ${({filled}) => css`
    background-color: ${filled ? colors.portGreen : colors.portGray};
  `}
  width: 15px;
  height: 15px;
  border-radius: 50%;
`
