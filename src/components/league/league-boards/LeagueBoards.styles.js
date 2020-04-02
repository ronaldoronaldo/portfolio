import styled, { css } from 'styled-components'
import { colors, sizes, fontWeights, spacing } from 'config/ui'
import { Grid, Row, Column } from 'components/league/flexboxgrid'
import { Link } from 'react-router-dom'

export const StyledGrid = styled(Grid)`
  display: flex;
  padding: 0;
  flex-direction: column;
`

export const StyledRow = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  &:nth-child(2) {
    margin-top: ${spacing.large}px;
  }
  @media (min-width: ${sizes.mScreen}px) {
    flex-direction: row;
  }
`

export const StyledColumn = styled(Column)`
  padding: 0;
  margin: 0;
`

export const Ranking = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 0;
  @media (min-width: ${sizes.mScreen}px) {
    margin-right: 16px;
  }
`

export const RankingHistory = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 0;
  overflow: hidden;
  margin-top: ${spacing.large}px;
  @media (min-width: ${sizes.sScreen}px) {
    overflow: initial;
    margin-right: 0;
  }
  @media (min-width: ${sizes.mScreen}px) {
    margin-right: 16px;
    margin-top: 0;
  }
`

export const RankingTitle = styled.div`
  font-size: 25px;
  color: ${colors.black6};
  font-weight: bold;
  margin: 0 ${spacing.small}px;
  @media (min-width: ${sizes.mScreen}px) {
    margin: 0;
  }
`

export const HistoryTitle = styled.div`
  font-size: 25px;
  color: ${colors.black6};
  font-weight: bold;
  margin: 0 ${spacing.small}px;
`

export const WrapperMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-bottom: 1px solid ${colors.black2};
  margin: ${spacing.small}px ${spacing.small}px 0 ${spacing.small}px;
  @media (min-width: ${sizes.mScreen}px) {
    margin: 18px 0 0 0;
  }
`

export const MenuItem = styled.a`
  margin-right: 32px;
  border-bottom: ${props =>
    props.active ? `2px solid ${colors.black5}` : 'none'};
  padding: 9px 0px;
  font-size: 16px;
  font-weight: ${fontWeights.semiBold};
  color: ${props => (props.active ? colors.black5 : colors.black3)};
  cursor: pointer;

  &:before {
    content: '${props => props.title}';
  }
`

export const UserLevelInfo = styled.div`
  flex: 1;
`

export const UserLevelInfoMobile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`

export const RankingHistoryContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: ${spacing.large}px;
  margin-left: ${spacing.small}px;
`

export const ListItem = styled.li`
  ${({ featured }) => css`
    display: flex;
    justify-content: space-between;
    padding: 15px 23px 18px 24px;
    color: ${colors.black4};
    border-bottom: 1px solid ${colors.black2};

    ${featured &&
      `
      color: ${colors.black5};
      background-color: ${colors.idGreen2};
    `};
  `};
`

export const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 0;
  margin-bottom: ${spacing.small}px;
  @media (min-width: ${sizes.sScreen}px) {
    padding: 0 ${spacing.small}px;
  }
  @media (min-width: ${sizes.mScreen}px) {
    padding: 0;
    margin-right: ${spacing.small}px;
    margin-bottom: 0;
  }
`

export const LeagueBannerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: ${spacing.small}px;
  margin-left: ${spacing.small}px;
  @media (min-width: ${sizes.mScreen}px) {
    margin-right: 0;
  }
`

export const LeagueBanner = styled(Link)`
  ${({ bgColor, noSpacingTop, detectiveBanner }) => css`
    background-color: ${bgColor ? bgColor : colors.idGreen1};
    margin-top: ${noSpacingTop ? 0 : '16px'};
    justify-content: ${detectiveBanner ? 'flex-start' : 'space-between'};
  `} height: 80px;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  border-radius: 10px;
  align-items: center;
  padding: 0 16px 0 16px;
  @media (min-width: ${sizes.mScreen}px) {
    height: 119px;
    padding: 0 ${spacing.small}px 0 ${spacing.medium}px;
  }
`

export const LeagueBannerTitle = styled.span`
  ${({ color }) => css`
    color: ${color ? color : colors.green3};
    font-size: ${sizes.bodySmall}px;
    font-weight: ${fontWeights.bold};
  `}
  @media (min-width: ${sizes.mScreen}px) {
    font-size: ${sizes.text}px;
  }
  @media (min-width: ${sizes.mScreen}px) {
    font-size: 20px;
  }
`

export const LeagueBannerSubtitle = styled.span`
  text-align: left;
  line-height: 16px;
  color: ${colors.black5};
  font-size: ${sizes.bodySmall}px;
  @media (min-width: ${sizes.mScreen}px) {
    font-size: ${sizes.bodySmall}px;
  }
  @media (min-width: ${sizes.mScreen}px) {
    font-size: ${sizes.text}px;
    line-height: 23px;
  }
`

export const LeagueBannerTextContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${sizes.mScreen}px) {
    padding-right: ${spacing.xSmall}px;
  }
`

export const LeagueBannerImage = styled.img`
  width: 102px;
  position: relative;
  top: 8px;
  margin-left: ${spacing.small}px;
  @media (min-width: ${sizes.sScreen}px) {
    width: 121px;
    top: 0;
  }
  @media (min-width: ${sizes.mScreen}px) {
    width: 184px;
  }
`

export const LeagueRedBannerImage = styled.img`
  width: 96px;
  position: relative;
  left: -34px;
  top: -3px;
  @media (min-width: ${sizes.sScreen}px) {
    margin-right: ${spacing.medium}px;
    width: 130px;
    top: -5px;
  }
  @media (min-width: ${sizes.mScreen}px) {
    width: 183px;
    left: -31px;
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
`

export const Position = styled.div`
  font-weight: ${fontWeights.bold};
`

export const Points = styled.div`
  ${({ featured }) => css`
    font-weight: ${fontWeights.bold};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: ${sizes.text}px;
    color: ${colors.black5};

    > span {
      font-weight: ${fontWeights.regular};
      color: ${featured ? colors.black5 : colors.black3};
    }
  `};
`

export const UserInfo = styled.div`
  ${({ featured }) => css`
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    font-weight: ${fontWeights.bold};
    font-size: ${sizes.text}px;

    > span:last-child {
      font-weight: ${fontWeights.regular};
      color: ${featured ? colors.black5 : colors.black3};
    }
  `};
`

export const LeagueInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${colors.purple3};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 24px 40px 36px 45px;
  height: 185px;

  @media (max-width: ${sizes.mScreen}px) {
    display: none;
  }
`

export const UnrankedListCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: solid 1px ${colors.black2};
  margin-top: 10px;
  flex: 1;
  min-height: 262px;
  padding: ${spacing.medium}px ${spacing.small}px;
  @media (max-width: ${sizes.mScreen}px) {
    margin: 10px ${spacing.small}px 0 ${spacing.small}px;
    min-height: 191px;
  }
`

export const UnrankedListImage = styled.img`
  width: 114px;
  margin-bottom: ${spacing.small}px;
  @media (max-width: ${sizes.mScreen}px) {
    width: 70px;
  }
`

export const UnrankedPoints = styled.div`
  font-weight: ${fontWeights.bold};
  font-size: 48.8px;
  margin-bottom: ${spacing.small}px;

  > span {
    font-size: ${sizes.bodySmall}px;
    font-weight: ${fontWeights.regular};
  }
`

export const UnrankedText = styled.div`
  ${({ color, userWaiting }) => css`
    color: ${color ? color : colors.white};
    max-width: ${userWaiting ? 350 : 256}px;
    font-weight: ${fontWeights.regular};
  `} line-height: 1.25;
  font-size: ${sizes.bodySmall}px;
  text-align: center;
  > span {
    font-weight: ${fontWeights.bold};
  }
  @media (min-width: ${sizes.mScreen}px) {
    font-size: ${sizes.text}px;
    line-height: 1.75;
  }
`

export const UnrankedLeagueInfo = styled.div`
  ${({ userWaiting }) => css`
    background-color: ${userWaiting ? colors.idGreen2 : colors.orange3};
    color: ${userWaiting ? colors.black6 : colors.white};
  `} display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 24px 40px 36px 32px;
  height: 185px;

  @media (max-width: ${sizes.mScreen}px) {
    padding: 16px 16px 20px 16px;
    flex: 1;
    height: 143px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`

export const LeagueInfoMobile = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.purple3};
  padding: 16px 16px 20px 16px;
  flex: 1;
  @media (min-width: ${sizes.sScreen}px) {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  @media (min-width: ${sizes.mScreen}px) {
    display: none;
  }
`

export const LevelImage = styled.img`
  margin-right: ${spacing.small}px;
  width: 42px;
  height: 58px;
  @media (min-width: ${sizes.mScreen}px) {
    margin-bottom: 0;
    margin-right: 50px;
    height: 105px;
    width: 76px;
  }
`

export const LevelAndPoints = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${fontWeights.bold};
  font-size: 26px;
  @media (max-width: ${sizes.mScreen}px) {
    flex: 1;
  }

  > div {
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    font-size: 20px;
    @media (min-width: ${sizes.mScreen}px) {
      font-size: 32px;
    }
  }

  > div:last-child {
    align-items: flex-end;
    font-size: 20px;
    @media (min-width: ${sizes.mScreen}px) {
      font-size: 25px;
    }
  }

  > div > span {
    font-weight: normal;
    color: ${colors.white};
    font-size: ${sizes.bodySmall}px;
    line-height: 1.25;
    @media (min-width: ${sizes.mScreen}px) {
      font-size: ${sizes.text}px;
      line-height: 1.75;
    }
  }
`

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
`

export const ProgressBar = styled.div`
  ${({ percentage }) => css`
    display: block;
    width: 100%;
    height: 8px;
    background-color: ${colors.purple2};
    border-radius: 4px;

    &:before {
      border-radius: 4px;
      content: '';
      display: inline-block;
      height: 8px;
      background-color: ${colors.idGreen};
      position: relative;
      top: -8px;
      width: ${percentage}%;
    }
  `};
`

export const ProgressBarLabel = styled.div`
  display: flex;
  color: ${colors.white};
  margin-top: ${spacing.xSmall}px;
  justify-content: space-between;
  width: 100%;
  > div {
    font-size: ${sizes.bodySmall}px;
  }
`

export const FirstPlace = styled.div`
  color: ${colors.yellow};
  display: flex;
  align-items: center;

  > svg {
    margin-right: 10px;
  }
`

export const MonthCountdownWrapper = styled.div`
  background-color: ${colors.paleGrayFour};
  padding: ${spacing.xSmall}px ${spacing.small}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 69px;
  @media (min-width: ${sizes.sScreen}px) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  @media (min-width: ${sizes.mScreen}px) {
    padding: ${spacing.xSmall}px ${spacing.medium}px;
    font-size: 16px;
  }
`

export const Month = styled.span`
  font-size: ${sizes.bodySmall}px;
  color: ${colors.black6};
  @media (min-width: ${sizes.mScreen}px) {
    margin-bottom: 0;
    font-size: 16px;
  }
`
