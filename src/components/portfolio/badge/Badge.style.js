import styled from 'styled-components'
import { colors } from 'config/ui'

export const BadgeContainer = styled.div`
  display: flex;
  width: 300px;
  padding: 32px 0;
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
  background-color: ${colors.red2};
`

export const BadgeImage = styled.img`
  width: 250px;
`

export const BadgeTitle = styled.span`
  font-size: 16px;
  color: ${colors.black5}
`
