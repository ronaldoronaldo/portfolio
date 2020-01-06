import styled from 'styled-components'
import { colors } from 'config/ui'
import Button from 'components/lib/buttons/Button'

export const HeaderContainer = styled.div`
  flex: 1;
  height: 64px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 21px;
`

export const LeaveContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`

export const StyledButton = styled(Button)`
  background-color: transparent;
  color: ${colors.black4};
  font-size: 16px;
  font-weight: bold;
  width: 64px;
`
