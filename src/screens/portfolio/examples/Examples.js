import React from 'react'
import {
  CardsSection,
  ComponentsSection,
  DesktopScreens,
  ExamplesContainer,
  ResponsiveScreens,
  SectionTitle
} from './Examples.style'
import ScreenCard from 'components/portfolio/screen-card/ScreenCard'

const responsiveScreens = [
  {
    title: 'login',
    image: '',
    numberOfPages: 6
  },
  {
    title: 'library',
    image: '',
    numberOfPages: 11
  },
  {
    title: 'league',
    image: '',
    numberOfPages: 2
  },
  {
    title: 'vacation',
    image: '',
    numberOfPages: 1
  }
]

const Examples = () => {

  const renderCards = cards => {
    return cards.map(card => {
      return <ScreenCard {...card}/>
    })
  }

  return (
    <ExamplesContainer>
      <ResponsiveScreens>
        <SectionTitle>Responsive Screens</SectionTitle>
        <CardsSection>
          {renderCards(responsiveScreens)}
        </CardsSection>
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
