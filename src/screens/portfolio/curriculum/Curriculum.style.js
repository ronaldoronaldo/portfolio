import styled from 'styled-components'
import {sizes, colors, fontWeights, spacing} from 'config/ui'

export const CurriculumContainer = styled.div`
  color: white;
  position: relative;
  width: 100%;
  top: 134px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${sizes.mdScreen}px) {
    flex-direction: row;
    top: 212px;
  } 
`

export const LeftSide = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
`

export const RightSide = styled.div`
  flex-direction: column;
  display: flex;
  border-left: 4px solid ${colors.portDivision};
  flex: 1.8;
`

export const LeftSectionContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  padding-right: ${spacing.medium}px;
  margin-top: ${spacing.medium}px;
`

export const InformationRow = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  margin-bottom: ${spacing.small}px;
  justify-content: space-between;
`

export const Spacing = styled.div`
  height: ${spacing.small}px;
`

export const TitleDivision = styled.div`
  width: 70px;
  border: 2px solid ${colors.portGreen};
  margin-bottom: ${spacing.small}px;
`

export const StyledImage = styled.img`
  width: 100%;
  margin-bottom: ${spacing.medium}px;
  @media (min-width: ${sizes.mdScreen}px) {
    width: 60%;
  }
`

export const ProfileText = styled.span`
  color: ${colors.portGray};
  font-size: ${sizes.text}px;
  font-weight: ${fontWeights.regular};
  line-height: 1.5 !important;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 16px;
  }
`

export const Title = styled.span`
  color: ${colors.white};
  font-size: ${sizes.text}px;
  font-weight: ${fontWeights.bold};
  line-height: 1 !important;
  margin-bottom: ${spacing.mSmall}px;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 34px;
  }
`

export const Info = styled.span`
  color: ${colors.portGray};
  font-size: ${sizes.text}px;
  font-weight: ${fontWeights.regular};
  line-height: 1 !important;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 16px;
  }
`

export const Role = styled.span`
  color: ${colors.portDark};
  font-size: 12px;
  font-weight: ${fontWeights.regular};
  line-height: 1 !important;
  margin-bottom: ${spacing.xSmall}px;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 24px;
  }
`
