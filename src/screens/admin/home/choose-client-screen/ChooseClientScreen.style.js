import styled from 'styled-components'
import { colors, spacing } from 'config/ui'

export const ChooseClientWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
`

export const ChooseClientContainer = styled.div`
  position: relative;
  display: flex;
  width: 570px;
  height: 302px;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.white};
  padding: ${spacing.spacingMedium}px;
  border-radius: 10px;
  box-shadow: 0 0 25px 0 rgba(83, 101, 111, 0.18);
`
