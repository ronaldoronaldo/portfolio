import styled, {css} from 'styled-components'
import { colors, spacing } from 'config/ui'

export const BadgeContainer = styled.div`
  display: flex;
  width: 176px;
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
  background-color: #BA7979;
`

export const BadgeImage = styled.img`
  width: 100%;
`

export const BadgeIcon = styled.img`
  width: 100%;
`

export const BadgeTitle = styled.span`
  font-size: 16px;
  text-align: center;
  color: ${colors.white}
`

export const BadgeIconContainer = styled.div`
  ${({iconWidth}) => css`
    display: flex;
    width: ${iconWidth}px;
    height: 100px;
    justify-content: center;
    align-items: center;
    top: 56px;
    position: absolute;
    border-radius: 50%;
  `}
  
`
