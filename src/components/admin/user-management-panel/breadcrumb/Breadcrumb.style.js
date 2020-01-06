import styled from 'styled-components'
import { colors } from 'config/ui'
import { Link } from 'react-router-dom'

export const PathsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-size: 13px;
`

export const LastPath = styled.span`
  color: ${colors.black5};
  font-weight: bold;
`

export const PathLink = styled(Link)`
  color: ${colors.black3};
  font-weight: bold;
`
