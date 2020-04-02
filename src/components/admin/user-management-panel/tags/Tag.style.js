import styled from 'styled-components'
import { colors, fontWeights } from 'config/ui'

export const TagStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8px;
  height: 24px;
  font-size: 12px;
  line-height: 12px;
  color: ${colors.purple3};
  background-color: ${colors.white};
  margin-left: 8px;
  border-radius: 16px;
  font-weight: ${fontWeights.bold};
  margin-bottom: 10px;
  border: 1px solid ${colors.purple2};
`
