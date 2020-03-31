import React from 'react'
import {
  ComponentsSection,
  DesktopScreens,
  ExamplesContainer,
  ResponsiveScreens,
  SectionTitle
} from './Examples.style'

const Examples = () => {
  return (
    <ExamplesContainer>
      <ResponsiveScreens>
        <SectionTitle>Responsive Screens</SectionTitle>

      </ResponsiveScreens>
      <DesktopScreens>
        <SectionTitle>Desktop Screens</SectionTitle>

      </DesktopScreens>
      <ComponentsSection>
        <SectionTitle>Components Examples</SectionTitle>

      </ComponentsSection>
    </ExamplesContainer>
  )
}

export default Examples
