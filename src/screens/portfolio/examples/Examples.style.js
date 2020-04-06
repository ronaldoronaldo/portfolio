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
  justify-content: flex-start;
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

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${colors.black2};
  width: 100%;
`

export const FormContainer = styled(ComponentsContainer)`
  border-top: none;
`

export const CardsSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${spacing.large}px;
  @media (min-width: ${sizes.mScreen}px) {
     flex-direction: row;
  }
`

export const PaddingBox = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: ${sizes.mScreen}px) {
    padding: 0;
  }
`

export const NoPaddingBox = styled.div`
  width: 100%;
  padding: 0 0 0 16px;
  @media (min-width: ${sizes.mScreen}px) {
    padding: 0;
  }
`

export const ResponsiveScreens = styled(Section)`
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0 16px;
  @media (min-width: ${sizes.mScreen}px) {
    padding: 0;
  }
`

export const ComponentsSection = styled(Section)`
  flex-direction: column;
  margin-top: ${spacing.large + 16}px;
  margin-bottom: ${spacing.large + 32}px;
`

export const FormSection = styled(Section)`
  flex-direction: column;
  margin-top: ${spacing.large + 16}px;
  margin-bottom: ${spacing.large + 56}px;
`

export const SectionTitle = styled.span`
  font-size: 32px;
  text-align: center;
  font-weight: ${fontWeights.bold};
  margin-bottom: ${spacing.small}px;
`

export const SectionSubtitle = styled.span`
  font-size: 18px;
  font-weight: ${fontWeights.regular};
  text-align: center;
  margin-bottom: ${spacing.large + 16}px;
`
