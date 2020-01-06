import styled from 'styled-components'
import { colors } from 'config/ui'

export const HeaderContainer = styled.div`
  flex: 1;
  height: 64px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
`

export const PathsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`
