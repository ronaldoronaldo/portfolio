import styled, { css } from 'styled-components'
import { sizes, colors, fontWeights, spacing } from 'config/ui'

export const CurriculumContainer = styled.div`
  color: white;
  position: relative;
  width: 100%;
  top: 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${sizes.mdScreen}px) {
    top: 212px;
  }
`

export const NameSection = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
`

export const NameText = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  margin-left: 16px;
  justify-content: space-between;
  max-height: 100px;
  @media (min-width: ${sizes.mdScreen}px) {
    max-height: 140px;
  }
`

export const LeftSide = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  @media (min-width: ${sizes.mdScreen}px) {
    padding: 0;
    max-width: 100%;
    margin-bottom: 0;
  }
`

export const RightSide = styled.div`
  flex-direction: column;
  display: flex;
  border-left: none;
  flex: 1;
  @media (min-width: ${sizes.mdScreen}px) {
    max-width: 100%;
  }
`

export const LeftSectionContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  padding-right: 0;
`

export const RightSectionContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  padding-left: 0;
  margin-bottom: ${spacing.medium}px;
`

export const ContactsSection = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
`

export const Education = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
`

export const Contacts = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
  padding-right: 32px;
`

export const LanguagesContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-top: ${spacing.small}px;
`

export const Language = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: ${spacing.small}px;
  color: ${colors.portGray};
  @media (min-width: ${sizes.mdScreen}px) {
    width: 33%;
  }
`

export const LanguagesRightColumn = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  width: 100%;
  padding-left: 0;
  @media (min-width: ${sizes.mdScreen}px) {
    padding-left: ${spacing.xSmall}px;
    width: 50%;
  }
`

export const LanguagesLeftColumn = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  width: 100%;
  padding-right: 0;
  @media (min-width: ${sizes.mdScreen}px) {
    padding-right: ${spacing.xSmall}px;
    width: 50%;
  }
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
`

export const ExperienceTitle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacing.small}px;
`

export const ExperienceList = styled.ul`
  padding-left: 18px;
`

export const ExperienceListItem = styled.li`
  color: ${colors.portGrayText};
  font-size: 14px;
  font-weight: ${fontWeights.regular};
  margin-bottom: 8px;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 16px;
  }
`

export const ExperienceText = styled.span`
  color: ${colors.portGray};
  font-size: 14px;
  font-weight: ${fontWeights.regular};
  a {
    color: ${colors.portGray};
    text-decoration: none;
    cursor: pointer;
  }
  @media (min-width: ${sizes.smScreen}px) {
    font-size: 16px;
  }
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 20px;
  }
`

export const EducationDescription = styled.span`
  color: ${colors.portDark};
  font-size: 18px;
  font-weight: ${fontWeights.regular};
`

export const LampImage = styled.img`
  width: 100px;
  margin-bottom: ${spacing.medium}px;
  @media (min-width: ${sizes.mdScreen}px) {
    width: 140px;
  }
`
export const ScreensImage = styled.img`
  width: 100%;
  margin-bottom: ${spacing.medium}px;
  @media (min-width: ${sizes.mdScreen}px) {
    width: 100%;
  }
`

export const ProfileText = styled.span`
  color: ${colors.portGray};
  font-size: ${sizes.text}px;
  font-weight: ${fontWeights.regular};
  line-height: 1.5 !important;
  margin-bottom: ${spacing.medium}px;
  margin-top: ${spacing.small}px;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 16px;
  }
`

export const Title = styled.span`
  color: ${colors.white};
  font-size: 26px;
  font-weight: ${fontWeights.bold};
  line-height: 1 !important;
  margin-bottom: ${spacing.xSmall}px;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 34px;
    margin-bottom: ${spacing.mSmall + 2}px;
  }
`

export const NameTitle = styled(Title)`
  font-size: 32px !important;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 52px !important;
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
  font-size: ${sizes.text}px;
  font-weight: ${fontWeights.regular};
  line-height: 1 !important;
  margin-bottom: ${spacing.xSmall}px;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 24px;
  }
`

export const NameRole = styled(Role)`
  font-size: 24px !important;
  @media (min-width: ${sizes.mdScreen}px) {
    font-size: 32px !important;
  }
`
