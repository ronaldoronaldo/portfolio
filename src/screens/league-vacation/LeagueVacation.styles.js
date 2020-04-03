import styled from 'styled-components'
import { colors, spacing, fontWeights, sizes } from 'config/ui'
import { Grid, Column } from 'components/league/flexboxgrid'

export const StyledGrid = styled(Grid)`
  padding: 0;
  margin: 0;
  width: 100:
`

export const StyledColumn = styled(Column)`
  padding: 0;
  margin: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffe268;
  width: 100%;
  height: 100vh;
  position: relative;
  border-radius: 0;
  @media (min-width: ${sizes.mScreen}px) {
    height: auto;
  }
`

export const TopWrapper = styled(Container)`
  background-color: #8553f4;
  height: 340px;
  @media (min-width: ${sizes.mScreen}px) {
    height: 468px;
  }
`

export const MidWrapper = styled(Container)`
  background-color: #6b42c7;
  height: 156px;
  border-radius: 0;
  justify-content: center;
  @media (min-width: ${sizes.mScreen}px) {
    height: 233px;
    border-radius: 0;
  }
`

export const BotWrapper = styled(Container)`
  background-color: #ffe268;
  justify-content: center;
  height: 194px;
  @media (min-width: ${sizes.mScreen}px) {
    height: 334px;
  }
`

export const Title = styled.span`
  font-size: 13px;
  color: ${colors.white};
  margin-top: ${spacing.large}px;
  font-weight: ${fontWeights.regular};
  text-transform: uppercase;
  @media (min-width: ${sizes.mScreen}px) {
    font-weight: ${fontWeights.bold};
    font-size: 30px;
    text-transform: none;
  }
`

export const Subtitle = styled.span`
  max-width: 162px;
  text-align: center;
  margin-top: ${spacing.small + 6}px;
  margin-bottom: ${spacing.small - 4}px;
  font-size: 12px;
  color: ${colors.leagueOnVacationYellow};
  @media (min-width: ${sizes.mScreen}px) {
    max-width: 259px;
  }
`

export const Text = styled.span`
  max-width: 288px;
  text-align: center;
  font-size: 15px;
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
  @media (min-width: ${sizes.mScreen}px) {
    font-size: 22.2px;
    max-width: 430px;
  }
`

export const BotText = styled(Text)`
  color: ${colors.leagueOnVacationPurple2};
`
export const MidText = styled(Text)``

export const RoundIconContainer = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  > img {
    width: 21px;
    height: 21px;
  }
  @media (min-width: ${sizes.mScreen}px) {
    width: 66px;
    height: 66px;
    > img {
      width: 31px;
      height: 31px;
    }
  }
`

export const RoundIconContainerTop = styled(RoundIconContainer)`
  background-color: ${colors.leagueOnVacationYellow};
  border: 4.3px solid ${colors.leagueOnVacationPurple1};
  position: relative;
  z-index: 2;
  bottom: -14px;
  @media (min-width: ${sizes.mScreen}px) {
    bottom: -67px;
  }
`

export const RoundIconContainerBot = styled(RoundIconContainer)`
  background-color: ${colors.leagueOnVacationPurple2};
  border: 4.3px solid ${colors.leagueOnVacationYellow};
  position: relative;
  z-index: 2;
  top: -28px;
  @media (min-width: ${sizes.mScreen}px) {
    top: -95px;
  }
`

export const DivisionImage = styled.img`
  width: 100%;
  position: absolute;
  height: 79.6px;
`

export const DivisionImageTop = styled(DivisionImage)`
  bottom: 0;
  @media (min-width: ${sizes.mScreen}px) {
    bottom: -12px;
  }
`

export const DivisionImageBot = styled(DivisionImage)`
  top: 0;
  @media (min-width: ${sizes.mScreen}px) {
    top: -5px;
  }
`
