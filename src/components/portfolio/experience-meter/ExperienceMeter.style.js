import styled  from 'styled-components'
import { spacing, colors } from 'config/ui'

export const ExperienceMeterRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.xSmall}px;
`

export const Label = styled.div`
  font-size: 17px;
  color: ${colors.portGray};
`
