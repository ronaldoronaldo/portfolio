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
import loginMobile from 'assets/images/portfolio/pages/loginMobile.png'
import {LOGIN_PATH} from 'routes'

const responsiveScreens = [
  {
    title: 'login',
    image: loginMobile,
    numberOfPages: 6,
    path: LOGIN_PATH
  },
  {
    title: 'library',
    image: '',
    numberOfPages: 11,
    path: LOGIN_PATH
  },
  {
    title: 'league',
    image: '',
    numberOfPages: 2,
    path: LOGIN_PATH
  },
  {
    title: 'vacation',
    image: '',
    numberOfPages: 1,
    path: LOGIN_PATH
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
