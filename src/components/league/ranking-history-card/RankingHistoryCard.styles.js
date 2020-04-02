import styled, { css } from 'styled-components'
import { colors, sizes, fontWeights, spacing } from 'config/ui'

export const HistoryItem = styled.div`
  height: 262px;
  margin-right: ${spacing.small}px;
  border-radius: 8.5px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
`

export const HistoryItemBody = styled.div`
  ${({ declassified }) => css`
    background-color: ${declassified ? colors.red1 : colors.white};
    border-top: 1px solid ${declassified ? colors.red1 : colors.black2};
    border-right: 1px solid ${declassified ? colors.red1 : colors.black2};
    border-left: 1px solid ${declassified ? colors.red1 : colors.black2};
    display: flex;
    padding: 0 22px;
    justify-content: center;
    align-items: center;
    flex: 5;
    border-top-left-radius: 8.5px;
    border-top-right-radius: 8.5px;
    flex-direction: column;
    > img {
      width: 75px;
      margin-bottom: 10px;
    }
  `}
`

export const HistoryItemIcon = styled.i`
  ${({ iconColor }) => css`
    font-size: 5em;
    color: ${iconColor};
  `}
`

export const HistoryItemFooter = styled.div`
  ${({ bgColor, noPointsFooter }) => css`
    flex: 1;
    background-color: ${bgColor ? bgColor : colors.purple3};
    border: 1px solid ${bgColor ? bgColor : colors.purple3};
    border-bottom-left-radius: 8.5px;
    border-bottom-right-radius: 8.5px;
    border-top: none;
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    justify-content: ${noPointsFooter ? 'center' : 'space-between'};
    align-items: center;
    color: ${colors.white};
  `}
`

export const HistoryItemPointsNumber = styled.span`
  font-size: 18px;
  font-weight: ${fontWeights.bold};
  line-height: 1.36;
  letter-spacing: normal;
  margin-right: ${spacing.xSmall}px;
`

export const HistoryItemPointsLabel = styled.span`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.6;
  letter-spacing: normal;
`

export const HistoryItemMonth = styled.div`
  font-size: 14px;
  font-weight: ${fontWeights.bold};
  line-height: 1.44;
  letter-spacing: normal;
`

export const MonthGhost = styled.div`
  display: flex;
  height: 262px;
  margin-right: ${spacing.small}px;
  border-radius: 8.5px;
  background-color: #f5f8fa;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MonthGhostIcon = styled.i`
  font-size: 3em;
  color: ${colors.gray4};
`

export const RankTier = styled.span`
  font-size: ${sizes.h[5]}px;
  font-weight: ${fontWeights.bold};
  letter-spacing: 0.2px;
  text-align: center;
  color: ${colors.black};
  margin-top: 9px;
  opacity: 0.9;
`

export const RankStatus = styled.span`
  font-size: 13.8px;
  font-weight: ${fontWeights.regular};
  letter-spacing: 0.2px;
  text-align: center;
  color: ${colors.black6};
  margin-top: 4px;
`

export const MonthGhostLabel = styled.span`
  font-size: 18px;
  font-weight: ${fontWeights.bold};
  letter-spacing: 0.2px;
  text-align: center;
  color: ${colors.gray4};
  margin-top: 9px;
  opacity: 0.9;
`

export const RankPosition = styled.span`
  opacity: 0.8;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.88;
  letter-spacing: 0.3px;
  color: ${colors.gray4};
`
