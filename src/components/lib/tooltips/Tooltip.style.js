import styled from 'styled-components'
import { colors, sizes, fontWeights } from 'config/ui'

export const TooltipStyle = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  background-color: #53656f;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  font-size: ${sizes.label + 1}px;
  font-weight: ${fontWeights.bold};
  z-index: 9;
  padding: 0 ${sizes.padding / 8}px;
`
