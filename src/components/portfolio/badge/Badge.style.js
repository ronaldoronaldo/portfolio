import styled from 'styled-components'
import { colors, spacing } from 'config/ui'

export const BadgeContainer = styled.div`
  display: flex;
  width: 200px;
  padding: 32px 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const BadgeTitleBox = styled.div`
  display: flex;
  width: 150px;
  justify-content: center;
  padding: 8px;
  align-items: center;
  border-radius: 6px;
  margin-top: ${spacing.medium}px;
  background-color: ${colors.red2};
`

export const BadgeImage = styled.img`
  width: 100%;
`

export const BadgeIcon = styled.img`
  width: 100px;
  position: absolute;
  top: 88px;
`

export const BadgeTitle = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${colors.white}
`
