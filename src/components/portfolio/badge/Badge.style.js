import styled, {css} from 'styled-components'
import { colors, spacing, sizes } from 'config/ui'

const specialWidth = 806

export const BadgeContainer = styled.div`
  display: flex;
  width: 120px;
  padding: 32px 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${specialWidth}px) {
    width: 176px;
  }
`

export const BadgeTitleBox = styled.div`
  display: flex;
  width: 98px;
  justify-content: center;
  padding: 8px;
  align-items: center;
  border-radius: 6px;
  margin-top: ${spacing.medium}px;
  background-color: #BA7979;
  @media (min-width: ${specialWidth}px) {
    width: 150px;
  }
`

export const BadgeImage = styled.img`
  width: 100%;
`

export const BadgeIcon = styled.img`
  width: 100%;
`

export const BadgeTitle = styled.span`
  font-size: 12.8px;
  text-align: center;
  color: ${colors.white};
  @media (min-width: ${specialWidth}px) {
    font-size: 16px;
  }
`

export const BadgeIconContainer = styled.div`
  ${({iconWidth}) => css`
    display: flex;
    width: ${iconWidth - 30}px;
    height: 100px;
    justify-content: center;
    align-items: center;
    top: 27px;
    position: absolute;
    border-radius: 50%;
    @media (min-width: ${specialWidth}px) {
      width: ${iconWidth}px;
      top: 56px;
    }
  `}
  
`
