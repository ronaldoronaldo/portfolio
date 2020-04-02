import styled from 'styled-components'
import { colors, sizes, fontWeights, spacing } from 'config/ui'

export const Countdown = styled.div`
  display: flex;

  > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5px;
    font-size: ${sizes.text}px;
    font-weight: ${fontWeights.bold};
    @media (min-width: ${sizes.mScreen}px) {
      font-size: 25px;
      margin: 0 10px;
    }
  }

  > span:last-child {
    margin: 0 0 0 5px;
    @media (min-width: ${sizes.mScreen}px) {
      margin: 0 0 0 10px;
    }
  }

  > span > span {
    font-size: ${sizes.bodySmall}px;
    color: ${colors.black4};
    font-weight: normal;
    @media (min-width: ${sizes.mScreen}px) {
      font-size: ${sizes.text}px;
    }
  }
`

export const StyledDots = styled.span`
  font-size: 26px;
  color: ${colors.black01};
`
