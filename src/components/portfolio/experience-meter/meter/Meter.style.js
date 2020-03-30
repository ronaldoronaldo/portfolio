import styled, { css }  from 'styled-components'
import { colors } from 'config/ui'

export const MeterRow = styled.div`
  display: flex;
  width: 48%;
  flex-direction: row;
  justify-content: space-between;
`

export const Circle = styled.div`
  ${({filled}) => css`
    background-color: ${filled ? colors.portGreen : colors.portGray};
  `}
  width: 15px;
  height: 15px;
  border-radius: 50%;
`
