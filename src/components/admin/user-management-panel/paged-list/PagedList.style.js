import styled from 'styled-components'
import { colors, fontWeights } from 'config/ui'
import Button from 'components/lib/buttons/Button'

export const PagedListContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 335px;
  width: 100%;
`

export const PagedListContent = styled.div`
  min-height: 240px;
`

export const EmprtyMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  border: solid 1px ${colors.orange2};
  background-color: ${colors.orange1};
  color: ${colors.orange3};
  font-size: 13px;
  border-radius: 5px;
`

export const PagedListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 7px 9px 7px 16px;
  background-color: ${colors.black1};
  border: 1px solid ${colors.black2};
  margin-bottom: 8px;
  border-radius: 10px;
`

export const PagedItemLabel = styled.div`
  font-weight: ${fontWeights.bold};
  color: ${colors.black5};
  font-size: 13px;
  display: flex;
  align-items: center;
`

export const PagedItemButton = styled(Button)`
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
  width: 66px;
  height: 24px;
  font-size: 12px;
`

export const StyledLink = styled.a`
  color: ${colors.purple3};
  margin-left: 3px;
  text-decoration: underline;
`
