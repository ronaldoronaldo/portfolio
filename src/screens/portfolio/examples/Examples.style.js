import styled from 'styled-components'
import {colors, fontWeights, sizes} from 'config/ui'

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
  flex: 1;
`

export const ResponsiveScreens = styled(Section)`
`
export const DesktopScreens = styled(Section)`
  display: none;
  @media (min-width: ${sizes.mdScreen}px) {
    display: flex;
  } 
`
export const ComponentsSection = styled(Section)`
`

export const SectionTitle = styled.span`
  font-size: 32px;
  font-weight: ${fontWeights.bold};
`
