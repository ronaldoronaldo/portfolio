import styled from 'styled-components'
import { colors, spacing } from 'config/ui'

export const BadgeContainer = styled.div`
  display: flex;
  width: 240px;
  padding: 32px 16px;
  justify-contents: space-between;
  align-items: center;
  flex-direction: column;
`

export const BadgeTitleBox = styled.div`
  display: flex;
  width: 150px;
  justify-contents: center;
  align-items: center;
  border-radius: 50%;
  margin-top: ${spacing.medium}px;
  background-color: ${colors.red2};
`

export const BadgeImage = styled.img`
  width: 100%;
`

export const BadgeIcon = styled.img`
  width: 100pxpx;
  position: absolute;
  top: 88px;
`

export const BadgeTitle = styled.span`
  font-size: 16px;
  text-align: center;
  color: ${colors.black5}
`
