import styled from 'styled-components'
import { colors, fontWeights, sizes } from 'config/ui'
import { spacing } from '../../../config/ui'

export const ExamplesContainer = styled.div`
  color: ${colors.black4};
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

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const CardsSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  margin-bottom: ${spacing.large}px;
`

export const ResponsiveScreens = styled(Section)`
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const DesktopScreens = styled(Section)`
  display: none;
  @media (min-width: ${sizes.mdScreen}px) {
    display: flex;
  }
`
export const ComponentsSection = styled(Section)`
  margin-top: ${spacing.large}px;
`

export const SectionTitle = styled.span`
  font-size: 32px;
  font-weight: ${fontWeights.bold};
  margin-bottom: ${spacing.small}px;
`

export const SectionSubtitle = styled.span`
  font-size: 18px;
  font-weight: ${fontWeights.regular};
  text-align: center;
  margin-bottom: ${spacing.large + 16}px;
`
