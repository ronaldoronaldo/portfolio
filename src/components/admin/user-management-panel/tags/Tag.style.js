import styled from 'styled-components'
import { colors, fontWeights } from 'config/ui'

export const TagStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px 6px 8px;
  font-size: 12px;
  color: ${colors.purple3};
  background-color: ${colors.purple1};
  margin-left: 8px;
  border-radius: 16px;
  font-weight: ${fontWeights.bold};
  margin-bottom: 10px;
  border: ${props => (props.border ? `1px solid ${colors.purple2}` : 'none')};
`
